<template>
  <div>
    <b-card title="Add book">
      <b-form-input v-model="author" placeholder="Enter author"></b-form-input>
      <b-form-input v-model="title" placeholder="Enter title"></b-form-input>
      <b-button variant="success" @click="saveBook">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "",
      title: "",
    };
  },
  methods: {
    saveBook() {
      let params = {
        author: this.author,
        title: this.title
      }

      this.axios
        .post("https://localhost:5001/api/Books", params)
        .then(() => {
          alert("success");
          this.$router.push("Books");
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