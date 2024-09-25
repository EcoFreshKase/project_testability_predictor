import { parse } from "csv-parse/sync";
import {
  AdafestTrainingsDataDir,
  AdafestTrainingsDataFileNames,
} from "../config";
import { readFileSync } from "fs";

export function getTestSet(num = 0): AdafestTrainingsData {
  return parse(
    readFileSync(
      `${AdafestTrainingsDataDir}/${AdafestTrainingsDataFileNames[num]}`,
      "utf8"
    ),
    { skip_empty_lines: true, columns: true }
  );
}
