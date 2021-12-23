<template>
  <div>
    <a href="addWitch">New Witch</a>
    <b-list-group v-for="witches in witches" :key="witches.id">
      <b-list-group-item>
        Name: {{ witches.name }}
        <small class="text-secondary"> Hogwarts house: {{ witches.house }} </small>
        <small class="text-secondary"> patronus: {{ witches.patronus }} </small>
        <b-button variant="info" @click="editWitch(witches.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteWitch(witches.id)">
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
      witches: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/witches")
        .then((response) => {
          this.witches = response.data;
        });
    },
    editWitch(id) {
      this.$router.push("editWitch/" + id)
    },
    deleteWitch(id) {
      this.axios
        .delete("https://localhost:5001/api/witches/" + id)
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