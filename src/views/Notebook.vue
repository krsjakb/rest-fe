<template>
  <div>
    <a href="addNotebook">New notebook</a>
    <b-list-group v-for="notebook in notebooks" :key="notebook.id">
      <b-list-group-item>
        Type: {{ notebook.type }}
        <small class="text-secondary"> Price: {{ notebook.price }} </small>
        <b-button
          variant="info"
          @click="editNotebook(notebook.id)"
          class="mr-2"
        >
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteNotebook(notebook.id)">
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
      notebooks: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/NotebookModel")
        .then((response) => {
          this.notebooks = response.data;
        });
    },
    editNotebook(id) {
      this.$router.push("editNotebook/" + id);
    },
    deleteNotebook(id) {
      this.axios
        .delete("https://localhost:5001/api/NotebookModel/" + id)
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

<style lang="scss" scoped></style>
