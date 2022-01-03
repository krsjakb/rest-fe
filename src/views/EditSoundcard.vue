<template>
  <div>
    <b-card :title="'Edit soundcard with id of ' + id">
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
      id: null,
      Name: "",
      Price: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBradById();
  },
  methods: {
    getSoundcardbyId() {
      this.axios
        .get("https://localhost:5001/api/Soundcards/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.Name;
          this.origin = response.data.Price;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveSoundcard() {
      let params = {
        id: this.id,
        Name: this.Name,
        Price: this.Price
      }

      this.axios
        .put("https://localhost:5001/api/Soundcards/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/Soundcards");
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