<template>
  <div>
    <b-card :title="'Edit screw with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter Name"></b-form-input>

      <b-form-input
        v-model="material"
        placeholder="Enter Material"
      ></b-form-input>

      <b-form-input
        v-model="headType"
        placeholder="Enter HeadType"
      ></b-form-input>

      <b-form-input v-model="length" placeholder="Enter Length"></b-form-input>

      <b-form-input
        v-model="packageSize"
        placeholder="Enter PackageSize"
      ></b-form-input>

      <b-form-input v-model="weight" placeholder="Enter Weight"></b-form-input>

      <b-button variant="success" @click="saveScrew">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      material: "",
      headType: "",
      length: "",
      packageSize: "",
      weight: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getScrewById();
  },
  methods: {
    getScrewById() {
      this.axios
        .get("https://localhost:5001/api/ScrewModel/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.material = response.data.material;
          this.headType = response.data.headType;
          this.length = response.data.length;
          this.packageSize = response.data.packageSize;
          this.weight = response.data.weight;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveScrew() {
      let params = {
        id: this.id,
        name: this.name,
        material: this.material,
        headType: this.headType,
        length: this.length,
        packageSize: this.packageSize,
        weight: this.weight,
      };
      this.axios
        .put("https://localhost:5001/api/ScrewModel/" + this.id, params)
        .then(() => {
          alert("success");
          this.$router.push("/Screws");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>