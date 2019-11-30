<template>
  <div>
    <Header id="head"></Header>
    <form action="#" method="post" novalidate="novalidate">
      <div class="row-one">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <div class="form-control search-slt">
                <v-select v-model="select" :items="itemsone" :rules="[v => !!v || 'Item is required']" label="Choose items" required></v-select>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <div class="form-control search-slt">
                <v-text-field type="text" name="input-10-1" label="location" />
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
              <button type="button" class="btn btn-primary wrn-btn" @click="search()"> <a >search</a></button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <v-card class="d-inline-block " v-for="(item, i) in items" :key="i" cols="12">
      <v-container>
        <v-row justify="space-between">
          <v-col class="col-3">
            <v-img :src="item.src" style="width:300px;height:240px; border:2px solid grey;"></v-img>
          </v-col>
          <v-col class="col-6">
            <v-card-title class="headline" v-text="item.itemname" ></v-card-title>
            <div>
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:200px;height:5px;" />
            <v-card-title class="headline" v-text="item.status"></v-card-title>
            <v-card-title class="headline" v-text="item.location"></v-card-title>
          </v-col>
          <div class="vertical"></div>
          <v-col class="col-3">
            <v-card-title v-text="item.price"></v-card-title><hr>
            <v-card-subtitle v-text="item.sitcap"></v-card-subtitle>
            <v-card-subtitle v-text="item.color"></v-card-subtitle>
            <v-card-subtitle v-text="item.brand"></v-card-subtitle>
           
          </v-col>
          <div class="verticalone"></div>
          <v-col class="col=6">
            <v-card-title v-text="item.company" class="company"></v-card-title>
            <v-btn  class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <br/><br><br>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
  export default {
    components: {
      Header,
      Footer
    },
    data: () => ({
      items: [{
          status: "available",
          location: "Mandaue,City",
          color: "Color: Blue",
          src: "https://images.dealer.com/ddc/vehicles/2019/Hyundai/Santa%20Fe%20XL/SUV/trim_SE_f0031a/color/Becketts%20Black-RB5-8%2C8%2C8-640-en_US.jpg",
          itemname: "Hyundai XL HY01674",
          price: "P1000 per day",
          brand: "brand: Hyundai ",
          company: " Budget car  Rental",
          sitcap: "Sitting capacity: 4 persons"
        },
        {
          location: "Oslob,Cebu",
          status: "available",
          color: "Colro: orange",
          src: "https://www.suzuki-zambia.com/media/gamme/modeles/graph/2524-photo-suzuki-alto-k10.png",
          itemname: "Zuzuki Alto",
          price: "P1500 per day",
          brand: "brand: zuzuki",
          company: "Zuzuki Company",
          sitcap: "Sitting capacity: 4 persons"
        },
        {
          location: "Medellin Cebu",
          status: "available",
          color: "Color: Black",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQs7kaoUewSBHa7T6rUyWHNdqUuKnCwvuAAexV7xdkPy4w4a2D&s",
          itemname: "Honda XRM 125 DS Fi",
          price: "P1000 per day",
          brand: "brand: Honda",
          company: " Motorbike rental ",
          sitcap: "Sitting capacity: 2 persons"
        },
        {
          location: "Ceby city",
          status: "available",
          color: "Color:Black and Red",
          src: "https://hondaph.com/wp-content/uploads/2019/09/XRM_MOTARD_RED.png",
          itemname: "Yamaha FZi",
          price: "P1500 per day",
          brand: "brand: Yamaha",
          company: "Motorcycle rental ",
          sitcap: " Sitting capacity:2 persons"
        },
        {
          location: "Mandaue,City",
          status: "available",
          color: "Color: white",
          src: "http://perthsuretaxi.com/images/ser-img3.jpg",
          itemname: "Taxi Van",
          price: "P2000 per day",
          brand: "brand: toyota",
          company: " Rent a Van Cebu",
          sitcap: " Sitting capacity:8 persons"
        },
        {
          location: "Cebu City",
          status: "available",
          color: "Color: gray",
          src: "http://toyota.com.ph/wp-content/uploads/2018/06/HH1303-F-01.png",
          itemname: "Foton Trans Van",
          price: "P1000 per day",
          brand: "brand: nissan",
          company: "Mini Van Rental",
          sitcap: "Sitting capacity: 8 persons"
        },
        {
          location: "Mandaue,City",
          status: "available",
          color: "Color: white",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVCmNE5VzQD8YWGKepaPZ6a0ioDKFVB2BDLuWGbZsQu43LR0c&s",
          itemname: "Nathalie Tours",
          price: "P3000 per day",
          brand: "brand: nathalie ",
          company: "nathalie tours",
          sitcap: "Sitting capacity: 34 persons"
        },
        {
          location: "Oslob Cebu",
          status: "available",
          color: "Color: white",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1_fR7ilTwIeH9KDiJDiznNEbT7XDA0v5E98o99689wFKWB5how&s",
          itemname: "Catalina Bus Tour",
          price: "P3500 per day",
          brand: "brand: Catalina",
          company: "Catalina Bus Tours",
          sitcap: "Sitting capacity: 45 persons"
        },
        {
          location: "Medellin",
          status: "available",
          color: "Color: white",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LkhXzxAXZj8qR4D6rM7QJYMeKtUPlQhzoriPu10GPv4mWOYg&s",
          itemname: "Filipino Banka",
          price: "P5000 per day",
          brand: "brand: none",
          company: "Boat Design",
          sitcap: "Sitting capacity: 8 persons"
        },
        {
          location: "Medellin",
          status: "available",
          color: "Color: white",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxfeR566GQF0vDZJvqq_JZp0ZQAZ-XzCuSkCYVlI717nN-79S&s",
          itemname: "Adventure BAngka",
          price: "P4000 per day",
          brand: "brand: none",
          company: "Rise Above",
          sitcap: "Sitting capacity: 8 persons"
        },
      ],
      select: null,
      itemsone: ['car','motorcycle','van','bus','boat' ],
      date: new Date(),
      dater: new Date(),
      rating: 3
    }),
    methods: {
      reserved() {
        this.$router.push("/Login");
      },
    }
  };
