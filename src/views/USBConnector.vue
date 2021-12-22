<template>
  <div>
    <a href="addusbconnector">New USBConnector</a>
    <b-row>
      <b-col>Id</b-col>
      <b-col>Material id</b-col>
      <b-col>Production id</b-col>
      <b-col>Amperage</b-col>
      <b-col>Voltage</b-col>
      <b-col>Plug type</b-col>
      <b-col></b-col>
    </b-row>
    <div v-for="USBConnector in USBConnectors" :key="USBConnector.id" class="text-xs-center">
      <b-row>
        <b-col>{{ USBConnector.id }}</b-col>
        <b-col>{{ USBConnector.id_Material }}</b-col>
        <b-col>{{ USBConnector.id_Production }}</b-col>
        <b-col>{{ USBConnector.amperage }}</b-col>
        <b-col>{{ USBConnector.voltage }}</b-col>
        <b-col>{{ USBConnector.plugType }}</b-col>
        <b-col>
          <b-button v-b-tooltip.hover title="Edit" variant="light" @click="editUSBConnector(USBConnector.id)">
            <b-icon icon="pencil-fill" variant="info"></b-icon>
          </b-button>
          <b-button v-b-tooltip.hover title="Delete" variant="light" @click="deleteUSBConnector(USBConnector.id)">
            <b-icon icon="trash" variant="danger"></b-icon>
          </b-button>
        </b-col>
      </b-row>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      USBConnectors: []
    }
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList(){
      this.axios
        .get("https://localhost:5001/api/usbconnectors")
        .then((response) => { this.USBConnectors = response.data } );
    },
    editUSBConnector( id ) { 
      this.$router.push("editusbconnector/" + id);
    },
    deleteUSBConnector( id ){
      this.axios
        .delete("https://localhost:5001/api/usbconnectors" + id)
        .then(()=>{
          this.updateList();
          alert("Success");
        })
        .catch( alert("Failed") );
    }
  },
};
</script>

<style lang="scss" scoped>
</style>