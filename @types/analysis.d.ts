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
