const sqs = require("../config/sqs");
const Producer = require("./producer");

const producer = new Producer({
    queueWorker: sqs
});

module.exports = producer.execute.bind(producer);