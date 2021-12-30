<template>
  <div>
    <a href="addScrew">New screw</a>
    <b-list-group v-for="screw in screws" :key="screw.id">
      <b-list-group-item>
        Name: {{ screw.name }}
        <br />
        Material: {{ screw.material }}
        <br />
        HeadType: {{ screw.headType }}
        <br />
        Length: {{ screw.length }}
        <br />
        PackageSize: {{ screw.packageSize }}
        <br />
        Weight: {{ screw.weight }}
        <br />
        <b-button variant="info" @click="editScrew(screw.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteScrew(screw.id)">
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
      screws: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/ScrewModel")
        .then((response) => {
          this.screws = response.data;
        });
    },
    editScrew(id) {
      this.$router.push("editScrew/" + id);
    },
    deleteScrew(id) {
      this.axios
        .delete("https://localhost:5001/api/ScrewModel/" + id)
        .then(() => {
          this.updateList();
          alert("Sikeres törlés!");
        })
        .catch((err) => {
          alert("Hiba történt!");
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>