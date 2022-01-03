<template>
    <div>
        <b-card :title="'Edit book with id of ' + id">
            <b-form-input v-model="title" placeholder="Enter title"></b-form-input>

            <b-form-input v-model="author" placeholder="Enter author"></b-form-input>

            <b-button variant="success" @click="saveBook">Save</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      title: "",
      author: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBookById();
  },
  methods: {
    getBookById() {
      this.axios
        .get("https://localhost:5001/api/Books/" + this.id)
        .then((response) => {
          console.log(response);
          this.title = response.data.title;
          this.author = response.data.author;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBook() {
      let params = {
        id: this.id,
        title: this.title,
        author: this.author
      }

      this.axios
        .put("https://localhost:5001/api/Books/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/Books");
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