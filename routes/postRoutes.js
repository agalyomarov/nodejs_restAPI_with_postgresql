const { Router } = require("express");
const router = new Router();
const postController = require("../controllers/postController");

router.post("/post", postController.createPost);
router.get("/post", postController.getPostsByUser);

module.exports = router;