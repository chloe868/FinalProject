<template>
  <div>
    <Header id="head"></Header>
    <form action="#" method="post" novalidate="novalidate">
      <div class="row-one">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <div class="form-control search-slt">
                <v-select :items="items" name="input-10-1" label="choose your options" standard></v-select>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <div class="form-control search-slt">
                <v-text-field type="text" name="input-10-1" label="location" />
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <div class="form-control search-slt">
                <v-text-field
                  type="date"
                  v-model="dater"
                  :prepend-icon="'mdi-calendar'"
                  name="input-10-1"
                  label="date reserved"
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <div class="form-control search-slt">
                <v-text-field
                  type="date"
                  v-model="date"
                  :prepend-icon="'mdi-calendar'"
                  name="input-10-1"
                  label="date returned"
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <button type="button" class="btn btn-primary wrn-btn" @click="search()">
                <a class="fa fa-search">Search</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://d2pa5gi5n2e1an.cloudfront.net/ph/images/car_models/Subaru_WRX_STI/2/main/L_1.jpg"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1 @click="change()">Subaru WRX STI</h1>
            <h2>P2000 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: Cebu Cabahug Rent a Car</h1>
            <h2>Sitting Capacity: 4 persons</h2>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://www.suzuki-zambia.com/media/gamme/modeles/graph/2524-photo-suzuki-alto-k10.png"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>Zuzuki Alto</h1>
            <h2>P1500 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: Budget car and Truck Rental</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://images.dealer.com/ddc/vehicles/2019/Hyundai/Santa%20Fe%20XL/SUV/trim_SE_f0031a/color/Becketts%20Black-RB5-8%2C8%2C8-640-en_US.jpg"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>Hyundai XL HY01674T</h1>
            <h2>P2500 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: Car rental Cebu</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQs7kaoUewSBHa7T6rUyWHNdqUuKnCwvuAAexV7xdkPy4w4a2D&s"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>Yamaha FZi</h1>
            <h2>P2000 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: Motorcycle rental in Cebu City</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://hondaph.com/wp-content/uploads/2019/09/XRM_MOTARD_RED.png"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>Honda XRM 125 DS Fi</h1>
            <h2>P1500 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: ZG Motorbike rental Cebu</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://emcor.com.ph/wp-content/uploads/2019/04/Wave-110-Alpha-Black.jpg"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>Honda Wave Alpha Spokes</h1>
            <h2>P1000 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: Motorbike Cebu</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://southwesttours.ph/media/catalog/product/cache/1/image/700x700/9df78eab33525d08d6e5fb8d27136e95/v/a/van_6_2.png"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>TR-BOR-VAN-CAT</h1>
            <h2>P1700 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: Cebu Cheap Van rental</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img height="250" width="300" src="http://perthsuretaxi.com/images/ser-img3.jpg"></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>Taxi van</h1>
            <h2>P2500 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: Rent a Van Cebu</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="http://toyota.com.ph/wp-content/uploads/2018/06/HH1303-F-01.png"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>Toyota Hiace 3.0TD Minibus</h1>
            <h2>P3500 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: CK Tours</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://www.bharatbenz.com/uploads/product_images/main_1532432736.png"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>BharatBenz</h1>
            <h2>P3000 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col></v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="http://designmella.com/images/bus-passenger-bus.png"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>Jan Bus</h1>
            <h2>P2500 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: Nathalie Tours</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCvga2xBbSBzDGZETF_ueWyNWzvGgsgBTiAvT8j96VhHy3h4v&s"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>IC bus</h1>
            <h2>P3000 per day</h2>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: Bus rental Cebu</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LkhXzxAXZj8qR4D6rM7QJYMeKtUPlQhzoriPu10GPv4mWOYg&s "
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>FNDSajufasdf</h1>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: Explore Cebu tours and travel</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxfeR566GQF0vDZJvqq_JZp0ZQAZ-XzCuSkCYVlI717nN-79S&s"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>FNDSajufasdf</h1>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Company: Deep Zone Dive Center</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="250"
              width="300"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2ZJL8FOtHn4M6PA47oVHv_unF7nIUHEzWLn2SXluKq0btbv4&s"
            ></v-img>
          </v-col>
          <v-col class="mb-3">
            <h1>FNDSajufasdf</h1>
            <div >
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <h3>Color: Blue</h3>
            <h4>Brand: Subaru</h4>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <h1>Dive Guys Cebu</h1>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
  data() {
    return {
      items: ["car", "van", "bus", "m otorcycle", "boat"],
      date: new Date(),
      dater: new Date()
      
    };
  },
  methods: {
    reserved() {
      this.$router.push("/Login");
    }
  }
};
</script>
<style scoped>
.vertical {
  border-left: 1px solid grey;
  height: 260px;
  margin-left: -25%;
  margin-top: 1%;
}
.container {
  width: 100%;
  margin-left: 5%;
  margin-right: 5%;
}
.row[data-v-109177d0] {
  display: flex;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin-right: -35px;
  margin-left: -65px;
  margin-top: -1px;
}
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 4px;
  width: 100%;
  margin-top: 50px;
}
.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin-right: -12px;
  margin-left: -12px;
  margin-top: 50px;
}
.search-sec {
  padding: 2rem;
}
.search-slt {
  width: 90%;
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
  margin-left: 5%;
}
.v-input {
  margin-top: -14px;
}
.row-one[data-v-109177d0] {
    margin-right: 1%;
    margin-left: 15%;
    margin-top: 5%;
}
.wrn-btn {
    font-size: 16px;
    height: calc(3rem + 2px) !important;
    font-family: Raleway-SemiBold;
  }
#head {
  background-color: whitesmoke;
}
h1,
h2,
h3 {
  font-family: Arial;
}

h1 {
  font-style: oblique;
  font-size: 20px;
}
h2,
h3,
h4 {
  font-size: 15px;
}
.primary {
  margin-top: 30px;
}
</style>