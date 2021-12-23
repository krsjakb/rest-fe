<template>
  <div>
    <b-card title="Add Books">
      <b-form-input v-model="title" placeholder="Enter title"></b-form-input>

      <b-form-input v-model="author" placeholder="Enter author"></b-form-input>

      <b-button variant="success" @click="saveBooks">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      author: "",
    };
  },
  methods: {
    saveBooks() {
      let params = {
        title: this.title,
        author: this.author
      }

      this.axios
        .post("https://localhost:5001/api/Books", params)
        .then(() => {
          alert("success");
          this.$router.push("books");
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