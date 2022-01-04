<template>
  <div>
    <a href="addKontrollerBrand">New brand</a>
    <b-list-group v-for="kontrollerBrand in kontrollerBrands" :key="kontrollerBrand.id">
      <b-list-group-item>
        Name: {{ kontrollerBrand.name }} ||
        <small class="text-secondary"> Manufacturer: {{ kontrollerBrand.manufacturer }} || </small>
        <small class="text-secondary"> Color: {{ kontrollerBrand.color }} || </small> 
        <small class="text-secondary"> Compatibility: {{ kontrollerBrand.compatibility }} </small>
        <b-button variant="info" @click="editKontroller(kontrollerBrand.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteKontroller(kontrollerBrand.id)">
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
      kontrollerBrands: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/kontrollerBrands")
        .then((response) => {
          this.kontrollerBrands = response.data;
        });
    },
    editKontroller(id) {
      this.$router.push("editKontrollerBrand/" + id)
    },
    deleteKontroller(id) {
      this.axios
        .delete("https://localhost:5001/api/kontrollerBrands/" + id)
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