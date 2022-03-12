<template>
  <div>
    <b-card title="Add plug type">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

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
      name: ""
    }
  },
  methods: {
    savePlugType() {
      let params = {
        name: this.name
      }

      this.axios
        .post("https://localhost:5001/api/PlugTypes", params)
        .then(() => {
          alert("success");
          this.$router.push("PlugTypes");
        })
        .catch(() => { alert("failed"); });
    }
  }
}
</script>