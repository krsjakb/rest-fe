<template>
  <div>
    <b-card title="Add Book">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="Author" placeholder="Enter Author"></b-form-input>

      <b-button variant="success" @click="saveBooks">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      Author: "",
    };
  },
  methods: {
    saveBooks() {
      let params = {
        name: this.name,
        Author: this.Author
      }

      this.axios
        .post("https://localhost:5001/api/BooksModels", params)
        .then(() => {
          alert("success");
          this.$router.push("BooksModels");
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