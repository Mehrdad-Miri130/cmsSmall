"use strict";

const sqlite = require("sqlite3");

exports.db = new sqlite.Database("cms.sqlite", (error) => {
  if (error) throw error;
});
