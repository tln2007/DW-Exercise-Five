const express = require('express');
const router = express.Router();

const createPostForm = `
<h1>Create Post</h1>
<form action="">
    <input type="text" name="title" placeholder="Title" />
    <input type="text" name="text" placeholder="Text" />
    <input type="text" name="author" placeholder="Author" />
    <button type="submit">Submit Button</button>
</form>
`;

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    res.send(createPostForm);
});

module.exports = router;