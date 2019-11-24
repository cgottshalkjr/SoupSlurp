var orm = require("../config/orm.js");

var soup = {
  all: function(cb) {
    orm.all("soups", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("soups", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("soups", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("soups", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = soup;