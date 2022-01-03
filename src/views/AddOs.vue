<template>
  <div>
    <b-card title="Add Operating System">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input type="date" v-model="releaseDate" placeholder="Enter Release Date"></b-form-input>

      <b-button variant="success" @click="saveOs">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    let d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return {
      name: "",
      releaseDate: [year, month, day].join('-'),
    };
  },
  methods: {
    saveOs() {
      let params = {
        name: this.name,
        releaseDate: this.releaseDate
      }

      this.axios
        .post("https://localhost:5001/api/OS", params)
        .then(() => {
          alert("success");
          this.$router.push("OS");
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