</script>
<style scoped>
  .vertical {border-left: 1px solid grey;height: 260px;margin-left: -25%;margin-top: .5%;}
  .verticalone {border-left: 1px solid grey;height: 260px;margin-top: .5%;}
  .container {width: 100%; margin-left: 5%;margin-right: 5%;}
  .row[data-v-109177d0] {margin-right: -35px;margin-left: -65px;margin-top: -1px;}
.row-one[data-v-109177d0][data-v-109177d0] {margin-right: 12%;margin-left: 15%;margin-top: 5%}
  .v-card:not(.v-sheet--tile):not(.v-card--shaped) {border-radius: 4px;width: 85%;margin-top: 50px;margin-left: 8%;}
  .theme--light.v-sheet {background-color: #FFFFFF;border-color: #FFFFFF;height: 290px;color: rgba(0, 0, 0, 0.87);}
  .row {margin-right: -12px;margin-left: -12px;margin-top: 50px;}
  .search-slt {width: 90%;height:70px;font-family: Raleway-SemiBold;}
  .datepicker {font-size: 16px;font-family: Raleway-SemiBold;}
  .col-lg-3 {-ms-flex: 0 0 25%;-webkit-box-flex: 0;flex: 0 0 20%;width: 5%;}
  .theme--light.v-select .v-select__selections {color: rgba(0, 0, 0, 0.87);margin-top: -20px;margin-left: 5%}
  .v-input { margin-top: -14px;}
  .wrn-btn {font-size: 16px; width: 200px;height:70px;font-family: Raleway-SemiBold;}
  .v-btn:not(.v-btn--round).v-size--default {height: 56px;min-width: 194px;padding: 0 16px;margin-left: 75px;margin-top:130px; }
  #head {background-color: whitesmoke;}
  h1,h2 {font-size: 15px;}
  .company{margin-left: 75px;margin-top:5px }
</style>