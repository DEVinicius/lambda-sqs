module.exports = class Producer {
    /**
     * @param {{
     *  queueWorker: import('../config/sqs')
     * }}
     */
    constructor({
        queueWorker
    }) {
        this.queueWorker = queueWorker
    }

    async execute(event) {
        console.log({
            url: JSON.stringify(process.env.QUEUE_URL)
        })
        var params = {
            MessageBody: JSON.stringify({
                teste:'VINICIUS2'
            }),
            QueueUrl: process.env.QUEUE_URL,
          };

        this.queueWorker.sendMessage(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
          });
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                hello: 'world'
            })
        }
    }
}