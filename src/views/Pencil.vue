<template>
  <div>
    <a href="addPencil">New pencil</a>
    <b-list-group v-for="pencil in pencils" :key="pencil.id">
      <b-list-group-item>
        Color: {{ pencil.color }}
        <br />
        Length: {{ pencil.length }}
        <br />
        <b-button variant="info" @click="editPencil(pencil.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deletePencil(pencil.id)">
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
      pencils: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/PencilModel")
        .then((response) => {
          this.pencils = response.data;
        });
    },
    editPencil(id) {
      this.$router.push("editPencil/" + id);
    },
    deletePencil(id) {
      this.axios
        .delete("https://localhost:5001/api/PencilModel/" + id)
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