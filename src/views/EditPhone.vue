<template>
  <div>
    <b-card :title="'Edit phone with id of ' + id">
      <b-form-input v-model="price" placeholder="Enter price"></b-form-input>

      <b-form-input v-model="brandName" placeholder="Enter brandName"></b-form-input>
      <b-form-input v-model="typeName" placeholder="Enter typeName"></b-form-input>

      <b-button variant="success" @click="savePhone">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      price: "",
      brandName: "",
      typeName:""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getPhoneById();
  },
  methods: {
    getPhoneById() {
      this.axios
        .get("https://localhost:5001/api/Phones/" + this.id)
        .then((response) => {
          console.log(response);
          this.price = response.data.price;
          this.brandName = response.data.brandName;
          this.typeName = response.data.typeName;
        })
        .catch(() => {
          alert("failed");
        });
    },
    savePhone() {
      let params = {
        id: this.id,
        price: this.price,
        brandName: this.brandName,
        typeName: this.typeName
      }

      this.axios
        .put("https://localhost:5001/api/Phones/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/Phones");
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