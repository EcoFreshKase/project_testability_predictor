import { FileMetrics, predictFileTestability } from "../predictTestability";
import { prepareData } from "./prepData";

export function trainMetrics(
  data: AdafestTrainingsData,
  learningRate: number,
  epochs: number
): { metrics: FileMetrics; finalAvgLoss: number } {
  const errorFunction = (predicted: number, actual: number) =>
    0.5 * Math.pow(predicted - actual, 2);
  const errorFunctionSlope = (predicted: number, actual: number) =>
    predicted - actual;
  let metrics: FileMetrics = {
    filesAmt: 0.1,
    cyclo: 0.4,
    commandAmt: 0.3,
    linesOfCode: 0.2,
  };

  let epochLoss = 0;
  for (let e = 0; e < epochs; e++) {
    epochLoss = 0;
    let trainingsData = prepareData(data, metrics, predictFileTestability);

    for (const file of trainingsData) {
      const loss = errorFunction(file.predictedTestability, file.testability);
      epochLoss += loss;

      for (const key in metrics) {
        const metricKey = key as keyof FileMetrics;
        metrics[metricKey] =
          metrics[metricKey] -
          learningRate *
            errorFunctionSlope(file.predictedTestability, file.testability) *
            metrics[metricKey];
      }
    }

    if (e % 100 === 0) {
      console.log(`Epoch ${e}: Loss: ${epochLoss / trainingsData.length}`);
    }
  }

  return {
    metrics,
    finalAvgLoss:
      epochLoss / prepareData(data, metrics, predictFileTestability).length,
  };
}
