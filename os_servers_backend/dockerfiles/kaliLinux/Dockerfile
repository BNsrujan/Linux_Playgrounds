FROM kalilinux/kali-rolling

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /root

RUN apt update && apt install -y --no-install-recommends\
    nmap \
    metasploit-framework \
    tshark \
    wireshark \
    sudo \
    ca-certificates \
    gnupg \
    && apt-get autoremove -y \
    && apt clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* 

RUN useradd -m -s /bin/bash kaliuser \
 && echo "kaliuser ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/kaliuser \
 && chmod 0440 /etc/sudoers.d/kaliuser

USER Kaliuser

WORKDIR /home/Kaliuser

CMD ["bash"]