type DataSetProject = {
  project: string;
  filesAmt: number;
  files: {
    fileName: string;
    cyclo: number;
    commandAmt: number;
    linesOfCode: number;
  }[];
};

type DataSet = DataSetProject[];

type AdafestTrainingsData = {
  Class: string;
  PK_CountLineCode: number;
  PK_CountLineCodeDecl: number;
  PK_CountLineCodeExe: number;
  PK_AvgLineCode: number;
  PK_AvgLineCodeDecl: number;
  PK_AvgLineCodeExe: number;
  PK_MaxLineCode: number;
  PK_MaxLineCodeDecl: number;
  PK_MaxLineCodeExe: number;
  PK_MinLineCode: number;
  PK_MinLineCodeDecl: number;
  PK_MinLineCodeExe: number;
  PK_SDLineCode: number;
  PK_SDLineCodeDecl: number;
  PK_SDLineCodeExe: number;
  PK_CountStmt: number;
  PK_CountStmtDecl: number;
  PK_CountStmtExe: number;
  PK_AvgStmt: number;
  PK_AvgStmtDecl: number;
  PK_AvgStmtExe: number;
  PK_MaxStmt: number;
  PK_MaxStmtDecl: number;
  PK_MaxStmtExe: number;
  PK_MinStmt: number;
  PK_MinStmtDecl: number;
  PK_MinStmtExe: number;
  PK_SDStmt: number;
  PK_SDStmtDecl: number;
  PK_SDStmtExe: number;
  PK_CountDeclClassMethod: number;
  PK_CountDeclClassVariable: number;
  PK_CountDeclInstanceMethod: number;
  PK_CountDeclInstanceVariable: number;
  PK_PKNOMNAMM: number;
  PK_CountDeclClass: number;
  PK_CountDeclFile: number;
  PK_SumCyclomatic: number;
  PK_SumCyclomaticModified: number;
  PK_SumCyclomaticStrict: number;
  PK_SumEssential: number;
  PK_MaxCyclomatic: number;
  PK_MaxCyclomaticModified: number;
  PK_MaxCyclomaticStrict: number;
  PK_MaxEssential: number;
  PK_AvgCyclomatic: number;
  PK_AvgCyclomaticModified: number;
  PK_AvgCyclomaticStrict: number;
  PK_AvgEssential: number;
  PK_MinCyclomatic: number;
  PK_MinCyclomaticModified: number;
  PK_MinCyclomaticStrict: number;
  PK_MinEssential: number;
  PK_SDCyclomatic: number;
  PK_SDCyclomaticModified: number;
  PK_SDCyclomaticStrict: number;
  PK_SDEssential: number;
  PK_MaxNesting: number;
  PK_MinNesting: number;
  PK_AvgNesting: number;
  PK_SDNesting: number;
  PK_CountDeclMethodDefault: number;
  PK_CountDeclMethodPrivate: number;
  PK_CountDeclMethodProtected: number;
  PK_CountDeclMethodPublic: number;
  PK_PKNOAMM: number;
  PK_PKNOI: number;
  PK_PKNOAC: number;
  CSLEX_NumberOfTokens: number;
  CSLEX_NumberOfUniqueTokens: number;
  CSLEX_NumberOfIdentifies: number;
  CSLEX_NumberOfUniqueIdentifiers: number;
  CSLEX_NumberOfKeywords: number;
  CSLEX_NumberOfUniqueKeywords: number;
  CSLEX_NumberOfAssignments: number;
  CSLEX_NumberOfOperatorsWithoutAssignments: number;
  CSLEX_NumberOfUniqueOperators: number;
  CSLEX_NumberOfSemicolons: number;
  CSLEX_NumberOfDots: number;
  CSLEX_NumberOfReturnAndPrintStatements: number;
  CSLEX_NumberOfConditionalJumpStatements: number;
  CSLEX_NumberOfUnConditionalJumpStatements: number;
  CSLEX_NumberOfExceptionStatements: number;
  CSLEX_NumberOfNewStatements: number;
  CSLEX_NumberOfSuperStatements: number;
  CSORD_CountLineCode: number;
  CSORD_CountLineCodeDecl: number;
  CSORD_CountLineCodeExe: number;
  CSORD_AvgLineCode: number;
  CSORD_AvgLineCodeDecl: number;
  CSORD_AvgLineCodeExe: number;
  CSORD_MaxLineCode: number;
  CSORD_MaxLineCodeDecl: number;
  CSORD_MaxLineCodeExe: number;
  CSORD_MinLineCode: number;
  CSORD_MinLineCodeDecl: number;
  CSORD_MinLineCodeExe: number;
  CSORD_SDLineCode: number;
  CSORD_SDLineCodeDecl: number;
  CSORD_SDLineCodeExe: number;
  CSORD_LogLineCode: number;
  CSORD_LogLineCodeDecl: number;
  CSORD_LogLineCodeExe: number;
  CSORD_CountLineCodeNAMM: number;
  CSORD_CountLineCodeDeclNAMM: number;
  CSORD_CountLineCodeExeNAMM: number;
  CSORD_AvgLineCodeNAMM: number;
  CSORD_AvgLineCodeDeclNAMM: number;
  CSORD_AvgLineCodeExeNAMM: number;
  CSORD_MaxLineCodeNAMM: number;
  CSORD_MaxLineCodeDeclNAMM: number;
  CSORD_MaxLineCodeExeNAMM: number;
  CSORD_MinLineCodeNAMM: number;
  CSORD_MinLineCodeDeclNAMM: number;
  CSORD_MinLineCodeExeNAMM: number;
  CSORD_SDLineCodeNAMM: number;
  CSORD_SDLineCodeDeclNAMM: number;
  CSORD_SDLineCodeExeNAMM: number;
  CSORD_LogStmt: number;
  CSORD_LogStmtDecl: number;
  CSORD_LogStmtExe: number;
  CSORD_CountStmt: number;
  CSORD_CountStmtDecl: number;
  CSORD_CountStmtExe: number;
  CSORD_AvgStmt: number;
  CSORD_AvgStmtDecl: number;
  CSORD_AvgStmtExe: number;
  CSORD_MaxStmt: number;
  CSORD_MaxStmtDecl: number;
  CSORD_MaxStmtExe: number;
  CSORD_MinStmt: number;
  CSORD_MinStmtDecl: number;
  CSORD_MinStmtExe: number;
  CSORD_SDStmt: number;
  CSORD_SDStmtDecl: number;
  CSORD_SDStmtExe: number;
  CSORD_CountStmtNAMM: number;
  CSORD_CountStmtDeclNAMM: number;
  CSORD_CountStmtExeNAMM: number;
  CSORD_AvgStmtNAMM: number;
  CSORD_AvgStmtDeclNAMM: number;
  CSORD_AvgStmtExeNAMM: number;
  CSORD_MaxStmtNAMM: number;
  CSORD_MaxStmtDeclNAMM: number;
  CSORD_MaxStmtExeNAMM: number;
  CSORD_MinStmtNAMM: number;
  CSORD_MinStmtDeclNAMM: number;
  CSORD_MinStmtExeNAMM: number;
  CSORD_SDStmtNAMM: number;
  CSORD_SDStmtDeclNAMM: number;
  CSORD_SDStmtExeNAMM: number;
  CSORD_CountDeclClassMethod: number;
  CSORD_CountDeclClassVariable: number;
  CSORD_CountDeclInstanceMethod: number;
  CSORD_CountDeclInstanceVariable: number;
  CSORD_CSNOMNAMM: number;
  CSORD_SumCSNOP: number;
  CSORD_MaxCSNOP: number;
  CSORD_MinCSNOP: number;
  CSORD_AvgCSNOP: number;
  CSORD_SDCSNOP: number;
  CSORD_SumCSNOPNAMM: number;
  CSORD_MaxCSNOPNAMM: number;
  CSORD_MinCSNOPNAMM: number;
  CSORD_AvgCSNOPNAMM: number;
  CSORD_SDCSNOPNAMM: number;
  CSORD_SumCyclomatic: number;
  CSORD_SumCyclomaticModified: number;
  CSORD_SumCyclomaticStrict: number;
  CSORD_SumEssential: number;
  CSORD_MaxCyclomatic: number;
  CSORD_MaxCyclomaticModified: number;
  CSORD_MaxCyclomaticStrict: number;
  CSORD_MaxEssential: number;
  CSORD_AvgCyclomatic: number;
  CSORD_AvgCyclomaticModified: number;
  CSORD_AvgCyclomaticStrict: number;
  CSORD_AvgEssential: number;
  CSORD_MinCyclomatic: number;
  CSORD_MinCyclomaticModified: number;
  CSORD_MinCyclomaticStrict: number;
  CSORD_MinEssential: number;
  CSORD_SDCyclomatic: number;
  CSORD_SDCyclomaticModified: number;
  CSORD_SDCyclomaticStrict: number;
  CSORD_SDEssential: number;
  CSORD_LogCyclomatic: number;
  CSORD_LogCyclomaticStrict: number;
  CSORD_LogCyclomaticModified: number;
  CSORD_LogEssential: number;
  CSORD_SumCyclomaticNAMM: number;
  CSORD_SumCyclomaticModifiedNAMM: number;
  CSORD_SumCyclomaticStrictNAMM: number;
  CSORD_SumEssentialNAMM: number;
  CSORD_MaxCyclomaticNAMM: number;
  CSORD_MaxCyclomaticModifiedNAMM: number;
  CSORD_MaxCyclomaticStrictNAMM: number;
  CSORD_MaxEssentialNAMM: number;
  CSORD_AvgCyclomaticNAMM: number;
  CSORD_AvgCyclomaticModifiedNAMM: number;
  CSORD_AvgCyclomaticStrictNAMM: number;
  CSORD_AvgEssentialNAMM: number;
  CSORD_MinCyclomaticNAMM: number;
  CSORD_MinCyclomaticModifiedNAMM: number;
  CSORD_MinCyclomaticStrictNAMM: number;
  CSORD_MinEssentialNAMM: number;
  CSORD_SDCyclomaticNAMM: number;
  CSORD_SDCyclomaticModifiedNAMM: number;
  CSORD_SDCyclomaticStrictNAMM: number;
  CSORD_SDEssentialNAMM: number;
  CSORD_MaxNesting: number;
  CSORD_MinNesting: number;
  CSORD_AvgNesting: number;
  CSORD_SDNesting: number;
  CSORD_PercentLackOfCohesion: number;
  CSORD_CountClassCoupled: number;
  CSORD_RFC: number;
  CSORD_FANIN: number;
  CSORD_FANOUT: number;
  CSORD_ATFD: number;
  CSORD_CFNAMM: number;
  CSORD_DAC: number;
  CSORD_NumberOfMethodCalls: number;
  CSORD_CountDeclMethodDefault: number;
  CSORD_CountDeclMethodPrivate: number;
  CSORD_CountDeclMethodProtected: number;
  CSORD_CountDeclMethodPublic: number;
  CSORD_CSNOAMM: number;
  CSORD_MaxInheritanceTree: number;
  CSORD_CountClassDerived: number;
  CSORD_CountClassBase: number;
  CSORD_NIM: number;
  CSORD_NMO: number;
  CSORD_NOII: number;
  CSORD_SumCountPath: number;
  CSORD_MinCountPath: number;
  CSORD_MaxCountPath: number;
  CSORD_AvgCountPath: number;
  CSORD_SDCountPath: number;
  CSORD_SumCountPathLog: number;
  CSORD_MinCountPathLog: number;
  CSORD_MaxCountPathLog: number;
  CSORD_AvgCountPathLog: number;
  CSORD_SDCountPathLog: number;
  CSORD_SumKnots: number;
  CSORD_MinKnots: number;
  CSORD_MaxKnots: number;
  CSORD_AvgKnots: number;
  CSORD_SDKnots: number;
  CSORD_NumberOfClassConstructors: number;
  CSORD_NumberOfDepends: number;
  CSORD_NumberOfDependsBy: number;
  CSORD_NumberOfMethods: number;
  Testability: number;
};
