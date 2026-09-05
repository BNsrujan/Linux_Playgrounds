FROM debian:12-slim

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends \
      bash-completion ca-certificates curl file git htop iproute2 jq less \
      nano procps python3 tree unzip vim-tiny wget \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN useradd --create-home --shell /bin/bash playground

COPY motd.sh /etc/profile.d/00-playground.sh

USER playground
WORKDIR /home/playground

ENV TERM=xterm-256color
ENV DISTRO_NAME=Debian

CMD ["sleep", "infinity"]
