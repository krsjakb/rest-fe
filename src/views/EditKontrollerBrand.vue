<template>
  <div>
    <b-card :title="'Edit brand with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="manufacturer" placeholder="Enter manufacturer"></b-form-input>
      
      <b-form-input v-model="color" placeholder="Enter color"></b-form-input>

      <b-form-input v-model="compatibility" placeholder="Enter compatibility"></b-form-input>

      <b-button variant="success" @click="saveBrand">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      manufacturer: "",
      color: "",
      compatibility: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBradById();
  },
  methods: {
    getKontById() {
      this.axios
        .get("https://localhost:5001/api/KontrollerBrands/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.manufacturer = response.data.manufacturer;
          this.color = response.data.color;
          this.compatibility = response.data.compatibility;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBrand() {
      let params = {
        id: this.id,
        name: this.name,
        manufacturer: this.manufacturer,
        color: this.color,
        compatibility: this.compatibility,
      }

      this.axios
        .put("https://localhost:5001/api/KontrollerBrands/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/kontrollerBrands");
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