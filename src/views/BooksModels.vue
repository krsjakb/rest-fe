<template>
  <div>
    <a href="addBooksModels">New Book</a>
    <b-list-group v-for="BooksModels in BooksModels" :key="BooksModels.id">
      <b-list-group-item>
        Name: {{ BooksModels.name }}
        <small class="text-secondary"> Author: {{ BooksModels.author }} </small>
        <b-button variant="info" @click="editBooks(BooksModels.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBooks(BooksModels.id)">
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
      BooksModels: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/BooksModels")
        .then((response) => {
          this.BooksModels = response.data;
        });
    },
    editBooks(id) {
      this.$router.push("editBooksModels/" + id)
    },
    deleteBooks(id) {
      this.axios
        .delete("https://localhost:5001/api/BooksModels/" + id)
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