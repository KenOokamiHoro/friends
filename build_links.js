#!/usr/bin/node
// Debian stretch+ (apt-get install nodejs nodejs-legacy npm)

const fs = require("fs");
const path = require("path");
const poi = function (s) {
    str += s;
}
var str = "";
poi("**推荐关注 [吐槽大王星球](//planet.tcdw.net)，本页所有博客更新一网打尽！**\n");
var list = JSON.parse(fs.readFileSync("/opt/friends/data.json", {encoding: "utf8"})).list;

for (var i in list) {
    poi("\n## " + list[i].group + "\n\n");
    for (var j in list[i].item) {
        if (list[i].item[j].display) {
            if (list[i].item[j].break) {
                poi("* " + list[i].item[j].name);
            } else {
                poi("* [" + list[i].item[j].name + "](" + list[i].item[j].link + ")");
            }
            if (list[i].item[j].intro != "") {
                poi("  \n" + list[i].item[j].intro);
            }
            poi("\n");
        }
    }
}
poi("\n## 注意 ##\n\n");
poi("* 为节省访客时间，对于长期无法正常访问的站点，将会移除 HTML 的 `<a>` 标签；如果站点恢复，联系我重新添加即可。\n");
poi("* 各种所谓博客联盟 / 导航或类似站点勿扰，同时谢绝被此类站点主动收录。\n");
poi("* 需要 添加 / 更新 / 删除 你的链接？戳 [这里](https://github.com/tcdw/friends)。\n");
fs.writeFileSync("/opt/SmartBlog/document/links.md", str, {encoding: "utf8"});
