<template>
  <div>
    <b-card title="Add Pencil">
      <b-form-input v-model="color" placeholder="Enter color"></b-form-input>

      <b-form-input v-model="length" placeholder="Enter length"></b-form-input>

      <b-button variant="success" @click="savePencil">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "",
      length: "",
    };
  },
  methods: {
    savePencil() {
      let params = {
        color: this.color,
        length: this.length,
      };
      this.axios
        .post("https://localhost:5001/api/PencilModel", params)
        .then(() => {
          alert("success");
          this.$router.push("Pencils");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style> 