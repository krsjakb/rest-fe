<template>
  <div>
    <b-card title="Add phone">
      <b-form-input v-model="price" placeholder="Enter price"></b-form-input>

      <b-form-input v-model="brandName" placeholder="Enter BrandName"></b-form-input>
      <b-form-input v-model="typeName" placeholder="Enter TypeName"></b-form-input>

      <b-button variant="success" @click="savePhone">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: "",
      brandName: "",
      typeName: ""
    };
  },
  methods: {
    savePhone() {
      let params = {
        price: this.price,
        brandName: this.brandName,
        typeName: this.typeName
      }

      this.axios
        .post("https://localhost:5001/api/Phones", params)
        .then(() => {
          alert("success");
          this.$router.push("phones");
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