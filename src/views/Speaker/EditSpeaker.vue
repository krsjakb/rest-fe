<template>
  <div>
    <b-card :title="'Edit speaker with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="rms" placeholder="Enter RMS"></b-form-input>

      <b-button variant="success" @click="saveSpeaker">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        id: 0,
        name: "",
        rms: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getSpeakerById();
  },
  methods: {
    getSpeakerById() {
      this.axios
        .get("https://localhost:5001/api/Speakers/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.rms = response.data.rms;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveSpeaker() {
      let params = {
        id: this.id,
        name: this.name,
        rms: this.rms
      }

      this.axios
        .put("https://localhost:5001/api/Speakers/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/Speakers");
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