<template>
  <div>
    <b-card :title="'Edit OS with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input type="date" v-model="releaseDate" placeholder="Enter release date"></b-form-input>

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
      releaseDate: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBradById();
  },
  methods: {
    getBradById() {
      this.axios
        .get("https://localhost:5001/api/OS/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.setReleaseDate(response.data.releaseDate);
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBrand() {
      let params = {
        id: this.id,
        name: this.name,
        releaseDate: this.releaseDate
      }

      this.axios
        .put("https://localhost:5001/api/OS/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/Os");
        })
        .catch(() => {
          alert("failed");
        });
    },
    setReleaseDate(data) {
      let stringData = data+"";
      let d = new Date(stringData);
      let month = d.getMonth() + 1 + "";
      let day = d.getDate() + "";
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      this.releaseDate = [d.getFullYear() , month, day].join("-");
    }
  },
};
</script>

<style lang="scss" scoped>
</style>