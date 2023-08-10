"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _tasksRoutes = _interopRequireDefault(require("./routes/tasks.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// Settings
app.set("port", process.env.PORT || 3000);

// const corsOptions = {origin: "http://localhost:3000"};
var corsOptions = {};
app.use((0, _cors["default"])(corsOptions));
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.get("/", function (req, res) {
  res.json({
    message: "Welcome to the application"
  });
});
app.use("/api/tasks", _tasksRoutes["default"]);
var _default = app;
exports["default"] = _default;