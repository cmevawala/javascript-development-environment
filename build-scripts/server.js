// var express = require("express");
// var path = require("path");
// var open = require("open");
import express from "express";
import path from "path";
import open from "open";

import webpack from "webpack"
import config from "../webbpack.config.dev";

const port = 3000;
const app = express();
const compiler = webpack(config);

// Todo..
/* eslint-disable no-console */
app.use(require("webpack-dev-middleware")(compiler, {
   noInfo: true,
   publicPath: config.output.publicPath 
}));

app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        open("http://localhost:" + port);
    }
});