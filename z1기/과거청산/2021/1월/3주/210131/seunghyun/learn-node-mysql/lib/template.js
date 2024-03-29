module.exports = {
  HTML: function (title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
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
  }
}