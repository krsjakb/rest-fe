<template>
  <div>
    <a href="addChair">New chair</a>
    <b-list-group v-for="chair in chairs" :key="chair.id">
      <b-list-group-item>
        Material: {{ chair.material }}
        <br />
        Legs: {{ chair.legs }}
        <br />
        <b-button variant="info" @click="editChair(chair.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteChair(chair.id)">
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
      chairs: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/ChairModel")
        .then((response) => {
          this.chairs = response.data;
        });
    },
    editChair(id) {
      this.$router.push("editChair/" + id);
    },
    deleteChair(id) {
      this.axios
        .delete("https://localhost:5001/api/ChairModel/" + id)
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