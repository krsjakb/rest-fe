<template>
  <div>
    <b-card title="Add new Job">
      <b-form-input v-model="title" placeholder="Title"></b-form-input>
      <b-form-input v-model="about" placeholder="About"></b-form-input>
      <b-form-input
        v-model="salary"
        placeholder="Salary"
        type="number"
      ></b-form-input>
      <b-button variant="success" @click="saveJob">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      about: "",
      salary: "",
    };
  },
  methods: {
    saveJob() {
      let params = {
        title: this.title,
        about: this.about,
        salary: this.salary,
      };
      this.axios
        .post("https://localhost:5001/api/Jobs", params)
        .then(() => {
          alert("success");
          this.$router.push("jobs");
        })
        .catch((e) => {
          alert(e);
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
