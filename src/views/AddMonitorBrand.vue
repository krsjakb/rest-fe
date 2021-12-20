<template>
  <div>
    <b-card title="Add Monitor brand">
      <b-form-input v-model="Name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="Type" placeholder="Enter type"></b-form-input>

      <b-form-input v-model="Place" placeholder="Enter place"></b-form-input>

      <b-button variant="success" @click="saveBrand">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Name: "",
      Type: "",
      Place: ""
    };
  },
  methods: {
    saveBrand() {
      let params = {
        Name: this.Name,
        Type: this.Type,
        Place: this.Place
      }

      this.axios
        .post("https://localhost:5001/api/MonitorBrand", params)
        .then(() => {
          alert("success");
          this.$router.push("monitorBrand");
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