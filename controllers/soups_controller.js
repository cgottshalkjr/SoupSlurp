var express = require("express");

var router = express.Router();

var soup = require("../models/soups.js");

router.get("/", function (req, res) {
    soup.selectAll(function (data) {
        var hbsObject = {
            soups: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/soups", function (req, res) {
    console.log(req.body);
    soup.insertOne(["name", "slurped"], [req.body.name, req.body.slurped], function (result) {

        res.json({ id: result.insertId });
    });
});

router.put("/api/soups/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    console.log(req.body);

    soup.updateOne({ slurped: req.body.slurped }, condition, function (result) {
        if (result.changedRows === 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/soups/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    soup.deleteOne(condition, function (result) {
        res.send(result);
    });
});





module.exports = router;
