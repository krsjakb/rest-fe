<template>
  <div>
    <a href="AddGroup">New Group</a>
    <b-list-group v-for="group in groups" :key="group.id">
      <b-list-group-item>
        Name: {{ group.name }}
        <small class="text-secondary">
          ProfessorId: {{ group.ProfessorId }}
        </small>
        <small class="text-secondary"> UserID: {{ group.UserId }} </small>
        <b-button variant="info" @click="editGroup(group.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteGroup(group.id)">
          Delete
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios.get("https://localhost:5001/api/Group").then((response) => {
        this.groups = response.data;
      });
    },
    editGroup(id) {
      this.$router.push("EditGroup/" + id);
    },
    deleteGroup(id) {
      this.axios
        .delete("https://localhost:5001/api/Group/" + id)
        .then(() => {
          this.updateList();
          alert("success");
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