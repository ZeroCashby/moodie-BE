const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const ProjectsController = require('../controllers/projects');

// Handle incoming GET requests to /projects
router.get("/", checkAuth, ProjectsController.projects_get_all);

router.post("/", /*checkAuth,*/ ProjectsController.projects_create_project);

router.get("/:projectId", /*checkAuth,*/ ProjectsController.projects_get_project);

router.delete("/:projectId", /*checkAuth,*/ ProjectsController.projects_delete_project);

module.exports = router;
