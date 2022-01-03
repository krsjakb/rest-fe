<template>
  <div>
    <b-card :title="'Edit Random with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="type" placeholder="Enter type"></b-form-input>

      <b-button variant="success" @click="saveRandom">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      type: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getRandomById();
  },
  methods: {
    getRandomById() {
      this.axios
        .get("https://localhost:5001/api/RandomModels/" + this.id)
        .then((response) => {
          console.log(response);
          this.id = response.data.id;
          this.name = response.data.name;
          this.type = response.data.type;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveRandom() {
      let params = {
        id: this.id,
        name: this.name,
        type: this.type
      };
      this.axios
        .put("https://localhost:5001/api/RandomModels/" + this.id, params)
        .then(() => {
          alert("success");
          this.$router.push("/RandomModels");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
