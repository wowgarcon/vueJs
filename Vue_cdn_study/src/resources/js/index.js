const app = new Vue({
  el: '#app',
  data: {
    pageTitle: 'MainPage',
    name: 'wowgarcon',
    menus: [{ title: 'Counter' }, { title: 'User' }],
    isLogin: false,
  },
  methods: {
    login: function () {
      this.isLogin = true;
    },

    logout: function () {
      this.isLogin = false;
    },
  },
});
