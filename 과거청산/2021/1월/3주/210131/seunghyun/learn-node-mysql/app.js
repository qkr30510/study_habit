const http = require('http');
const url = require('url');
const qs = require('querystring');
const template = require('./lib/template.js');
const sanitizeHtml = require('sanitize-html');
const db = require("./sql");
db.connect();

var app = http.createServer(function (req, res) {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if (pathname === '/') {
        if (queryData.id === undefined) {

            db.query(`SELECT * FROM topic`, function (err, results) {
                const title = 'Welcome';
                const description = 'Hello, Node.js';
                const list = template.list(results);
                const html = template.HTML(title, list,
                    `<h2>${title}</h2>${description}`,
                    `<a href="/create">create</a>`
                );

                res.writeHead(200);
                res.end(html);
            });

        } else {
            db.query('SELECT * FROM topic', function (err, results) {
                db.query(`SELECT * FROM topic LEFT JOIN author ON topic.author_id = author.id WHERE topic.id = ?`, [queryData.id], function (err, result) {
                    const title = result[0].title;
                    const sanitizedTitle = sanitizeHtml(title);
                    const sanitizedDescription = sanitizeHtml(result[0].description, {
                        allowedTags: ['h1']
                    });
                    const list = template.list(results);
                    const html = template.HTML(sanitizedTitle, list,
                        `<h2>${sanitizedTitle}</h2>${sanitizedDescription} By ${result[0].name}`,
                        ` 
                            <a href="/create">create</a>
                            <a href="/update?id=${queryData.id}">update</a>
                            <form action="delete_process" method="post">
                            <input type="hidden" name="id" value="${queryData.id}">
                            <input type="submit" value="delete">
                            </form>
                        `
                    );
                    res.writeHead(200);
                    res.end(html);
                });
            });
        }
    } else if (pathname === '/create') {
        db.query('SELECT * FROM topic', function (err, results) {
            db.query(`SELECT * FROM author`, function (err, authors) {

                const title = 'WEB - create';
                const select = template.select(authors);
                const list = template.list(results);
                const html = template.HTML(title, list, `
                        <form action="/create_process" method="post">
                        
                        <p><input type="text" name="title" placeholder="title"></p>
                            <p>
                            <textarea name="description" placeholder="description"></textarea>
                            </p>
                            <p>
                            <p>${select}</p>
                            <input type="submit">
                            </p>
                        </form>
                        `, '');
                res.writeHead(200);
                res.end(html);
            });
        });
    } else if (pathname === '/create_process') {
        let body = '';
        req.on('data', function (data) {
            body = body + data;
        });
        req.on('end', function () {
            const post = qs.parse(body);
            db.query(`INSERT INTO topic (title, description, created, author_id) 
            VALUES(?,?,NOW(),?)`, [post.title, post.description, post.author], function (err, create_data) {

                res.writeHead(302, {
                    Location: `/?id=${create_data.insertId}`
                });
                res.end();
            });
            return;
        });
    } else if (pathname === '/update') {
        db.query(`SELECT * FROM topic`, function (err, results) {
            db.query(`SELECT * FROM topic WHERE id = ?`, [queryData.id], function (err, result) {
                db.query(`SELECT * FROM author`, function (err, authors) {
                    const select = template.select(authors, result[0].author_id);
                    const title = result[0].title;
                    const list = template.list(results);
                    const html = template.HTML(title, list,
                        `
                            <form action="/update_process" method="post">
                            <p><input name="id" type="hidden" value="${result[0].id}"></p>
                            <p><input type="text" name="title" placeholder="title" value="${result[0].title}"></p>
                                <p>
                                <textarea name="description" placeholder="description">${result[0].description}</textarea>
                                </p>
                                <p>${select}</p>
                                <p>
                                <input type="submit">
                                </p>
                            </form>
                        `,
                        `<a href="/create">create</a> <a href="/update?id=${result[0].id}">update</a>`
                    );
                    res.writeHead(200);
                    res.end(html);
                });
            });
        });
    } else if (pathname === '/update_process') {
        let body = '';
        req.on('data', function (data) {
            body = body + data;
        });
        req.on('end', function () {
            const post = qs.parse(body);
            db.query(`UPDATE topic SET title=?, description=?, author_id=? WHERE id = ?`,
                [post.title, post.description, post.author, post.id],
                function (err, result) {
                    res.writeHead(302, {
                        Location: `/?id=${post.id}`
                    });
                    res.end();
                });
        });
    } else if (pathname === '/delete_process') {
        var body = '';
        req.on('data', function (data) {
            body = body + data;
        });
        req.on('end', function () {
            var post = qs.parse(body);
            db.query(`DELETE FROM topic WHERE id = ?`, [post.id], function () {
                res.writeHead(302, {
                    Location: `/`
                });
                res.end();
            });

        });
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});
app.listen(3000);