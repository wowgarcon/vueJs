<template>
  <div>
    <div v-if="!isLogin">
      <input v-model="name" />
      <button v-on:click="login">Login</button>
    </div>
    <div v-if="isLogin">
      <span v-bind:title="name">Hello, {{ name }}</span>
      <button v-bind:class="style.button" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  components: {},
  data() {
    return {
      name: 'wowgarcon',
      menus: [{ title: 'Counter' }, { title: 'User' }],
      isLogin: false,
      style: {
        button: {
          backgroundColor: red,
        },
      },
    };
  },
  methods: {
    login: function () {
      this.isLogin = true;
    },
    logout: function () {
      this.isLogin = false;
    },
  },
};
</script>
