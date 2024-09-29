import "dotenv/config";
import { getTestSet } from "./lib/parseCSV";
import { analyzeDataSet } from "./lib/analyzeDataSet";

for (let i = 0; i < 5; i++) {
  try {
    const adafestTestData = getTestSet(i);

    console.log(
      "Test set " +
        i +
        " results: " +
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
  } catch (e) {
    console.log(`Error with test set ${i}: ${e}`);
  }
}
