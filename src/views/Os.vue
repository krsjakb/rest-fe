<template>
  <div>
    <a href="addOS">New OS</a>
    <b-list-group v-for="os in OperatingSystems" :key="os.id">
      <b-list-group-item>
        Operating System: {{ os.name }}
        <small class="text-secondary"> Release Date: {{ os.releaseDate }} </small>
        <b-button variant="info" @click="editBrand(os.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBrand(os.id)">
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
      OperatingSystems: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/OS")
        .then((response) => {
          this.OperatingSystems = response.data;
        });
    },
    editBrand(id) {
      this.$router.push("editOS/" + id)
    },
    deleteBrand(id) {
      this.axios
        .delete("https://localhost:5001/api/OS/" + id)
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