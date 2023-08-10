"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _taskController = require("../controllers/task.controller.js");
var router = (0, _express.Router)();
router.post("/", _taskController.createTask);
router.get("/", _taskController.findAllTasks);
router.get("/done", _taskController.findAllDoneTasks);
router.get("/:id", _taskController.findOneTask);
router.put("/:id", _taskController.updateTask);
router["delete"]("/:id", _taskController.deleteTask);
router["delete"]("/", _taskController.deleteAllTask);
var _default = router;
exports["default"] = _default;