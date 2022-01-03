<template>
  <div>
    <a href="addRandom">New Random</a>
    <b-list-group v-for="Random in Randoms" :key="Random.id">
      <b-list-group-item>
        Type: {{ Random.type }}
        <small class="text-secondary"> Id: {{ Random.id }} </small>
        <small class="text-secondary"> Name: {{ Random.name }} </small>
        <small class="text-secondary"> type: {{ Random.type }} </small>
        <b-button variant="info" @click="editRandom(Random.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteRandom(Random.id)">
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
      Randoms: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios.get("https://localhost:5001/api/RandomModels").then((response) => {
        this.Randoms = response.data;
      });
    },
    editRandom(id) {
      this.$router.push("editRandom/" + id);
    },
    deleteRandom(id) {
      this.axios
        .delete("https://localhost:5001/api/RandomModels/" + id)
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

<style lang="scss" scoped></style>
