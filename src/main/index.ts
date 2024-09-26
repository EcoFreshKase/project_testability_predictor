import "dotenv/config";
import { getTestSet } from "./lib/parseCSV";
import { trainMetrics } from "./lib/backpropagation/backpropagation";

const adafestTestData = getTestSet();
const analysisMetrics = trainMetrics(adafestTestData, 0.001, 1000);

console.log(analysisMetrics);
