<template>
  <div>
    <a href="addBook">New book</a>
    <b-list-group v-for="Book in Books" :key="Book.id">
      <b-list-group-item>
        Author: {{ Book.author }}
        <small class="text-secondary"> Title: {{ Book.title }} </small>
        <b-button variant="info" @click="editBook(Book.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBook(Book.id)">
          Delete
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Books: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/Books")
        .then((response) => {
          this.Books = response.data;
        });
    },
    editBook(id) {
      this.$router.push("editBook/" + id)
    },
    deleteBook(id) {
      this.axios
        .delete("https://localhost:5001/api/Books/" + id)
        .then(() => {
          this.updateList();
          alert("success");
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