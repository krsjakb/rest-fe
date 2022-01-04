<template>
  <div>
    <a href="addSWChars">New Character</a>

    <b-list-group v-for="SWchars in SWchars" :key="SWchars.id">
      <b-list-group-item>
        Name: {{ SWchars.name }}
        <small class="text-secondary"> Faction: {{ SWchars.faction }} </small>
        <small class="text-secondary"> Planet: {{ SWchars.planet }} </small>
        <b-button variant="info" @click="editChar(SWchars.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteChar(SWchars.id)">
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
      SWchars: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/SWChars")
        .then((response) => {
          this.SWchars = response.data;
        });
    },
    editChar(id) {
      this.$router.push("editChar/" + id)
    },
    deleteChar(id) {
      this.axios
        .delete("https://localhost:5001/api/SWChars/" + id)
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