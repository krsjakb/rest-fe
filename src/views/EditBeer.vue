<template>
  <div>
    <b-card :title="'Edit beer with id of ' + id">
      <b-form-input v-model="brand" placeholder="Enter brand"></b-form-input>

      <b-form-input v-model="type" placeholder="Enter type"></b-form-input>

      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input
        v-model="alcoholPercentage"
        placeholder="Enter alcohol percentage"
      ></b-form-input>

      <b-form-input v-model="rating" placeholder="Enter rating"></b-form-input>

      <b-button variant="success" @click="saveBeer">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      brand: "",
      type: "",
      name: "",
      alcoholPercentage: "",
      rating: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBeerById();
  },
  methods: {
    getBeerById() {
      this.axios
        .get("https://localhost:5001/api/Beers/" + this.id)
        .then(response => {
          console.log(response);
          this.brand = response.data.brand;
          this.type = response.data.type;
          this.name = response.data.name;
          this.alcoholPercentage = response.data.alcoholPercentage;
          this.rating = response.data.rating;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBeer() {
      let params = {
        id: this.id,
        brand: this.brand,
        type: this.type,
        name: this.name,
        alcoholPercentage: this.alcoholPercentage,
        rating: this.rating
      };

      this.axios
        .put("https://localhost:5001/api/Beers/" + this.id, params)
        .then(() => {
          alert("success");
          this.$router.push("/beers");
        })
        .catch(() => {
          alert("failed");
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
