<template>
  <div>
    <a href="addusbconnector">New USBConnector</a>

    <b-table striped hover :items="USBConnectors">

    </b-table>
    

    <!--<b-button variant="info" @click="editUSBConnector(USBConnector.id)">Edit</b-button>
    <b-button variant="danger" @click="deleteUSBConnector(USBConnector.id)">Delete</b-button>-->
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