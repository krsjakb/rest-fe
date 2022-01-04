<template>
  <div>
    <b-card :title="'Edit screwdriver with id of ' + id">
      <b-form-input v-model="brandname" placeholder="Enter brand name"></b-form-input>

      <b-form-input v-model="modelname" placeholder="Enter model name"></b-form-input>

      <b-form-input v-model="price" placeholder="Enter price"></b-form-input>

      <b-button variant="success" @click="saveScrewDriver">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      brandname: "",
      modelname: "",
      price: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getScrewDriverById();
  },
  methods: {
    getScrewDriverById() {
      this.axios
        .get("https://localhost:5001/api/ScrewDrivers/" + this.id)
        .then((response) => {
          console.log(response);
          this.brandname = response.data.brandname;
          this.modelname = response.data.modelname;
          this.price = response.data.price;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveScrewDriver() {
      let params = {
        id: this.id,
        brandname: this.brandname,
        modelname: this.modelname,
        price: this.price
      }

      this.axios
        .put("https://localhost:5001/api/ScrewDrivers/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/ScrewDrivers");
        })
        .catch(() => {
          alert("failed");
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>