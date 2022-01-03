<template>
    <div>
        <a href="addBook">New book</a>
        <b-list-group v-for="books in books" :key="books.id">
            <b-list-group-item>
                Title: {{ books.title }}
                <small class="text-secondary"> Author: {{ books.author }} </small>
                <b-button variant="info" @click="editBook(books.id)" class="mr-2">
                    Edit
                </b-button>
                <b-button variant="danger" @click="deleteBook(books.id)">
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
      books: [],
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
          this.books = response.data;
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