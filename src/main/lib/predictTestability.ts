import { adafestMetricsMapper } from "./adafestMetricsMapper";
import {
  normalizeLinear,
  preProcessAverage,
  preProcessMedian,
} from "./preProcessing";

type FileMetrics = {
  filesAmt: number;
  cyclo: number;
  commandAmt: number;
  linesOfCode: number;
};

export function predictFileTestability(
  file: TestabilityPredictFileMetrics,
  metrics: FileMetrics
): number {
  return (
    file.projFilesAmt * metrics.filesAmt +
    file.cyclo * metrics.cyclo +
    file.uOpsAmt * metrics.commandAmt +
    file.linesOfCode * metrics.linesOfCode
  );
}

export function getFitnessOfMetrics(
  adafestDataSet: AdafestTrainingsData,
  metrics: FileMetrics
): number {
  const testabilitySet = adafestDataSet.map((file) => {
    const predictedTestability = predictFileTestability(
      adafestMetricsMapper(file),
      metrics
    );

    return {
      testability: file.Testability,
      predictedTestability,
    };
  });

  // Preprocess data
  const processedData = preProcessAverage(testabilitySet);
  const normalizedData = normalizeLinear(processedData);

  if (
    Math.min(...normalizedData.map((d) => d.predictedTestability)) != 0 ||
    Math.max(...normalizedData.map((d) => d.predictedTestability)) != 1
  ) {
    console.error(
      "Normalization failed. Either the min is not 0 or the max is not 1."
    );
    process.exit(1);
  }

  // Calculate fitness
  const fitness = normalizedData.reduce((acc, curr) => {
    return acc + Math.abs(curr.testability - curr.predictedTestability);
  }, 0);

  console.log(
    `min|max preProc: ${Math.min(
      ...processedData.map((d) => d.predictedTestability)
    )} | ${Math.max(...processedData.map((d) => d.predictedTestability))}`
  );
  console.log(
    `min|max normalized: ${Math.min(
      ...normalizedData.map((d) => d.predictedTestability)
    )} | ${Math.max(...normalizedData.map((d) => d.predictedTestability))}`
  );
  console.log(`amt of files analyzed: ${processedData.length}`);
  return fitness;
}
