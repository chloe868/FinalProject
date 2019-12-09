<template>
  <div>
    <Header />
    <br />
    <br />
    <br />
    <br />
    <v-card class="mx-auto" max-width="500" max-height="700">
      <input type="file" @change="onFileChanged">
<button @click="onUpload">Upload!</button>
      <v-text-field
        class="sign-up"
        type="text"
        placeholder="Company Name"
        v-model="editedItem.company"
      >Company Name</v-text-field>
      <v-text-field
        class="sign-up"
        type="text"
        placeholder="Company Address"
        v-model="editedItem.comaddress"
      >Company Number</v-text-field>
      <v-text-field
        class="sign-up"
        type="number"
        min="0"
        placeholder=" Contact Number"
        v-model="editedItem.vcontact"
      />
      <v-text-field class="sign-up" type="email" placeholder=" Email" v-model="editedItem.vemail" />
      <v-text-field
        class="sign-up"
        type="password"
        placeholder=" Password"
        v-model="editedItem.vpassword"
      />
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <center>
            <v-btn color="primary" dark class="mb-2" v-on="on">Update profile</v-btn>
          </center>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.company" label="Company Name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.comaddress" label="Company Address"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.vcontact" label="Contact Number"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.vemail" label="Email"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.vpassword" label="New Password"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>
<script>
import Header from "..//components/Header.vue";
export default {
  name: "uploadFile",
  components: {
    Header
  },
  data() {
    return {
      file: " ",
      show: false,
      dialog: false,
      update: [],
      editedIndex: -1,
      editedItem: {
        company: "",
        comaddress: "",
        vcontact: 0,
        vemail: "",
        vpassword: ""
      },
      defaultItem: {
        company: "",
        comaddress: "",
        vcontact: 0,
        vemail: "",
        vpassword: ""
      }
    };
  },
  methods: {
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.update[this.editedIndex], this.editedItem);
      } else {
        this.update.push(this.editedItem);
      }
      this.close();
    },
    beforeUpload() {
      this.file = this.$refs.myFileRef.files;
    },
    uploadFile: function() {
      let formData = new FormData();

      formData.append("img", this.file);
      for (let i = 0; i < this.file.length; i++) {
        formData.append("img", this.file[i]);
      }
      this.$axios
        .post(`http://localhost:5000/uploadMultiple`, formData)
        .then(res => {
          console.log(res);
          alert(res);
        })
        .catch(error => {
          console.error("file upload failed", error);
        });
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  }
};
</script>
<style scoped>
[id="sign-up"]:checked ~ input.sign-up {
  max-height: 40px;
  padding: 10px;
  margin: 10px 0;
  opacity: 1;
}
input {
  padding: 6px;
  border-style: inset;
  color: black;
}
element.style {
    height: 250px;
}


</style>
