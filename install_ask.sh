#!/usr/bin/env bash

echo 'export PATH=$PATH:$HOME/.ask' >> ~/.bashrc
echo "alias ask='ask.sh'" >> ~/.bashrc
cd ~/.ask && npm install && cd
exec "$SHELL"