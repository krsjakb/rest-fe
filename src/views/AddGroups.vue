<template>
  <div>
    <b-card title="AddGroup">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="UserId" placeholder="Enter UserId"></b-form-input>
      <b-form-input v-model="ProfessorId" placeholder="Enter ProfessorId"></b-form-input>
      <b-button variant="success" @click="saveGroup">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      UserId: "",
      ProfessorId: "",
    };
  },
  methods: {
    saveGroup() {
      let params = {
        name: this.name,
        UserId: this.UserId,
        ProfessorId: this.ProfessorId,
      }

      this.axios
        .post("https://localhost:5001/api/Group", params)
        .then(() => {
          alert("success");
          this.$router.push("groups");
        })
        .catch(() => {
          alert("failed1");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>