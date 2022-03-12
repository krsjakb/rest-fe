<template>
  <div>
    <b-card :title="'Edit Phone-USBConnector with id of ' + id">
      
      <b-form-input v-model="id_phone" placeholder="Enter phone id"></b-form-input>
      <b-form-input v-model="id_USBConnector" placeholder="Enter USB connector id"></b-form-input>

      <b-button variant="success" @click="savePhoneUSBConnector">Save</b-button>

    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      id_phone: "",
      id_USBConnector: ""
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getUSBConnectorById();
  },
  methods: {
    getPhoneUSBConnectorById() {
      this.axios
        .get("https://localhost:5001/api/PhoneUSBConnectors/" + this.id)
        .then((response) => {
          console.log(response);
          this.id_phone = response.data.id_phone;
          this.id_USBConnector = response.data.id_USBConnector;
        })
        .catch(() => {
          alert("not found");
        });
    },
    savePhoneUSBConnector() {
      let params = {
        id: this.id,
        id_phone: this.id_phone,
        id_USBConnector: this.id_USBConnector
      }

      this.axios
        .put("https://localhost:5001/api/PhoneUSBConnectors/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/PhoneUSBConnectors");
        })
        .catch(() => {
          alert("failed");
        });
    }
  }
};
</script>