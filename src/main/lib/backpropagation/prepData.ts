import { FileMetrics, predictFileTestability } from "../predictTestability";
import { adafestMetricsMapper } from "../adafestMetricsMapper";
import { normalizeLinear, preProcessAverage } from "../preProcessing";

export function prepareData(
  adafestDataSet: AdafestTrainingsData,
  metrics: FileMetrics
): TestabilityData[] {
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

  return normalizedData;
}
