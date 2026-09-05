FROM alpine:3.20

RUN apk add --no-cache \
      bash bash-completion busybox-extras ca-certificates coreutils curl \
      file findutils git grep htop jq less nano procps python3 tree vim

RUN adduser -D -s /bin/bash playground

COPY motd.sh /etc/profile.d/00-playground.sh

USER playground
WORKDIR /home/playground

ENV TERM=xterm-256color
ENV DISTRO_NAME=Alpine

CMD ["sleep", "infinity"]
