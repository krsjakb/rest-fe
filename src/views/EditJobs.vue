<template>
  <div>
    <b-card :title="'Edit job with id of ' + id">
      <b-form-input v-model="JobName" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="JobText" placeholder="Enter text"></b-form-input>
      
      <b-form-input v-model="JobPrice" type="number" placeholder="Enter price"></b-form-input>
      <b-button variant="success" @click="saveJob">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      JobName: "",
      JobText: "",
      JobPrice: 0,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getJobById();
  },
  methods: {
    getJobById() {
      this.axios
        .get("https://localhost:5001/api/Jobs/" + this.id)
        .then((response) => {
          console.log(response);
          this.JobName = response.data.JobName;
          this.JobText = response.data.JobText;
          this.JobPrice = response.data.JobPrice;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveJob() {
      let params = {
        id: this.id,
        JobName: this.JobName,
        JobText: this.JobText,
        JobPrice: this.JobPrice

      }

      this.axios
        .put("https://localhost:5001/api/Jobs/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/Jobs");
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