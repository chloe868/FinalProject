<template>
  <div>
    <!-- <v-app-bar fixed app> -->
    <v-simple-table fixed-header>
      <thead>
        <tr>
          <th class="text-left">
            <v-icon @click.stop="drawer = !drawer">fas fa-bars</v-icon>
          </th>
          <th class="text-right">
            <v-btn @click="logout" rounded color="white">Logout</v-btn>
          </th>
        </tr>
      </thead>
    </v-simple-table>
    <!-- </v-app-bar> -->
    <v-navigation-drawer height="910" class="overflow-hidden" v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYUEwHoe6jCtja8EvyKoVmICZj84fN2q5zQpzwddQuyjmU75o&s"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Catalina Car Rentals</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list  dense>
        <v-list-item  two-line v-for="(item , i)  in menu" :key="i"  :to="item._click">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item link @click="profile()">
          <v-list-item-action>
            <v-icon>fas fa-user</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="notify()">
          <v-list-item-action>
            <v-icon>fas fa-bell</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="item()">
          <v-list-item-action>
            <v-icon>fab fa-product-hunt</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Items</v-list-item-title>
          </v-list-item-content>
        </v-list-item>-->
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<style scoped>
.theme--light.v-data-table.v-data-table--fixed-header thead th {
  background: #1976d2;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  height: 88px;
}
.v-list-item--dense,
.v-list--dense .v-list-item {
  min-height: 75px;
}
</style>
<script>
export default {
  data() {
    return {
      drawer: false,
      menu: [
        { icon: "fas fa-home", title: "Dashboard", _click: "/pageadmin" },
        { icon: "fas fa-user", title: "Profile", _click: "/profile" },
        { icon: "fas fa-bell", title: "Notifications", _click: "/notifications" },
        { icon: "fab fa-product-hunt", title: "Items", _click: "/items" }
      ]
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    navigate(name) {
      if (this.$route.path !== `${name}`) {
        console.log(name);
        
        this.$router.replace(`/${name}`);
      } else {
        this.drawer = false;
      }
    },
    dashboard() {
      this.navigate("/pageadmin");
    },
    notify() {
      this.navigate("/notifications");
    },
    item() {
      this.navigate("/items");
    },
    profile() {
      this.navigate("/profile");
    },
    handleResize() {
      if (window.innerWidth < 1200) {
        this.flexall = 12;
      } else {
        this.flexall = 6;
      }
    },
    logout(){
      this.$router.push({path: "/pageadmin"});
    }
  }
};
</script>
