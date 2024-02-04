ARG PYTHON_VERSION=3.12
ARG NODE_VERSION=21

FROM python:$PYTHON_VERSION-slim-bookworm

RUN apt update && apt install -y zsh curl git vim httpie unzip

# Install Node
RUN curl -fsSL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - && apt update && apt install -y nodejs

# Oh My Zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
RUN git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting

# Bun
RUN curl -fsSL https://bun.sh/install | bash
