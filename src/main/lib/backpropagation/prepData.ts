import { FileMetrics } from "../predictTestability";
import { adafestMetricsMapper } from "../adafestMetricsMapper";
import { normalizeMinMax, preProcessAverage } from "../preProcessing";

export function prepareData(
  adafestDataSet: AdafestTrainingsData,
  metrics: FileMetrics,
  testabilityMapper: (
    file: TestabilityPredictFileMetrics,
    metrics: FileMetrics
  ) => number
): TestabilityData[] {
  const testabilitySet = adafestDataSet.map((file) => {
    const predictedTestability = testabilityMapper(
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
  const normalizedData = normalizeMinMax(processedData);

  if (
    Math.min(...normalizedData.map((d) => d.predictedTestability)) != 0 ||
    Math.max(...normalizedData.map((d) => d.predictedTestability)) != 1
  ) {
    throw Error(
      `Normalization failed. Either the min is not 0 or the max is not 1. Min|Max: ${Math.min(
        ...normalizedData.map((d) => d.predictedTestability)
      )} ${Math.max(...normalizedData.map((d) => d.predictedTestability))}`
    );
  }

  return normalizedData;
}
