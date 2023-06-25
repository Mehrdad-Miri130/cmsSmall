"use strict";

const { db } = require("../db");
const crypto = require("crypto");

exports.userList = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT email,id FROM user";
    db.all(sql, [], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

exports.getUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM user WHERE email = ?";
    db.get(sql, [email], (err, row) => {
      if (err) reject(err);
      else if (row === undefined) resolve(false);
      else {
        const user = {
          id: row.id,
          email: row.email,
          role: row.role,
          name: row.name,
        };
        crypto.scrypt(password, row.salt, 32, function (err, hashedPassword) {
          if (err) reject(err);
          if (
            !crypto.timingSafeEqual(
              Buffer.from(row.password, "hex"),
              hashedPassword
            )
          )
            resolve(false);
          else resolve(user);
        });
        // resolve(user);
      }
    });
  });
};
