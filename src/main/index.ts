import "dotenv/config";
import { getTestSet } from "./lib/parseCSV";
import { getFitnessOfMetrics } from "./lib/predictTestability";

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

const adafestTestData = getTestSet();
console.log(getFitnessOfMetrics(adafestTestData, fileMetrics));
