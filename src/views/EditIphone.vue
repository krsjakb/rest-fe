<template>
  <div>
    <b-card :title="'Edit iPhone with id of ' + id">

        <b-form-input v-model="serialNumber" placeholder="Enter Serial Number"></b-form-input>

        <b-form-input v-model="imei" placeholder="Enter IMEI"></b-form-input>

      <b-button variant="success" @click="saveIphone">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      imei: "",
      serialNumber: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getIphoneById();
  },
  methods: {
    getIphoneById() {
      this.axios
        .get("https://localhost:5001/api/Iphone/" + this.id)
        .then((response) => {
          console.log(response);
          this.serialNumber = response.data.serialNumber;
          this.imei = response.data.imei;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveIphone() {
      let params = {
        id: this.id,
        serialNumber: this.serialNumber,
        imei: this.imei,
      }
      this.axios
        .put("https://localhost:5001/api/Iphone/" + this.id,
        params)
        .then(() => {
          alert("success");
          this.$router.push("/Iphone");
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