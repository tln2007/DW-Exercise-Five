const express = require('express')
const router = express.Router()
// Initialize firestore
const firestore = require('firebase/firestore');
// Create a reference to the database
const db = firestore.getFirestore();

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    const postQuery = firestore.getDoc(firestore.doc(db, "posts", postId));
    postQuery
        .then((response) => {
            const post = response.data();
            if(!post) res.send({})
            res.send(post);
        })
        .catch((error) => {
            console.log(error);
            return res.send(error);
        });
});

module.exports = router;