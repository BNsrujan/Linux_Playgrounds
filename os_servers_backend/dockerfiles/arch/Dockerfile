FROM archlinux:base

RUN pacman -Syu --noconfirm \
      bash-completion curl file git htop iproute2 jq less nano python \
      tree unzip vim which wget \
    && pacman -Scc --noconfirm \
    && rm -rf /var/cache/pacman/pkg/*

RUN useradd --create-home --shell /bin/bash playground

COPY motd.sh /etc/profile.d/00-playground.sh

USER playground
WORKDIR /home/playground

ENV TERM=xterm-256color
ENV DISTRO_NAME=Arch

CMD ["sleep", "infinity"]
