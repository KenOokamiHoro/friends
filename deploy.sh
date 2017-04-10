#!/bin/bash
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

git pull origin master
build -l data.json -t links.ejs -o ../document/links.md
python3 /opt/SmartBlog/manage.py build-rss
bash /opt/SmartBlog/update-gh.sh
