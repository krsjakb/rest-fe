<template>
  <div>
    <b-card title="Add car brand">
      <b-form-input v-model="type" placeholder="Enter type"></b-form-input>

      <b-form-input v-model="price" placeholder="Enter price"></b-form-input>

      <b-button variant="success" @click="saveNotebook">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      price: "",
    };
  },
  methods: {
    saveNotebook() {
      let params = {
        type: this.type,
        price: this.price,
      };

      this.axios
        .post("https://localhost:5001/api/NotebookModel", params)
        .then(() => {
          alert("success");
          this.$router.push("notebook");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
