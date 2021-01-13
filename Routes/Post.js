const express = require('express');
const router = express.Router();
const {
  Update_Post,
  create_post,
  Get_Posts,
  Get_One_Post,
  Delete_Post,
} = require('../Controller/Post');

router.route('/post').post(create_post).get(Get_Posts);
router
  .route('/post/:id')
  .put(Update_Post)
  .get(Get_One_Post)
  .delete(Delete_Post);

module.exports = router;
