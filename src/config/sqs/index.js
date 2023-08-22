const AWS = require('aws-sdk')

const sqsConfig = {
    apiVersion: '2012-11-05',
    region: 'us-east-2'
}

const isLocal = process.env.IS_OFFLINE
// const isLocal = false

if(isLocal) {
    AWS.config.update({
        credentials: {
            accessKeyId: 'test',
            secretAccessKey: 'test'
        },
        region: 'us-east-2'
    })
    
    const host =  process.env.LOCALSTACK_HOST || 'localhost'
    sqsConfig.endpoint = new AWS.Endpoint(`http://${host}:4566`)
}

const sqs = new AWS.SQS(sqsConfig);

module.exports = sqs