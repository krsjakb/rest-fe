<template>
  <div>
    <b-card title="Add Random">
      <b-form-input v-model="id" placeholder="Enter id"></b-form-input>

      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="type" placeholder="Enter type"></b-form-input>

      <b-button variant="success" @click="saveRandom">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      type: ""
    };
  },
  methods: {
    saveRandom() {
      let params = {
        id: this.id,
        name: this.name,
        type: this.type
      };
      this.axios
        .post("https://localhost:5001/api/RandomModels", params)
        .then(() => {
          alert("success");
          this.$router.push("RandomsModels");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
