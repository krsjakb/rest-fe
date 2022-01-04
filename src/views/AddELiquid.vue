<template>
  <div>
    <b-card title="Add new ELiquid">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="origin" placeholder="Enter nicotine strength"></b-form-input>

      <b-button variant="success" @click="saveELiquid">Save</b-button>
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
    saveBrand() {
      let params = {
        name: this.fName,
        Strenght: this.str
      }

      this.axios
        .post("https://localhost:5001/api/ELiquids", params)
        .then(() => {
          alert("success");
          this.$router.push("ELiquids");
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