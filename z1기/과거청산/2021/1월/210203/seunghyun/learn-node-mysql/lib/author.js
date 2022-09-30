const db = require("../sql");
const template = require('./template');
const url = require('url');
const qs = require('querystring');
const sanitizeHtml = require('sanitize-html');


exports.home = function (req, res) {
    db.query("SELECT * FROM topic", function (err, results) {
        db.query("SELECT * FROM author", function (err2, authors) {

            const title = "author";
            const list = template.list(results);
            const authorList = template.table(authors);
            const html = template.HTML(title, list,
                authorList,
                `<a href="/author/create">create - author</a>`,
            );
            res.writeHead(200);
            res.end(html);
        });
    });
};

exports.create_author = function (req, res) {
    db.query("SELECT * FROM topic", function (err, results) {
        const title = "author";
        const list = template.list(results);
        const html = template.HTML(title, list,
            `
            <form action="/author/create/create_process" method="post">
                <input type="text" name="name" placeholder="name"/><br><br>
                <textarea name="profile"></textarea><br><br>
                <button type="submit">만들기</button>
            </form>
            `,
            `<a href="/author/create">create - author</a>`,
        );
        res.writeHead(200);
        res.end(html);
    });
};

exports.create_author_process = function (req, res) {
    let body = '';
    req.on('data', function (data) {
        body = body + data;
    });
    req.on('end', function () {
        const post = qs.parse(body);
        db.query("INSERT INTO author (name, profile) VALUES (?, ?)", [post.name, post.profile], function (err) {
            res.writeHead(302, {
                location: `/author`
            });
            res.end();
        });
        return;
    });
};

exports.update_author = function (req, res) {
    const _url = req.url;
    const queryData = url.parse(_url, true).query;

    db.query("SELECT * FROM topic", function (err, results) {
        db.query("SELECT * FROM author WHERE id = ?", [queryData.id], function (err2, author) {
            const title = "author";
            const list = template.list(results);
            const html = template.HTML(title, list,
                `
                <form action="/author/update/update_process" method="post">
                    <input type="hidden" name="id" value="${queryData.id}" />
                    <input type="text" name="name" placeholder="name" value="${author[0].name}"/><br><br>
                    <textarea name="profile">${author[0].profile}</textarea><br><br>
                    <button type="submit">만들기</button>
                </form>
                `,
                `<a href="/author/create">create - author</a>`,
            );
            res.writeHead(200);
            res.end(html);
        });
    });
}

exports.update_author_process = function (req, res) {
    let body = '';
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        const post = qs.parse(body);
        db.query("UPDATE author SET name = ?, profile = ? WHERE id = ?", [post.name, post.profile, post.id], function (err) {
            res.writeHead(302, {
                location: `/author`
            });
            res.end();
        });
        return;
    });
};

exports.delete_author = function (req, res) {
    let body = '';
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        const post = qs.parse(body);
        db.query("DELETE FROM topic WHERE author_id = ?", [post.id], function (err) {
            if (err) throw err;
            db.query("DELETE FROM author WHERE id = ?", [post.id], function (err2) {
                if (err2) throw err2;
                res.writeHead(302, {
                    location: '/author'
                });
                res.end();
            })
        });
        return;
    });
};