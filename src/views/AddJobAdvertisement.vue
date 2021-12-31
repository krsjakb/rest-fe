<template>
  <div>
    <b-card title="Add job advertisement">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="text" placeholder="Enter text"></b-form-input>

      <b-form-input v-model="location" placeholder="Enter location"></b-form-input>

      <b-button variant="success" @click="saveJobAdvertisement">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      text: "",
      location:"",
    };
  },
  methods: {
    saveJobAdvertisement() {
      let params = {
        name: this.name,
        text: this.text,
        location: this.location,
      }

      this.axios
        .post("https://localhost:5001/api/JobAdvertisements", params)
        .then(() => {
          alert("success");
          this.$router.push("jobAdvertisements");
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