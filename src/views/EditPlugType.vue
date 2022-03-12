<template>
  <div>
    <b-card :title="'Edit brand with id of ' + id">
      
      <b-form-input v-model="name" placeholder="Enter plug type"></b-form-input>

      <b-button v-b-tooltip.hover title="Save" variant="light" @click="savePlugType">
        <b-icon icon="cloud-upload-fill" scale="1.5" variant="primary"></b-icon>
      </b-button>

    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: null
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getPlugTypeById();
  },
  methods: {
    getPlugTypeById(){
      this.axios
        .get("https://localhost:5001/api/PlugTypes/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
        })
        .catch(() => {
          alert("not found");
        });
    },
    savePlugType() {
      let params = {
        id: this.id,
        name: this.name
      }

      this.axios
        .put("https://localhost:5001/api/PlugTypes/" + this.id, params)
        .then(() => {
          alert("success");
          this.$router.push("/PlugTypes");
        })
        .catch(() => { alert("failed"); });
    }
  }
}
</script>