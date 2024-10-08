export function adafestMetricsMapper(
  project: AdafestTrainingsDataFile
): TestabilityPredictFileMetrics {
  return {
    projName: "",
    projFilesAmt: project.PK_CountDeclFile,
    fileName: project.Class,
    cyclo: project.CSORD_SumCyclomatic,
    uOpsAmt: project.CSLEX_NumberOfUniqueOperators,
    linesOfCode: project.CSORD_CountLineCode,
  };
}
