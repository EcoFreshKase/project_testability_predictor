import {
  createPredictFileTestabilityLinearRegression,
  FileMetrics,
} from "../predictTestability";
import { prepareData } from "./prepData";

export function analyzeDataSet(
  data: AdafestTrainingsData,
  metric: FileMetrics,
  intercept: number
): number {
  const linearRegressionPredict =
    createPredictFileTestabilityLinearRegression(intercept);
  let trainingsData = prepareData(data, metric, linearRegressionPredict);

  return (
    trainingsData.reduce((acc, file) => {
      return acc + Math.abs(file.predictedTestability - file.testability);
    }, 0) / trainingsData.length
  );
}
