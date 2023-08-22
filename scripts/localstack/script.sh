# Create SQS Queue 
aws \
    sqs create-queue \
    --queue-name teste-east-1 \
    --region us-east-1 \
    --endpoint-url http://localhost:4566 


# listas As filas existentes
aws \
    sqs list-queues \
    --endpoint-url http://localhost:4566

# Enviar mensagem pela CLI da AWS

aws \
    sqs send-message \
    --queue-url http://localhost:4566/000000000000/teste \
    --message-body "Mensagem de Teste" \
    --message-attributes file://./scripts/localstack/message.json \
    --endpoint-url http://localhost:4566 

# Recebendo as mensagens
aws \
    sqs receive-message \
    --queue-url http://localhost:4566/000000000000/teste \
    --attribute-names All \
    --message-attribute-names All \
    --endpoint-url http://localhost:4566 