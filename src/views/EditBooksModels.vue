<template>
  <div>
    <b-card :title="'Edit Book with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter Name"></b-form-input>

      <b-form-input v-model="author" placeholder="Enter Author"></b-form-input>

      <b-button variant="success" @click="saveBook">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      author: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBradById();
  },
  methods: {
    getBradById() {
      this.axios
        .get("https://localhost:5001/api/BooksModels/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.author = response.data.author;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBook() {
      let params = {
        id: this.id,
        name: this.name,
        author: this.author
      }

      this.axios
        .put("https://localhost:5001/api/BooksModels/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/BooksModels");
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