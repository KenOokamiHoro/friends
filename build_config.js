#!/usr/bin/node
// Debian stretch+ (apt-get install nodejs nodejs-legacy npm)

const fs = require("fs");
const path = require("path");
const poi = function (s) {
    str += s + "\n";
}
var str = "";

poi("# planet.js configuration");
poi("");
poi("planet:");
poi("  name: 吐槽大王星球 # Site title");
poi("  tagline:  # Site tagline");
poi("  description: 吐槽大王的朋友们 # Site description");
poi("  link: https://planet.tcdw.net # Site link, do NOT include tailing slash '/'");
poi("  locale: zh # Site locale");
poi("  owner_name: tcdw # Your name");
poi("  owner_email: admin@tcdw.net # Your email");
poi("  theme: pure # theme under templates directory");
poi("  output: public # output directory, make sure your web server can read in this place");
poi("  timeout: 30 # request timeout in seconds");
poi("  items: 100 # how many posts should be displayed?");
poi("  items_feed: 200 # maximum posts in feed");
poi("  display_length: 2000 # posts longer than this characters, a summary will be displayed (if available)");
poi("  time_format: MMMM Do YYYY h:mm:ss A # See http://momentjs.com/docs/#/displaying/ for details");
poi("  ttl: 120 # TimeToLive minutes to cache site feed");
poi("");
poi("secure:");
poi("  proxy: # Leave blank if you don't use an http proxy");
poi("  allowedTags: # set to true to allow any tags, or [] to disallow any.");
poi("  - h1");
poi("  - h2");
poi("  - h3");
poi("  - h4");
poi("  - h5");
poi("  - h6");
poi("  - blockquote");
poi("  - p");
poi("  - a");
poi("  - ul");
poi("  - ol");
poi("  - nl");
poi("  - li");
poi("  - b");
poi("  - i");
poi("  - s");
poi("  - g");
poi("  - strong");
poi("  - em");
poi("  - strike");
poi("  - del");
poi("  - pre");
poi("  - code");
poi("  - kbd");
poi("  - hr");
poi("  - br");
poi("  - div");
poi("  - table");
poi("  - thead");
poi("  - tbody");
poi("  - tr");
poi("  - th");
poi("  - td");
poi("  - caption");
poi("  - img");
poi("  - sup");
poi("  - sub");
poi("  - span");
poi("  - font");
poi("  - style");
poi("  - svg");
poi("  - defs");
poi("  - path");
poi("  - use");
poi("  allowedAttributes:");
poi("    a:");
poi("    - href");
poi("    - name");
poi("    - target");
poi("    img:");
poi("    - src");
poi("  selfClosing:");
poi("  - img");
poi("  - br");
poi("  - hr");
poi("  allowedSchemes:");
poi("  - http");
poi("  - https");
poi("  - ftp");
poi("  - mailto");
poi("  allowProtocolRelative: true");
poi("");
poi("people:");
poi("- name: 吐槽大王部落格");
poi("  avatar: admin@tcdw.net");
poi("  link: https://www.tcdw.net/rss/");

var list = JSON.parse(fs.readFileSync("/opt/friends/data.json", {encoding: "utf8"})).list;

for (var i in list) {
    for (var j in list[i].item) {
        if (!list[i].item[j].break && list[i].item[j].feed != "") {
            poi("- name: " + list[i].item[j].name);
            poi("  avatar: " + list[i].item[j].avatar);
            poi("  link: " + list[i].item[j].feed);
        }
    }
}

fs.writeFileSync("/opt/planet/config.yml", str, {encoding: "utf8"});
