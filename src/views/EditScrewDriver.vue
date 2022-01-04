<template>
  <div>
    <b-card :title="'Edit screwdriver with id of ' + id">
      <b-form-input v-model="brandName" placeholder="Enter brand name"></b-form-input>

      <b-form-input v-model="modelName" placeholder="Enter model name"></b-form-input>

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
      brandName: "",
      modelName: "",
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
        .get("https://localhost:5001/api/ScrewDriverModels/" + this.id)
        .then((response) => {
          console.log(response);
          this.brandName = response.data.brandName;
          this.modelName = response.data.modelName;
          this.price = response.data.price;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveScrewDriver() {
      let params = {
        id: this.id,
        brandName: this.brandName,
        modelName: this.modelName,
        price: this.price
      }

      this.axios
        .put("https://localhost:5001/api/ScrewDriverModels/" + this.id,
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