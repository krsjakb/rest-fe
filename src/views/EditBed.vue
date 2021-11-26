<template>
  <div>
    <b-card :title="'Edit bed with id of ' + id">

        <b-form-input v-model="height" placeholder="Enter Height"></b-form-input>

        <b-form-input v-model="width" placeholder="Enter Width"></b-form-input>

        <b-form-input v-model="length" placeholder="Enter Length"></b-form-input>

        <b-form-input v-model="brandName" placeholder="Enter Brand Name"></b-form-input>

      <b-button variant="success" @click="saveBed">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      width: "",
      length: "",
      height: "",
      brandName: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBedById();
  },
  methods: {
    getBedById() {
      this.axios
        .get("https://localhost:44328/api/Beds/" + this.id)
        .then((response) => {
          console.log(response);
          this.width = response.data.width;
          this.brandName = response.data.brandName;
          this.length = response.data.length;
          this.height = response.data.height;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBed() {
      let params = {
        id: this.id,
        width: this.width,
        brandName: this.brandName,
        height: this.height,
        length: this.length
      }
      this.axios
        .put("https://localhost:44328/api/Beds/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/Beds");
        })
        .catch((error) => {
            console.log(error)
          alert("failed");
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>