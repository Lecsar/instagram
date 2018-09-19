const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  profileName: String,
  email: String,
  password: String,
  posts: [
    {
      id: Number,
      likes: [],
      img: String,
      place: String,
      comments: [
        {
          profileName: String,
          text: String,
          id: Number,
          parents: [Number]
        }
      ],
      date: String
    }
  ],

  profilePhoto: String,
  followers: [String],
  following: [String],
  description: {
    name: String,
    comment: String
  }
});

usersSchema.statics.findUserByProfileName = function findUserByProfileName(
  profileName
) {
  return this.findOne({ profileName });
};

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
