<template>
  <div>
    <b-card title="Add iPhone">
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
      serialNumber: "",
      imei: "",
    };
  },
  methods: {
    saveIphone() {
      let params = {
        serialNumber: this.serialNumber,
        imei: this.imei,
      };

      this.axios
        .post("https://localhost:5001/api/Iphone", params)
        .then(() => {
          alert("success");
          this.$router.push("Iphone");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
