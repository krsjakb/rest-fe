<template>
  <div>
    <b-card :title="'Edit pencil with id of ' + id">
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
      id: null,
      color: "",
      length: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getPencilById();
  },
  methods: {
    getPencilById() {
      this.axios
        .get("https://localhost:5001/api/PencilModel/" + this.id)
        .then((response) => {
          console.log(response);
          this.color = response.data.color;
          this.length = response.data.length;
        })
        .catch(() => {
          alert("failed");
        });
    },
    savePencil() {
      let params = {
        id: this.id,
        color: this.color,
        length: this.length,
      };
      this.axios
        .put("https://localhost:5001/api/PencilModel/" + this.id, params)
        .then(() => {
          alert("success");
          this.$router.push("/Pencils");
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