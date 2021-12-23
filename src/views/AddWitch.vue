<template>
  <div>
    <b-card title="Add new Witch">
      <b-form-input v-model="name" placeholder="Enter the Witch's name"></b-form-input>

      <b-form-input v-model="house" placeholder="Enter the Witch's Hogwarts House"></b-form-input>
      
      <b-form-input v-model="patronus" placeholder="Enter the Witch's patronus"></b-form-input>

      <b-button variant="success" @click="saveWitch">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      house: "",
      patronus: "",
    };
  },
  methods: {
    saveWitch() {
      let params = {
        name: this.name,
        house: this.house,
        patronus: this.patronus,
      }

      this.axios
        .post("https://localhost:5001/api/Witches", params)
        .then(() => {
          alert("success");
          this.$router.push("Witches");
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