<template>
  <div>
    <a href="addZoo">New zoo</a>
    <b-list-group v-for="zoo in zoos" :key="zoo.id">
      <b-list-group-item>
        Name: {{ zoo.name }}
        <small class="text-secondary"> Location: {{ zoo.location }} </small>
        <small class="text-secondary"> Sum of Animals: {{ zoo.animalsum }} </small>
        <b-button variant="info" @click="editZoo(zoo.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteZoo(zoo.id)">
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
      zoos: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/zoos")
        .then((response) => {
          this.zoos = response.data;
        });
    },
    editZoo(id) {
      this.$router.push("editZoo/" + id)
    },
    deleteZoo(id) {
      this.axios
        .delete("https://localhost:5001/api/zoos/" + id)
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