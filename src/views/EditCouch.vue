<template>
  <div>
    <b-card :title="'Edit couch with id of ' + id">
      <b-form-input v-model="weight" placeholder="Enter weight"></b-form-input>

      <b-form-input v-model="brandName" placeholder="Enter brand name"></b-form-input>

      <b-form-input v-model="material" placeholder="Enter material"></b-form-input>

      <b-button variant="success" @click="saveCouch">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      weight: "",
      brandName: "",
      material: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCouchById();
  },
  methods: {
    getCouchById() {
      this.axios
        .get("https://localhost:44328/api/Couches/" + this.id)
        .then((response) => {
          console.log(response);
          this.weight = response.data.weight;
          this.brandName = response.data.brandName;
          this.material = response.data.material;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveCouch() {
      let params = {
        id: this.id,
        weight: this.weight,
        brandName: this.brandName,
        material: this.material
      }
      this.axios
        .put("https://localhost:44328/api/Couches/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/Couches");
        })
        .catch(() => {
          alert("failed");
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>