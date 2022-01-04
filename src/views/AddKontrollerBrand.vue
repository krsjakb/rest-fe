<template>
  <div>
    <b-card title="Add kontroller brand">
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
      name: "",
      manufacturer: "",
      color: "",
      compatibility: "",
    };
  },
  methods: {
    saveBrand() {
      let params = {
        name: this.name,
        manufacturer: this.manufacturer,
        color: this.color,
        compatibility: this.compatibility,
      }

      this.axios
        .post("https://localhost:5001/api/kontrollerBrands", params)
        .then(() => {
          alert("success");
          this.$router.push("kontrollerBrands");
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