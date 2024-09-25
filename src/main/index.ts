import "dotenv/config";
import { AnalysisDataset } from "./config";
import { getTestSet } from "./lib/parseCSV";

function predictTestability(project: DataSetProject): number {
  const analysisMetrics = {
    filesAmt: 0.1,
    files: {
      cyclo: 0.4,
      commandAmt: 0.3,
      linesOfCode: 0.2,
    },
  };

  return (
    project.filesAmt * analysisMetrics.filesAmt +
    project.files.reduce((acc, file) => {
      return (
        acc +
        file.cyclo * analysisMetrics.files.cyclo +
        file.commandAmt * analysisMetrics.files.commandAmt +
        file.linesOfCode * analysisMetrics.files.linesOfCode
      );
    }, 0) /
      project.files.length
  );
}

let projectsTestability: { project: string; testability: number }[] =
  AnalysisDataset.map((project) => ({
    project: project.project,
    testability: predictTestability(project),
  }));

console.log(
  projectsTestability.sort(({ testability: a }, { testability: b }) => a - b)
);

const testData = getTestSet();
