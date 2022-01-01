<template>
  <div>
    <a href="addPhoneUSBConnector">New PhoneUSBConnector</a>
    <b-row id="header">
      <b-col>Id</b-col>
      <b-col>Phone id</b-col>
      <b-col>USB connector id</b-col>
      <b-col></b-col>
    </b-row>
    <hr>
    <div id="body" v-for="PhoneUSBConnector in PhoneUSBConnectors" :key="PhoneUSBConnector.id" class="text-xs-center">
      <b-row>
        <b-col>{{ PhoneUSBConnector.id }}</b-col>
        <b-col>{{ PhoneUSBConnector.id_phone }}</b-col>
        <b-col>{{ PhoneUSBConnector.id_USBConnector }}</b-col>
        <b-col>
          <b-button v-b-tooltip.hover title="Edit" variant="light" @click="editPhoneUSBConnector(PhoneUSBConnector.id)">
            <b-icon icon="pencil-fill" variant="primary"></b-icon>
          </b-button>
          <b-button v-b-tooltip.hover title="Delete" variant="light" @click="deletePhoneUSBConnector(PhoneUSBConnector.id)">
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
      PhoneUSBConnectors: []
    }
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList(){
      this.axios
        .get("https://localhost:5001/api/PhoneUSBConnectors")
        .then( (response) => {
          this.PhoneUSBConnectors = response.data;
        });
    },
    editPhoneUSBConnector( id ) { 
      this.$router.push("editPhoneUSBConnector/" + id);
    },
    deletePhoneUSBConnector( id ){
      this.axios
        .delete("https://localhost:5001/api/PhoneUSBConnectors/" + id)
        .then(()=>{
          alert("success");
          this.updateList();
        })
        .catch(() => {
          alert("failed");
        });
    }
  },
};
</script>