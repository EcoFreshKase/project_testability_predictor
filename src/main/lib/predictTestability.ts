export type ProjectTestabilityMap = {
  project: string;
  testability: number;
}[];

export const fileMetrics = {
  filesAmt: 0.1,
  cyclo: 0.4,
  commandAmt: 0.3,
  linesOfCode: 0.2,
};

const analysisMetrics = {
  filesAmt: 0.1,
  files: { metrics: fileMetrics, importance: 0.9 },
};

export function predictProjectTestability(project: DataSetProject): number {
  return (
    project.filesAmt * analysisMetrics.filesAmt +
    project.files.reduce((acc, file) => {
      return (
        acc +
        file.cyclo * analysisMetrics.files.metrics.cyclo +
        file.uOpsAmt * analysisMetrics.files.metrics.commandAmt +
        file.linesOfCode * analysisMetrics.files.metrics.linesOfCode
      );
    }, 0) /
      project.files.length
  );
}

export function predictFileTestability(
  file: TestabilityPredictFileMetrics
): number {
  return (
    file.projFilesAmt * fileMetrics.filesAmt +
    file.cyclo * fileMetrics.cyclo +
    file.uOpsAmt * fileMetrics.commandAmt +
    file.linesOfCode * fileMetrics.linesOfCode
  );
}
