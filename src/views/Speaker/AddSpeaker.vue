<template>
  <div>
    <b-card title="Add Speaker">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="rms" placeholder="Enter rms"></b-form-input>

      <b-button variant="success" @click="saveSpeaker">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      rms: "",
    };
  },
  methods: {
    saveSpeaker() {
      let params = {
        name: this.name,
        rms: this.rms
      }

      this.axios
        .post("https://localhost:5001/api/Speakers", params)
        .then(() => {
          alert("success");
          this.$router.push("Speakers");
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