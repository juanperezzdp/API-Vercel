"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongodbURL = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var mongodbURL = process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/ApiCrud";
exports.mongodbURL = mongodbURL;