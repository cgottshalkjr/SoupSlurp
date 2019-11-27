var orm = require("../config/orm.js");

var soup = {
  selectAll: function (cb) {
    orm.selectAll("soups", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    orm.insertOne("soups", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("soups", objColVals, condition, function (res) {
      cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    orm.deleteOne("soups", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = soup;