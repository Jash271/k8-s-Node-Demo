const Post = require('../Models/Post');

// if (typeof client === 'undefined') {
//   console.log(1);
//   var client = connectDB();
// }
// counter = 0;
exports.create_post = async (req, res, next) => {
  try {
    console.log('1');
    console.log(req.body);
    const post = await Post.create(req.body);
    return res.status(200).json({
      success: true,
      msg: 'Post Created',
      post,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      msg: 'There was some error',
    });
  }
};

exports.Get_Posts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      success: true,

      posts,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      msg: 'There was some error',
    });
  }
};

exports.Get_One_Post = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      msg: 'There was some error',
    });
  }
};

exports.Update_Post = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      msg: 'There was some error',
    });
  }
};

exports.Delete_Post = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      msg: 'Deleted',
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      msg: 'There was some error',
    });
  }
};
