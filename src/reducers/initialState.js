const initialState = {
  posts: [
    {
      id: 1,
      posted: true,
      platform: 'Facebook',
      datePosted: new Date().toLocaleDateString(),
      likes: 8
    },
    {
      id: 2,
      posted: false,
      platform: 'Twitter',
      datePosted: new Date().toLocaleDateString(),
      likes: 6
    },
    {
      id: 3,
      posted: false,
      platform: 'Instragram',
      datePosted: new Date().toLocaleDateString(),
      likes: 3
    },
    {
      id: 4,
      posted: true,
      platform: 'Twitter',
      datePosted: new Date().toLocaleDateString(),
      likes: 1
    },
    {
      id: 5,
      posted: false,
      platform: 'Facebook',
      datePosted: new Date().toLocaleDateString(),
      likes: 10
    }
  ]
};

export default initialState;
