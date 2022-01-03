<template>
  <div>
    <a href="addCarBrand">New brand</a>
    <b-list-group v-for="carBrand in carBrands" :key="carBrand.id">
      <b-list-group-item>
        Name: {{ carBrand.name }}
        <small class="text-secondary"> Origin: {{ carBrand.origin }} </small>
        <b-button variant="info" @click="editBrand(carBrand.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBrand(carBrand.id)">
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
      carBrands: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/CarBrands")
        .then((response) => {
          this.carBrands = response.data;
        });
    },
    editBrand(id) {
      this.$router.push("editBrand/" + id);
    },
    deleteBrand(id) {
      this.axios
        .delete("https://localhost:5001/api/CarBrands/" + id)
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
