<template>
  <div>
    <b-card :title="'Edit Group with id of ' + id">
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
      id: null,
      name: "",
       UserId: "",
      ProfessorId: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getGroupById();
  },
  methods: {
    getGroupById() {
      this.axios
        .get("https://localhost:5001/api/Group/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.UserId = response.data.userId;
          this.ProfessorId = response.data.professorId;
        })
        .catch(() => {
          alert("failed2");
        });
    },
    saveGroup() {
      let params = {
        id: this.id,
        name: this.name,
        UserId: this.UserId,
        ProfessorId: this.ProfessorId,
      }

      this.axios
        .put("https://localhost:5001/api/Group/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/groups");
        })
        .catch(() => {
          alert("failed3");
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>