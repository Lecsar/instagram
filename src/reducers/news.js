const initialState = {
  news: [
    {
      profileName: 'test',
      place: 'Ryazan',
      img:
        'https://instagram.fhrk1-1.fna.fbcdn.net/vp/e6820c66e70a68ca5a0743e2963e06dd/5C200963/t51.2885-15/e35/40645315_291771558087710_176746173859018166_n.jpg',
      likes: 500,
      comments: []
    }
  ]
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default newsReducer;
