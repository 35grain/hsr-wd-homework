import {
  createStore
} from "vuex";

export default createStore({
  state: {
    posts: [{
        "id": 1,
        "date": "Sep 18, 2021 15:16",
        "author": {
          "id": 1,
          "username": "John Doe",
          "profilePicture": ""
        },
        "body": "I think it's going to rain",
        "cover": "https://s.err.ee/photo/crop/2021/06/23/1047444h34c7t28.jpg",
        "likes": 0
      },
      {
        "id": 2,
        "date": "Sep 18, 2021 15:18",
        "author": {
          "id": 1,
          "username": "John Doe",
          "profilePicture": ""
        },
        "body": "Which weighs more, a pound of feathers or a pound of bricks?",
        "cover": "",
        "likes": 0
      },
      {
        "id": 3,
        "date": "Sep 19, 2021 19:44",
        "author": {
          "id": 4,
          "username": "Spiderman",
          "profilePicture": "https://i.insider.com/5f778d302400440019129c6a?width=200"
        },
        "body": "Felt cute, might delete later",
        "cover": "https://cdn.mos.cms.futurecdn.net/TeMTjhZaFLdaNTKjyXeJPd.jpg",
        "likes": 0
      },
      {
        "id": 4,
        "date": "Sep 21, 2021 15:59",
        "author": {
          "id": 1,
          "username": "John Doe",
          "profilePicture": ""
        },
        "body": "Bored...",
        "cover": "https://cdn141.picsart.com/323536763317211.png",
        "likes": 0
      },
      {
        "id": 5,
        "date": "Sep 28, 2021 04:33",
        "author": {
          "id": 1,
          "username": "John Doe",
          "profilePicture": ""
        },
        "body": "Have you seen Squid Game yet?",
        "cover": "https://static.euronews.com/articles/stories/06/11/31/10/1440x810_cmsv2_321b4f12-13f7-5c5c-96ad-e2e4e68b5c37-6113110.jpg",
        "likes": 0
      },
      {
        "id": 6,
        "date": "Sep 28, 2021 08:00",
        "author": {
          "id": 3,
          "username": "Duffman",
          "profilePicture": "https://i.pinimg.com/originals/10/49/91/104991ef30424ee7ffb74d7ed93f384b.jpg"
        },
        "body": "The guy above me has no life. Oh yeah!",
        "cover": "",
        "likes": 0
      },
      {
        "id": 7,
        "date": "Sep 28, 2021 12:35",
        "author": {
          "id": 2,
          "username": "Mr. Bean",
          "profilePicture": "http://images.firstpost.com/wp-content/uploads/2018/01/bean-F.jpg?impolicy=website&height=200"
        },
        "body": "My car has finally broke down",
        "cover": "https://i.ytimg.com/vi/ssYwneMgzgA/hqdefault.jpg",
        "likes": 0
      },
      {
        "id": 8,
        "date": "Sep 30, 2021 23:59",
        "author": {
          "id": 3,
          "username": "Duffman",
          "profilePicture": "https://i.pinimg.com/originals/10/49/91/104991ef30424ee7ffb74d7ed93f384b.jpg"
        },
        "body": "Felt cute, might delete later",
        "cover": "https://www.denofgeek.com/wp-content/uploads/2015/03/duff1.jpg?resize=768%2C432",
        "likes": 0
      },
      {
        "id": 9,
        "date": "Oct 2, 2021 13:24",
        "author": {
          "id": 2,
          "username": "Mr. Bean",
          "profilePicture": "http://images.firstpost.com/wp-content/uploads/2018/01/bean-F.jpg?impolicy=website&height=200"
        },
        "body": "Felt cute, might delete later",
        "cover": "https://stuffedparty.com/wp-content/uploads/2015/03/mr-bean-teddy.jpg",
        "likes": 0
      },
      {
        "id": 10,
        "date": "Oct 3, 2021 17:13",
        "author": {
          "id": 3,
          "username": "Duffman",
          "profilePicture": "https://i.pinimg.com/originals/10/49/91/104991ef30424ee7ffb74d7ed93f384b.jpg"
        },
        "body": "Duff > coffee",
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5Ziyx1JQvs1rHd9ouhELOoUMTDAQYnJ98A&usqp=CAU",
        "likes": 0
      }
    ]
  },
  getters: {},
  mutations: {
    Like (state, {$id}) {
      state.posts.find(item => item.id === $id).likes += 1;               
  },
  },
  actions: {
    LikeAct: ({commit}, {$id}) => {
      commit("Like", {$id})
    }
  },
  modules: {},
});