<template>
  <div>
    <b-card :title="'Edit hammer with id of ' + id">
      <b-form-input v-model="weight" placeholder="Enter weight"></b-form-input>

      <b-form-input v-model="brandName" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="typeName" placeholder="Enter type"></b-form-input>

      <b-button variant="success" @click="saveHammer">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      weight: 0,
      brandName: "",
      typeName: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getHammerById();
  },
  methods: {
    getHammerById() {
      this.axios
        .get("https://localhost:5001/api/Hammers/" + this.id)
        .then((response) => {
          console.log(response);
          this.weight = response.data.weight;
          this.brandName = response.data.brandName;
          this.typeName = response.data.typeName;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveHammer() {
      let params = {
        id: this.id,
        weight: this.weight,
        brandName: this.brandName,
        typeName: this.typeName
      }

      this.axios
        .put("https://localhost:5001/api/Hammers/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/Hammers");
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