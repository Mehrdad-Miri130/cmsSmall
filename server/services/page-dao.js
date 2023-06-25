const { db } = require("../db");

exports.pageList = () => {
  return new Promise((resolve, reject) => {
    const currentDate = new Date().toISOString().split("T")[0];
    const sql = `SELECT pages.title,pages.image,pages.publishedAt,pages.id as pageId,pages.createdAt,pages.author as authorId,user.email as authorEmail FROM pages INNER JOIN user ON pages.author=user.id WHERE publishedAt NOT NULL AND (publishedAt<'${currentDate}' OR publishedAt='${currentDate}') ORDER BY publishedAt DESC;`;
    db.all(sql, [], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};
exports.pageListByAdmin = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT pages.image,pages.title,pages.publishedAt,pages.id as pageId,pages.createdAt,pages.author as authorId,user.email as authorEmail FROM pages INNER JOIN user ON pages.author=user.id ORDER BY publishedAt DESC;`;
    db.all(sql, [], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};
exports.getAllMyBlogs = (author) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM pages WHERE author=? ORDER BY createdAt DESC;`;
    db.all(sql, [author], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

exports.deleteOne = (author, id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM pages WHERE id=? AND author=?";
    db.run(sql, [id, author], (err, rows) => {
      if (err) reject(false);
      resolve(true);
    });
  });
};
exports.deleteOneByAdmin = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM pages WHERE id=?";
    db.run(sql, [id], (err, rows) => {
      if (err) reject(false);
      resolve(true);
    });
  });
};

exports.getOne = (id) => {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT pages.*,user.email as authorEmail FROM pages INNER JOIN user ON pages.author=user.id WHERE pages.id=?;";
    db.get(sql, [id], (err, row) => {
      if (err) reject(err);
      else if (row === undefined) resolve(false);
      else resolve(row);
    });
  });
};

// add a new page
exports.addPage = (info) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO pages(title, orders, image, content, author, publishedAt) VALUES (?,?,?,?,?,DATE(?))";
    db.run(
      sql,
      [
        info.title,
        info.orders,
        info.image,
        info.content,
        info.author,
        info.publishedAt,
      ],
      function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      }
    );
  });
};
// update an existing page
exports.updatePageByUser = (author, id, page) => {
  return new Promise((resolve, reject) => {
    const sql =
      "UPDATE pages SET title=?, image=?, orders=?, content=?, publishedAt=DATE(?) WHERE id=? AND author=?";
    db.run(
      sql,
      [
        page.title,
        page.image,
        page.orders,
        page.content,
        page.publishedAt,
        id,
        author,
      ],
      function (err) {
        if (err) {
          reject(err);
        } else resolve(this.lastID);
      }
    );
  });
};
exports.updatePageByAdmin = (id, page) => {
  return new Promise((resolve, reject) => {
    const sql =
      "UPDATE pages SET title=?,image=?, orders=?, content=?, author=?, publishedAt=DATE(?) WHERE id=?";
    db.run(
      sql,
      [
        page.title,
        page.image,
        page.orders,
        page.content,
        page.author,
        page.publishedAt,
        id,
      ],
      function (err) {
        if (err) {
          console.log(err);
          reject(err);
        } else resolve(this.lastID);
      }
    );
  });
};
