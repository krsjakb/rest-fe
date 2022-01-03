<template>
  <div>
    <b-card title="Add new soundcard">
      <b-form-input v-model="Name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="Price" placeholder="Enter price"></b-form-input>

      <b-button variant="success" @click="saveSoundcard">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Name: "",
      Price: "",
    };
  },
  methods: {
    saveSoundcard() {
      let params = {
        Name: this.Name,
        Price: this.Price
      }

      this.axios
        .post("https://localhost:5001/api/Soundcards", params)
        .then(() => {
          alert("success");
          this.$router.push("Soundcards");
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