<template>
  <div>
    <a href="addCelloBrand">New brand</a>
    <b-list-group v-for="celloBrand in celloBrands" :key="celloBrand.id">
      <b-list-group-item>
        Name: {{ celloBrand.name }}
        <small class="text-secondary"> Origin: {{ celloBrand.origin }} </small>
        <b-button variant="info" @click="editCelloBrand(celloBrand.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteCelloBrand(celloBrand.id)">
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
      celloBrands: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/CelloBrands")
        .then((response) => {
          this.celloBrands = response.data;
        });
    },
    editCelloBrand(id) {
      this.$router.push("editCelloBrand/" + id)
    },
    deleteCelloBrand(id) {
      this.axios
        .delete("https://localhost:5001/api/CelloBrands/" + id)
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