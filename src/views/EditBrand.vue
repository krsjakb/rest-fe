<template>
  <div>
    <b-card :title="'Edit model with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="health" placeholder="Enter health"></b-form-input>

      <b-button variant="success" @click="saveBrand">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      health: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBradById();
  },
  methods: {
    getBradById() {
      this.axios
        .get("https://localhost:5001/api/ChampModels/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.health = response.data.health;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBrand() {
      let params = {
        id: this.id,
        name: this.name,
        health: this.health
      }

      this.axios
        .put("https://localhost:5001/api/ChampModels/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/carBrands");
        })
        .catch(() => {
          alert("failed");
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
