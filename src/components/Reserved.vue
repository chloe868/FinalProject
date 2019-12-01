<template>
<div class="container">
  <v-card :loading="loading" class="mx-auto my-12" max-width="800" @click="onsubmit()">
    <v-subheader height="200">
      <h1>Reservation Form</h1>
    </v-subheader>
    <v-card-title></v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <!-- <v-row align="center" class="mx-0"> -->
        <v-text-field v-model="username" :type="'text' " :prepend-icon="'mdi-account'" name="input-10-1" label="username"></v-text-field>
        <v-text-field v-model="date" :type="'date'" :prepend-icon="'mdi-calendar'" name="input-10-1" label="date returned"></v-text-field>
      </v-row>
      <v-row align="center" class="mx-1">
        <!-- <v-row align="center" class="mx-0"> -->
        <v-text-field v-model="date" :type="'date' " :prepend-icon="'mdi-calendar'" name="input-10-1"></v-text-field>
        <v-text-field v-model="item" :type="'item'" :prepend-icon="'mdi-item'" name="input-10-1" label="total payable"></v-text-field>
      </v-row>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple accent-4" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),
    methods: {
      reserve() {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
        this.$router.push('/mainpage')
      },
    },
  }
</script>
<style scoped>
  .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 4px;
    /* -webkit-text-stroke-width: thick; */
    max-width: 500px;
  }
  .theme--light.v-subheader {
    /* color: rgba(0, 0, 0, 0.54); */
    background-color: #1976d2;
    height: 100px;
  }
  .v-card__actions .v-btn.v-btn {
    padding: 0 8px;
    background-color: #1976d2;
    margin-left: 300px;
    width: 135px;
  }
</style>