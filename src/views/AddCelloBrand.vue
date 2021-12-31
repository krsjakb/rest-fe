<template>
  <div>
    <b-card title="Add cello brand">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="origin" placeholder="Enter origin"></b-form-input>

      <b-button variant="success" @click="saveCelloBrand">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      origin: "",
    };
  },
  methods: {
    saveCelloBrand() {
      let params = {
        name: this.name,
        origin: this.origin
      }

      this.axios
        .post("https://localhost:5001/api/CelloBrands", params)
        .then(() => {
          alert("success");
          this.$router.push("celloBrands");
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