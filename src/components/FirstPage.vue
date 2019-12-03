<template>
  <div>
    <Header></Header>
    <section class="search-sec">
      <div class="container">
        <form action="#" method="post" novalidate="novalidate">
          <div class="row-one">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div class="form-control search-slt">
                    <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Choose items" required></v-select>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div class="form-control search-slt">
                    <v-text-field type="text" v-model="location" name="input-10-1" label="location" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div class="form-control search-slt">
                    <v-text-field type="date" v-model="dater" :prepend-icon="'mdi-calendar'" name="input-10-1" label="date reserved" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div class="form-control search-slt">
                    <v-text-field label="date returned" type="date" v-model="date" :prepend-icon="'mdi-calendar'" name="input-10-1" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <button type="button" class="btn btn-primary wrn-btn" @click="search()">
                        <a>search</a>
                      </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<style scoped>
  .search-slt {
    width: 90%;
    height: 70px;
    font-family: Raleway-SemiBold;
  }
  .wrn-btn {
    font-size: 16px;
    width: 200px;
    height: 70px;
    font-family: Raleway-SemiBold;
  }
  .datepicker {
    font-size: 16px;
    font-family: Raleway-SemiBold;
  }
  option {
    font-family: Raleway-SemiBold;
  }
  .col-lg-3 {
    -ms-flex: 0 0 25%;
    -webkit-box-flex: 0;
    flex: 0 0 20%;
    width: 5%;
  }
  .theme--light.v-select .v-select__selections {
    color: rgba(0, 0, 0, 0.87);
    margin-top: -20px;
  }
  .v-input {
    margin-top: -14px;
  }
  .row {
    margin-right: -35px;
    margin-left: 20px;
  }
  .container {
    width: 100%;
    margin-top: 270px;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
  }
  .v-menu__content {
    position: absolute;
    display: inline-block;
    border-radius: 4px;
    max-width: 80%;
    overflow-y: auto;
    overflow-x: hidden;
    contain: content;
    will-change: transform;
  }
</style>
<script>
  import Header from "../components/Header.vue";
  export default {
    components: {
      Header
    },
    props: [],
    mounted() {
      if (localStorage.location) {
        this.location = localStorage.location;
      }
      
      if (localStorage.date) {
        this.date = localStorage.date;
      }
      if (localStorage.dater) {
        this.dater = localStorage.dater;
      }
    },
    data() {
      return {
        valid: true,
        locationRules: [v => !!v || "Location is required"],
        select: null,
        items: ["car", "motorcycle", "van", "bus", "boat"],
        date: null,
        dater: null,
        location: null,
      };
    },
    methods: {
      search() {
        localStorage.items = this.items;
        localStorage.location = this.location;
        localStorage.date = this.date;
        localStorage.dater = this.dater;
        this.$router.push("/mainpage");
      }
    }
  };
</script>