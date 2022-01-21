module.exports = {
    HTML: function (title, list, body, control) {
        return `
    <!doctype html>
    <html>
    <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        <style>
            table {
                border-collapse: collapse;
            }
            table td {
                border: 1px solid #000;
            }
        </style>    
    </head>
    <body>
    <h1><a href="/">WEB</a></h1>
    <a href="/author">author</a>
        ${list}
        ${control}
        ${body}
    </body>
    </html>
    `;
    },
    list: function (filelist) {
        var list = '<ul>';
        var i = 0;
        while (i < filelist.length) {
            list = list + `<li><a href="/?id=${filelist[i].id}">${filelist[i].title}</a></li>`;
            i = i + 1;
        }
        list = list + '</ul>';
        return list;
    },
    select: function (authors, selectAuthor) {
        let authorSelect = `<select name="author">`;
        authors.map(function (author, i) {
            console.log(author.id === selectAuthor);
            authorSelect += `<option value="${author.id}" ${author.id === selectAuthor && "selected"}>${author.name}</option>`
        });
        authorSelect += "</select>";
        return authorSelect;
    },
    table: function (authors) {
        let authorList = "<table>";
        authors.map(function (author) {
            return authorList += `
                <tr>
                    <td>${author.name}</td>
                    <td>${author.profile}</td>
                    <td><a href="/author/update?id=${author.id}">update</a></td>
                    <td>
                        <form action="/author/delete" method="post">
                            <input type="hidden" value="${author.id}" name="id">
                            <button type="submit">delete</button>
                        </form>
                    </td>
                </tr>`
        });
        return authorList += "</table>";
    }
}