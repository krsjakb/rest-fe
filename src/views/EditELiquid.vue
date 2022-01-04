<template>
  <div>
    <b-card :title="'Edit ELiquid with id: ' + id">
      <b-form-input v-model="fName" placeholder="Enter fantasy name"></b-form-input>

      <b-form-input v-model="str" placeholder="Enter strength"></b-form-input>

      <b-button variant="success" @click="saveELiquid">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      fName: "",
      str: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getEliquidById();
  },
  methods: {
    getEliquidById() {
      this.axios
        .get("https://localhost:5001/api/ELiquids/" + this.id)
        .then((response) => {
          console.log(response);
          this.fName = response.data.fName;
          this.str = response.data.str;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBrand() {
      let params = {
        id: this.id,
        fName: this.fName,
        str: this.str
      }

      this.axios
        .put("https://localhost:5001/api/ELiquids/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/ELiquids");
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