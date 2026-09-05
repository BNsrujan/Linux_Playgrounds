FROM fedora:40

RUN dnf install -y --setopt=install_weak_deps=False --nodocs \
      bash-completion ca-certificates curl file findutils git htop iproute \
      jq less nano procps-ng python3 tree unzip vim-enhanced wget \
    && dnf clean all \
    && rm -rf /var/cache/dnf

RUN useradd --create-home --shell /bin/bash playground

COPY motd.sh /etc/profile.d/00-playground.sh

USER playground
WORKDIR /home/playground

ENV TERM=xterm-256color
ENV DISTRO_NAME=Fedora

CMD ["sleep", "infinity"]
