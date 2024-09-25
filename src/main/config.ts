export const analysisDataset: DataSet = require(process.env.DATASET_PATH ??
  process.exit(1));

export const adafestTrainingsDataDir =
  process.env.TRAININGS_DATA_DIR ?? process.exit(1);
export const adafestTrainingsDataFileNames = [
  "DS07012.csv",
  "DS07310.csv",
  "DS07410.csv",
  "DS07510.csv",
  "DS07610.csv",
];
