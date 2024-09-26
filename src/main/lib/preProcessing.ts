export function preProcessMedian(data: TestabilityData[]): TestabilityData[] {
  const median = data.sort((testabilityData1, testabilityData2) => {
    return (
      testabilityData1.predictedTestability -
      testabilityData2.predictedTestability
    );
  })[Math.floor(data.length / 2)];
  return data.filter(
    (testability) =>
      testability.predictedTestability < median.predictedTestability
  );
}

/**
 * Filters the input array of `TestabilityData` objects to include only those
 * whose `predictedTestability` is less than twice the average `predictedTestability`
 * of the entire array.
 *
 * @param data - An array of `TestabilityData` objects to be processed.
 * @returns A filtered array of `TestabilityData` objects.
 */
export function preProcessAverage(data: TestabilityData[]): TestabilityData[] {
  const averageTestability =
    data.reduce((acc, curr) => acc + curr.predictedTestability, 0) /
    data.length;
  return data.filter(
    (testabilityData) =>
      testabilityData.predictedTestability < 2 * averageTestability
  );
}

export function normalizeLinear(data: TestabilityData[]): TestabilityData[] {
  const worstTestability = Math.max(
    ...data.map((testabilityData) => testabilityData.predictedTestability)
  );
  const bestTestability = Math.min(
    ...data.map((testabilityData) => testabilityData.predictedTestability)
  );

  // Normalize the data by mapping the range of `predictedTestability` values
  // from [minTestability, maxTestability] to [0, 1].
  // and inverting it such hat the lowest value get a testability of 1 and the highest value get a testability of 0
  // by using the formula ((x - min) / (max - min)) * -1 + 1
  return data.map((testabilityData) => {
    const normalizedTestability =
      ((testabilityData.predictedTestability - bestTestability) /
        (worstTestability - bestTestability)) *
        -1 +
      1;
    return {
      predictedTestability: normalizedTestability,
      testability: testabilityData.testability,
    };
  });
}
