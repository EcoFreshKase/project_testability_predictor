export type FileMetrics = {
  filesAmt: number;
  cyclo: number;
  commandAmt: number;
  linesOfCode: number;
};

export function createPredictFileTestabilityLinearRegression(
  intercept: number
): (file: TestabilityPredictFileMetrics, metrics: FileMetrics) => number {
  return (file: TestabilityPredictFileMetrics, metrics: FileMetrics) => {
    return (
      file.projFilesAmt * metrics.filesAmt +
      file.cyclo * metrics.cyclo +
      file.uOpsAmt * metrics.commandAmt +
      file.linesOfCode * metrics.linesOfCode +
      intercept
    );
  };
}
