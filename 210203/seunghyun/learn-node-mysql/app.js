const http = require('http');
const url = require('url');
const qs = require('querystring');
const db = require("./sql");
const topic = require("./lib/topic");
const author = require("./lib/author");
db.connect();

var app = http.createServer(function (req, res) {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    // topic
    if (pathname === '/') {
        if (queryData.id === undefined) {
            topic.home(req, res);
        } else {
            topic.detail(req, res)
        }
    } else if (pathname === '/create') {
        topic.create(req, res);
    } else if (pathname === '/create_process') {
        topic.create_process(req, res);
    } else if (pathname === '/update') {
        topic.update(req, res);
    } else if (pathname === '/update_process') {
        topic.update_process(req, res);
    } else if (pathname === '/delete_process') {
        topic.delete(req, res)
    }

    // author 
    else if (pathname === '/author') {
        author.home(req, res);
    } else if (pathname === '/author/create') {
        author.create_author(req, res);
    } else if (pathname === '/author/create/create_process') {
        author.create_author_process(req, res);
    } else if (pathname === '/author/update') {
        author.update_author(req, res);
    } else if (pathname === '/author/update/update_process') {
        author.update_author_process(req, res);
    } else if (pathname === '/author/delete') {
        author.delete_author(req, res);
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});
app.listen(3000);