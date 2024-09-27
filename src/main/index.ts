import "dotenv/config";
import { getTestSet } from "./lib/parseCSV";
import { analyzeDataSet } from "./lib/backpropagation/analyzeDataSet";

const adafestTestData = getTestSet();

console.log(
  analyzeDataSet(
    adafestTestData,
    {
      filesAmt: -0.03560177,
      cyclo: 2.32488763,
      commandAmt: -0.72015394,
      linesOfCode: -2.74799329,
    },
    0.59891541
  )
);
