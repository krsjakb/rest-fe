<template>
  <div>
    <b-card :title="'Edit chair with id of ' + id">
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
      id: null,
      material: "",
      legs: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getChairById();
  },
  methods: {
    getChairById() {
      this.axios
        .get("https://localhost:5001/api/ChairModel/" + this.id)
        .then((response) => {
          console.log(response);
          this.material = response.data.material;
          this.legs = response.data.legs;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveChair() {
      let params = {
        id: this.id,
        material: this.material,
        legs: this.legs,
      };
      this.axios
        .put("https://localhost:5001/api/ChairModel/" + this.id, params)
        .then(() => {
          alert("success");
          this.$router.push("/Chairs");
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