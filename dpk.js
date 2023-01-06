const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
    let candidate = "0";

    if (event) {
        let partitionKey = event.partitionKey ?? event;
        if (typeof partitionKey !== "string") {
            partitionKey = JSON.stringify(partitionKey);
        }
        candidate = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
    }
    return candidate;
};
