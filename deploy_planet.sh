#!/bin/bash
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

git pull origin master
build -l data.json -t config.yml.ejs -o ../planet/config.yml
