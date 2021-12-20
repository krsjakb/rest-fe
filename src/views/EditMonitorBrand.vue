<template>
  <div>
    <b-card :title="'Edit brand with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="type" placeholder="Enter type"></b-form-input>

      <b-form-input v-model="place" placeholder="Enter place"></b-form-input>

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
      type: "",
      place: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBradById();
  },
  methods: {
    getBradById() {
      this.axios
        .get("https://localhost:5001/api/MonitorBrand/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.type = response.data.type;
          this.place = response.data.place;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBrand() {
      let params = {
        id: this.id,
        name: this.name,
        type: this.type,
        place: this.place
      }

      this.axios
        .put("https://localhost:5001/api/MonitorBrand/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/monitorBrand");
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