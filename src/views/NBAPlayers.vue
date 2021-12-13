<template>
  <div>
    <a href="addNBAPlayer">Add new NBA Player</a>
    <b-list-group v-for="nbaPlayers in nbaPlayers" :key="nbaPlayers.id">
      <b-list-group-item>
        Name: {{ nbaPlayers.name }}
        <small class="text-secondary"> Jersey Number: {{ nbaPlayers.jerseyNumber }} </small>
        <small class="text-secondary"> Age: {{ nbaPlayers.age }} </small>
        <b-button variant="info" @click="editBrand(nbaPlayers.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBrand(nbaPlayers.id)">
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
      nbaPlayers: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/NBAPlayer")
        .then((response) => {
          this.nbaPlayers = response.data;
        });
    },
    editBrand(id) {
      this.$router.push("editPlayer/" + id)
    },
    deleteBrand(id) {
      this.axios
        .delete("https://localhost:5001/api/NBAPlayer/" + id)
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