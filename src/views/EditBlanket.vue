<template>
  <div>
    <b-card :title="'Edit blanket with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="brand" placeholder="Enter brand"></b-form-input>

      <b-form-input v-model="mainColor" placeholder="Enter main color"></b-form-input>

      <b-form-input v-model="mainMaterial" placeholder="Enter main material"></b-form-input>

      <b-form-input v-model="width" placeholder="Enter width"></b-form-input>

      <b-form-input v-model="length" placeholder="Enter length"></b-form-input>

      <b-button variant="success" @click="saveBlanket">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      brand: "",
      mainColor: "",
      mainMaterial: "",
      width: "",
      length: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBlanketById();
  },
  methods: {
    getBlanketById() {
      this.axios
        .get("https://localhost:5001/api/BlanketModels/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.brand = response.data.brand;
          this.mainColor = response.data.mainColor;
          this.mainMaterial = response.data.mainMaterial;
          this.width = response.data.width;
          this.length = response.data.length;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBlanket() {
      let params = {
        id: this.id,
        name: this.name,
        brand: this.brand,
        mainColor: this.mainColor,
        mainMaterial: this.mainMaterial,
        width: this.width,
        length: this.length
      }

      this.axios
        .put("https://localhost:5001/api/BlanketModels/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/blankets");
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