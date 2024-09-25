import { parse } from "csv-parse/sync";

export function parseCSV(csvInput: string): AdafestTrainingsData[] {
  return parse(csvInput, {
    columns: true,
    skip_empty_lines: true,
  });
}
