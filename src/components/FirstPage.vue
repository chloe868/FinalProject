<template>
  <div>
    <Header></Header>
    <section class="search-sec">
      <div class="container">
        <form  method="post" novalidate="novalidate">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div class="form-control search-slt">
                    <v-select :items="items" name="input-10-1" label="choose your options" standard></v-select>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div class="form-control search-slt">
                    <v-text-field type="text"  name="input-10-1" label="location" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div class="form-control search-slt">
                    <v-text-field type="date" v-model="dater" :prepend-icon="'mdi-calendar'" name="input-10-1" label="date reserved" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div class="form-control search-slt">
                    <v-text-field type="date" v-model="date" :prepend-icon="'mdi-calendar'" name="input-10-1" label="date returned" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <button type="button" class="btn btn-primary wrn-btn" @click="search()"><a class="fa fa-search">Search</a></button>
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
  .search-sec {
    padding: 2rem;
  }
  .search-slt {
    width: 90%;
    height: calc(3rem + 2px) !important;
    font-family: Raleway-SemiBold;
  }
  .wrn-btn {
    font-size: 16px;
    height: calc(3rem + 2px) !important;
    font-family: Raleway-SemiBold;
  }
  .datepicker {
    font-size: 16px;
    height: calc(3rem + 2px) !important;
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
    margin-left: 35px;
  }
  .container {
    width: 100%;
    margin-top: 270px;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
    /* border: 2px solid cyan;
     opacity: 0.6;
     background-color:black
     */
  }
 
</style>
<script>
  import Header from "../components/Header.vue"
  export default {
    components: {
      Header
    },
    props: [],
    mounted() {},
    data() {
      return {
        // date: new Date().toJSON.split('T')[0],
        items: ["car", "van", "bus", "m otorcycle", "boat"],
        date: new Date(),
        dater: new Date()
      };
    },
    methods: {
      search() {
        this.$router.push("/mainpage");
      }
    }
  };
</script>