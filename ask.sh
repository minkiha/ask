#!/usr/bin/env bash

if [ $# -eq 0 ]; then
    cd ~/.ask
    node index.js
else
    cd ~/.ask
    echo "$1" | node index.js
fi
