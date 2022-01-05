<template>
  <div>
    <b-card :title="'Edit laptop with id of ' + id">
      <b-form-input v-model="serialName" placeholder="Enter serial name"></b-form-input>

      <b-form-input v-model="brand" placeholder="Enter brand"></b-form-input>

      <b-button variant="success" @click="saveLaptop">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      serialName: "",
      brand: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getLaptopById();
  },
  methods: {
    getLaptopById() {
      this.axios
        .get("https://localhost:5001/api/Laptop/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.serialName;
          this.origin = response.data.brand;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveLaptop() {
      let params = {
        id: this.id,
        name: this.serialName,
        origin: this.brand
      }

      this.axios
        .put("https://localhost:5001/api/Laptop/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/laptop");
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