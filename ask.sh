#!/usr/bin/env bash

if [ $# -eq 0 ]; then
    echo "No arguments provided"
else
    cd ~/.ask
    echo "$1" | node index.js | cat
fi
