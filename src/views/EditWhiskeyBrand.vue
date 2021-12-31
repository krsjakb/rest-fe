<template>
  <div>
    <b-card :title="'Edit brand with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="origin" placeholder="Enter origin"></b-form-input>

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
      origin: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBradById();
  },
  methods: {
    getBradById() {
      this.axios
        .get("https://localhost:5001/api/WhiskeyBrands/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.origin = response.data.origin;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBrand() {
      let params = {
        id: this.id,
        name: this.name,
        origin: this.origin
      }

      this.axios
        .put("https://localhost:5001/api/WhiskeyBrands/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/whiskeyBrands");
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