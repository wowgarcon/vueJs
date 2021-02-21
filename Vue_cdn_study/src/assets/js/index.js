// Vue.component('my-header', {
//   template: `
//     <div>
//     <div v-if="!isLogin">
//       <input v-model="name" />
//       <button v-on:click="login">Login</button>
//     </div>
//     <div v-if="isLogin">
//       <span v-bind:title="name">Hello, {{ name }}</span>
//       <button v-bind:class="style.button" @click="logout">Logout</button>
//     </div>
//   </div>`,
// });

let header = `
  <div>
  <div v-if="!isLogin">
    <input v-model="name" />
    <button v-on:click="login">Login</button>
  </div>
  <div v-if="isLogin">
    <span v-bind:title="name">Hello, {{ name }}</span>
    <button v-bind:class="style.button" @click="logout">Logout</button>
  </div>
  </div>`;

const app = new Vue({
  el: '#app',
  components: {
    'my-header': header,
  },
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
