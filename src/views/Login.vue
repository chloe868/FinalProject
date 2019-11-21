<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-subheader height="200">
      <h1>Login</h1>
    </v-subheader>

    <!-- <v-card-title>Cafe Badilico</v-card-title> -->

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-text-field
          v-model="username"
          :type="'text' "
          :prepend-icon="'mdi-account'"
          name="input-10-1"
          label="username"
          hint="At least 8 characters"
          counter
        ></v-text-field>
        <v-text-field
          v-model="password"
          :type="'password'"
          :prepend-icon="'mdi-key-variant'"
          name="input-10-1"
          label="password"
          hint="At least 8 characters"
        ></v-text-field>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <!-- <v-card-title>Tonight's availability</v-card-title> -->
    <!-- 
    <v-card-text>
      <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>-->

    <v-card-actions>
      <v-btn color="deep-purple accent-4" text @click="reserve()">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 5000);
      this.$router.push("/reserved");
    }
  }
};
</script>
<style scoped>
.theme--light.v-subheader {
  /* color: rgba(0, 0, 0, 0.54); */
  background-color: #1976d2;
  height: 100px;
}
.btn {
  margin-left: 30px;
}
.v-card__actions .v-btn.v-btn {
  padding: 0 8px;
  background-color: #1976d2;
  margin-left: 109px;
  width: 135px;
}
</style>
