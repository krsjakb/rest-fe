<template>
  <div>
    <b-card :title="'Edit brand with id of ' + id">
      
      <b-form-input v-model="id_material" placeholder="Enter material id"></b-form-input>
      <b-form-input v-model="id_production" placeholder="Enter production id"></b-form-input>
      <b-form-input v-model="amperage" placeholder="Enter amperage (mA)"></b-form-input>
      <b-form-input v-model="voltage" placeholder="Enter voltage (mV)"></b-form-input>

      <b-button variant="success" @click="saveUSBConnector">Save</b-button>

    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      id_material: "",
      id_production: "",
      amperage: null,
      voltage: null,
      plugType: null
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getUSBConnectorById();
  },
  methods: {
    getUSBConnectorById() {
      this.axios
        .get("https://localhost:5001/api/usbconnectors/" + this.id)
        .then((response) => {
          console.log(response);
          this.id_material = response.data.id_material;
          this.id_production = response.data.id_production;
          this.amperage = response.data.amperage;
          this.voltage = response.data.voltage;
          this.plugType = response.data.plugType;
        })
        .catch(() => {
          alert("not found");
        });
    },
    saveUSBConnector() {
      let params = {
        id: this.id,
        id_Material: this.id_material,
        id_Production: this.id_production,
        amperage: this.amperage,
        voltage: this.voltage,
        plugType: this.plugType
      }

      this.axios
        .put("https://localhost:5001/api/usbconnectors/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/usbconnectors");
        })
        .catch(() => {
          alert("failed");
        });
    }
  }
};
</script>