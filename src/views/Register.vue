<template>
  <section class="login-block">
    <div class="container">
      <div class="row">
        <div class="col-md-4 login-sec">
          <h2 class="text-center">Login Now</h2>
          <form class="login-form">
            <v-text-field v-model="data.firstname" label="Firtsname" required></v-text-field>
            <v-text-field v-model="data.lastname" label="Lastname" required></v-text-field>
            <v-text-field v-model="data.address" label="Address" required></v-text-field>
            <v-text-field v-model="data.age" label="Age" type="number" min="1" required></v-text-field>

            <v-text-field
              v-model="data.contactnumber"
              label="Contact Number"
              type="string"
              min="0"
              required
            ></v-text-field>
            <v-text-field v-model="data.email" label="E-mail" required></v-text-field>
            <v-text-field v-model="data.username" label="Username" required></v-text-field>
            <v-text-field v-model="data.password" label="Password" type="password" required></v-text-field>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                <small>Remember Me</small>
              </label>
              <button type="submit" class="btn btn-login float-right">Submit</button>
            </div>
            <br>
            <br>
            <div>
              <h1>
                Don't have an account? Click
                <a @click="register">
                  <u>Register!!..</u>
                </a>
              </h1>
            </div>
          </form>
          <div class="copy-text">
            Created with
            <i class="fa fa-heart"></i> by Grafreez
          </div>
        </div>
        <div class="col-md-8 banner-sec">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                  alt="First slide"
                >
                <div class="carousel-caption d-none d-md-block">
                  <div class="banner-text">
                    <h2>This is Heaven</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg"
                  alt="First slide"
                >
                <div class="carousel-caption d-none d-md-block">
                  <div class="banner-text">
                    <h2>This is Heaven</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg"
                  alt="First slide"
                >
                <div class="carousel-caption d-none d-md-block">
                  <div class="banner-text">
                    <h2>This is Heaven</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
.login-block {
  background: #de6262; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #ffb88c,
    #de6262
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #ffb88c,
    #de6262
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  float: left;
  width: 100%;
  padding: 50px 0;
}
/* .banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;} */
.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
}
.carousel-inner {
  border-radius: 0 10px 10px 0;
}
.carousel-caption {
  text-align: left;
  left: 5%;
}
.login-sec {
  padding: 50px 30px;
  position: relative;
}
.login-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
}
.login-sec .copy-text i {
  color: rgb(63, 124, 238);
}
.login-sec .copy-text a {
  color: rgb(74, 163, 204);
}
.login-sec h2 {
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 30px;
  color: #de6262;
}
.login-sec h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: #feb58a;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
}
.btn-login {
  background: #de6262;
  color: #fff;
  font-weight: 600;
}
/* .banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}
.banner-text h2{color:#fff; font-weight:600;}
.banner-text h2:after{content:" "; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}
.banner-text p{color:#fff;} */
</style>
<script>

import axios from "axios";
export default {
  props: {
    source: String
  },
  data() {
    return {
    data:{
      lastname: null,
      firstname: null,
      address: null,
      age: null,
      contactnumber: null,
      email: null,
      username: null,
      password: null
        }
    };
  },
  methods: {
    submit() {
      console.log(this.address);
      axios.post("http://localhost:5000/accountsUsers",this.data).then(response => {
        alert(response);
        this.data ="";
        this.$router.push("/login");
      });
    }
  }
};
</script>


