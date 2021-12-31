<template>
  <div>
    <b-card :title="'Edit job advertisement with id of ' + id">
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
        id: null,
        name: "",
        text: "",
        location:"",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getJobAdvertisementById();
  },
  methods: {
    getJobAdvertisementById() {
      this.axios
        .get("https://localhost:5001/api/JobAdvertisements/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.text = response.data.text;
          this.location = response.data.location
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveJobAdvertisement() {
      let params = {
        id: this.id,
        name: this.name,
        text: this.text,
        location: this.location
      }

      this.axios
        .put("https://localhost:5001/api/JobAdvertisements/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/jobAdvertisements");
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