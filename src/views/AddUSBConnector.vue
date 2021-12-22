<template>
  <div>
    <b-card title="Add USBConnector">
      <b-form-input v-model="id_material" placeholder="Enter material id"></b-form-input>
      <b-form-input v-model="id_production" placeholder="Enter production id"></b-form-input>
      <b-form-input v-model="amperage" placeholder="Enter amperage (mA)"></b-form-input>
      <b-form-input v-model="voltage" placeholder="Enter voltage (mV)"></b-form-input>
      
      <select v-model="plugType">
        <option disabled value="" selected>Please select a plug type</option>
        <option value=0>Micro USB</option>
        <option value=1>USB Type-C</option>
        <option value=2>Lightning</option>
      </select>

      <b-button v-b-tooltip.hover title="Save" variant="light" @click="saveUSBConnector">
        <b-icon icon="cloud-upload-fill" scale="1.5" variant="primary"></b-icon>
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id_material: "",
      id_production: "",
      amperage: null,
      voltage: null,
      plugType: null
    };
  },
  methods: {
    saveUSBConnector() {
      let params = {
        id_Material: this.id_material,
        id_Production: this.id_production,
        amperage: this.amperage,
        voltage: this.voltage,
        plugType: this.plugType
      }

      this.axios
        .post("https://localhost:5001/api/usbconnectors", params)
        .then(() => {
          alert("success");
          this.$router.push("usbconnectors");
        })
        .catch(() => { alert("failed"); });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>