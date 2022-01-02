<template>
  <div>
    <b-card title="Add beer">
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
      brand: "",
      type: "",
      name: "",
      alcoholPercentage: "",
      rating: ""
    };
  },
  methods: {
    saveBeer() {
      let params = {
        brand: this.brand,
        type: this.type,
        name: this.name,
        alcoholPercentage: this.alcoholPercentage,
        rating: this.rating
      };

      this.axios
        .post("https://localhost:5001/api/Beers", params)
        .then(() => {
          alert("success");
          this.$router.push("beers");
        })
        .catch(() => {
          alert("failed");
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
