<template>
  <div>
    <b-card title="Add Chair">
      <b-form-input
        v-model="material"
        placeholder="Enter material"
      ></b-form-input>

      <b-form-input v-model="legs" placeholder="Enter legs"></b-form-input>

      <b-button variant="success" @click="saveChair">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      material: "",
      legs: "",
    };
  },
  methods: {
    saveChair() {
      let params = {
        material: this.material,
        legs: this.legs,
      };
      this.axios
        .post("https://localhost:5001/api/ChairModel", params)
        .then(() => {
          alert("success");
          this.$router.push("Chairs");
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