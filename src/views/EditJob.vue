<template>
  <div>
    <b-card :title="'Edit job'">
      <b-form-input v-model="title" placeholder=""></b-form-input>
      <b-form-input v-model="about" placeholder="About"></b-form-input>
      <b-form-input v-model="salary" placeholder="Salary"></b-form-input>
      <b-button variant="success" @click="saveJob">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      about: null,
      salary: null,
    };
  },

  created() {
    this.id = this.$route.params.id;
    this.getGiftCardById();
  },
  methods: {
    getGiftCardById() {
      this.axios
        .get("https://localhost:5001/api/Jobs/" + this.id)
        .then((response) => {
          this.title = response.data.title;
          this.about = response.data.about;
          this.salary = response.data.salary;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveJob() {
      let params = {
        id: this.id,
        title: this.title,
        about: this.about,
        salary: this.salary,
      };
      this.axios
        .put("https://localhost:5001/api/Jobs/" + this.id, params)
        .then(() => {
          alert("success");
          this.$router.push("/jobs");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style>
input {
  text-align: center;
}
</style> 
