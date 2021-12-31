<template>
  <div>
    <a href="addGinBrand">New brand</a>
    <b-list-group v-for="ginBrand in ginBrands" :key="ginBrand.id">
      <b-list-group-item>
        Name: {{ ginBrand.name }}
        <small class="text-secondary"> Origin: {{ ginBrand.origin }} </small>
        <b-button variant="info" @click="editBrand(ginBrand.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBrand(ginBrand.id)">
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
      ginBrands: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/GinBrands")
        .then((response) => {
          this.ginBrands = response.data;
        });
    },
    editBrand(id) {
      this.$router.push("editGinBrand/" + id)
    },
    deleteBrand(id) {
      this.axios
        .delete("https://localhost:5001/api/GinBrands/" + id)
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