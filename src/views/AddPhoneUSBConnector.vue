<template>
  <div>
    <b-card title="Add Phone-USBConnector">
      <b-form-input v-model="id_phone" placeholder="Enter phone id"></b-form-input>
      <b-form-input v-model="id_USBConnector" placeholder="Enter USB connector id"></b-form-input>

      <b-button variant="success" @click="saveUSBConnector">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id_phone: "",
      id_USBConnector: ""
    };
  },
  methods: {
    saveUSBConnector() {
      let params = {
        id_phone: this.id_phone,
        id_USBConnector: this.id_USBConnector
      }

      this.axios
        .post("https://localhost:5001/api/PhoneUSBConnectors", params)
        .then(() => {
          alert("success");
          this.$router.push("PhoneUSBConnectors");
        })
        .catch(() => { alert("failed"); });
    }
  },
};
</script>