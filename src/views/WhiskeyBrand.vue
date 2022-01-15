<template>
  <div>
    <a href="addWhiskeyBrand">New whiskey brand</a>
    <b-list-group v-for="whiskeyBrand in whiskeyBrands" :key="whiskeyBrand.id">
      <b-list-group-item>
        Name: {{ whiskeyBrand.name }}
        <small class="text-secondary"> Origin: {{ whiskeyBrand.origin }} </small>
        <b-button variant="info" @click="editBrand(whiskeyBrand.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBrand(whiskeyBrand.id)">
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
      whiskeyBrands: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/WhiskeyBrands")
        .then((response) => {
          this.whiskeyBrands = response.data;
        });
    },
    editBrand(id) {
      this.$router.push("editWhiskeyBrand/" + id)
    },
    deleteBrand(id) {
      this.axios
        .delete("https://localhost:5001/api/WhiskeyBrands/" + id)
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