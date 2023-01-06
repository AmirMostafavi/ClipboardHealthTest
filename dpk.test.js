const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the hashed value when given an event", () => {
    const event = "200";
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("e17a243ecb8b03a2e533e95de455df56164dd8d79577ad688cd18bcad50b4e51eac570c1c1ff46d4b490ccbf9ce55b2f64c537af4cc294282ef45798072ed53e");
  });
  it("Returns the hashed value when given an event with partitionKey", () => {
    const event = {partitionKey: "200"};
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("e17a243ecb8b03a2e533e95de455df56164dd8d79577ad688cd18bcad50b4e51eac570c1c1ff46d4b490ccbf9ce55b2f64c537af4cc294282ef45798072ed53e");
  });
  it("Returns the hashed value when given an event that is non-string", () => {
    const event = 200;
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("e17a243ecb8b03a2e533e95de455df56164dd8d79577ad688cd18bcad50b4e51eac570c1c1ff46d4b490ccbf9ce55b2f64c537af4cc294282ef45798072ed53e");
  });
});
