FROM ubuntu:latest

RUN apt update && apt install -y \
    && apt clean \
    && rm -rf /var/lib/apt/lists/*

CMD [ "bash" ]
