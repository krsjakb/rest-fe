<template>
  <div>
    <b-card title="Add laptop">
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
      serialName: "",
      brand: "",
    };
  },
  methods: {
    saveLaptop() {
      let params = {
        name: this.serialName,
        origin: this.brand
      }

      this.axios
        .post("https://localhost:5001/api/Laptop", params)
        .then(() => {
          alert("success");
          this.$router.push("laptop");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>