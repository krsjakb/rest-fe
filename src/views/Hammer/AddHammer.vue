<template>
  <div>
    <b-card title="Add Hammer">
      <b-form-input v-model="weight" placeholder="Enter weight"></b-form-input>

      <b-form-input v-model="brandName" placeholder="Enter brandName"></b-form-input>

      <b-form-input v-model="typeName" placeholder="Enter typeName"></b-form-input>

      <b-button variant="success" @click="saveHammer">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //id: null,
      weight: "",
      brandName: "",
      typeName: ""
    };
  },
  methods: {
    saveHammer() {
      let params = {
        //id: this.id,
        weight: this.weight,
        brandName: this.brandName,
        typeName: this.typeName
      }

      this.axios
        .post("https://localhost:5001/api/Hammers", params)
        .then(() => {
          alert("success");
          this.$router.push("Hammers");
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