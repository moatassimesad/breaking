<template>
  <div>
    this is our news
    <button @click="redirectLogin">
      redirect me to login
    </button>
    <button @click="redirectComment">
      take me to comment
    </button>
    <button @click="logout">
      log out
    </button>
    <div v-text="name"></div>
    <div class="col-md-6">
    <facebook-login
        class="facebook_button mt-5"
        appId="240576834303970"
        @login="onLogin"
        @logout="onLogout"
        @sdk-loaded="sdkLoaded">
    </facebook-login>
    </div>
  </div>


</template>
<script>
import axios from "axios";
import facebookLogin from 'facebook-login-vuejs';
export default {

  data() {
    return {}
  },
  components: {
    facebookLogin
  },
  methods: {
    redirectLogin() {
      this.$router.push({name: 'login'});
    },
    logout() {
      axios.get("logout").then(response => {
        console.log(response);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      });
    },
    redirectComment() {
      this.$router.push({name: 'addComment'});
    }
  },
  mounted() {
    let user = axios.get("user");
    console.log(user);
}
}
</script>
