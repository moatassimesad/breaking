<template>
  <div class="big_div" style="width: 100%; height: 100%">

    <div class="container login-container">
      <div class="row">
        <div class="col-md-5 login-form-1">
          <h2>Breaking news</h2>
        </div>
        <div class="col-md-7 login-form-2">
          <img src="../assets/logo.png" alt="">
          <h4>Create an account to have full access</h4>
          <div class="facebook_button mt-5">
          <facebook-login
                          appId="240576834303970"
                          @login="onLogin"
                          @logout="onLogout"
                          @sdk-loaded="sdkLoaded">
          </facebook-login>
          </div>
          <p class="mt-3">Or</p>
          <div class="gmail_button">
          <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
          </div>
          </div>
      </div>
    </div>


  </div>
</template>
<script>
import facebookLogin from 'facebook-login-vuejs';
import GoogleLogin from 'vue-google-login';
export default {
  name : 'app',
  data() {
    return {
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id: "398071512465-mo0cs2k3okkiimtm20bjngr47c333cgh.apps.googleusercontent.com"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 40,
        longtitle: true
      }
    }
  },
components :{
  facebookLogin,
  GoogleLogin
},
  methods: {
    getUserData() {
      this.FB.api('/me', 'GET', { fields: 'id,name,email,picture' },
          userInformation => {
            this.personalID = userInformation.id;
            this.email = userInformation.email;
            this.name = userInformation.name;
            userInformation.picture = userInformation.picture.data.url;
            this.$store.dispatch('currentUser/loginFacebookUser',userInformation)
                .then(
                this.$router.push({name : 'news'}
                )
            );
          }
      )
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin() {
      this.isConnected = true
      this.getUserData()

    },
    onLogout() {
      this.isConnected = false;
    },
    onSuccess(googleUser) {
      //console.log(googleUser);
      // This only gets the user information: id, name, imageUrl and email
      //console.log(googleUser.getBasicProfile());
      this.$store.dispatch('currentUser/loginGmailUser',googleUser.getBasicProfile())
          .then(
              this.$router.push({name : 'news'})
          );
    },
    onFailure (){
      console.log("login failed");
    }
  },
  mounted() {
    //
  }
}
</script>
<style>
.big_div{
  background-image: url("../assets/background_login_page.jpeg");

  /* Center and scale the image nicely */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.login-container{
  padding-top: 10%;
  padding-bottom: 5%;
}
.login-form-1{
  padding-bottom: 1px;
  padding-right: 30px;
  font-family: "Al Bayan";
  height: 500px;
  text-align: end;
  padding-top: 10px;
  background-image: url("../assets/image_to_left.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2{
  height: 500px;
  padding-top: 10px;
  background-color: white;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
img{
  width: 30%;
  height: 10%;
  display:block;
  margin:auto;
}
.login-form-2 h4{
  text-align: center;
  margin-top: 10%;
}
.facebook_button{
  display: block;
  margin: auto;
  width: 50%;
}

.gmail_button{
  display: block;
  margin: auto;
  width: 50%;
}
p{
  text-align: center;
}
</style>
