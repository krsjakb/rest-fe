<template>
  <div>
    <b-card title="Add USBConnector">
      <b-form-input v-model="id_material" placeholder="Enter material id"></b-form-input>
      <b-form-input v-model="id_production" placeholder="Enter production id"></b-form-input>
      <b-form-input v-model="amperage" placeholder="Enter amperage (mA)"></b-form-input>
      <b-form-input v-model="voltage" placeholder="Enter voltage (mV)"></b-form-input>
      <b-form-input v-model="id_PlugType" placeholder="Enter plug type id"></b-form-input>

      <b-button variant="success" @click="saveUSBConnector">Save</b-button>
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
      id_PlugType: null
    };
  },
  methods: {
    saveUSBConnector() {
      let params = {
        id_Material: this.id_material,
        id_Production: this.id_production,
        amperage: this.amperage,
        voltage: this.voltage,
        id_PlugType: this.id_PlugType
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