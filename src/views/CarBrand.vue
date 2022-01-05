<template>
  <div>
    <a href="addCarBrand">New model</a>
    <b-list-group v-for="champModel in champModels" :key="champModel.id">
      <b-list-group-item>
        Name: {{ champModel.name }}
        <small class="text-secondary"> Health: {{ champModel.health }} </small>
        <b-button variant="info" @click="editBrand(champModel.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBrand(champModel.id)">
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
      champModels: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/ChampModels")
        .then((response) => {
          this.champModels = response.data;
        });
    },
    editBrand(id) {
      this.$router.push("editBrand/" + id)
    },
    deleteBrand(id) {
      this.axios
        .delete("https://localhost:5001/api/ChampModels/" + id)
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
