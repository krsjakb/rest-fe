<template>
  <div>
    <a href="AddHammer">New hammer</a>
    <b-list-group v-for="Hammer in Hammers" :key="Hammer.id">
      <b-list-group-item>
        brandName: {{ Hammer.brandName }}
        <small class="text-secondary"> weight: {{ Hammer.weight }} </small>
        <small class="text-secondary"> typeName: {{ Hammer.typeName }} </small>
        <b-button variant="info" @click="editHammer(Hammer.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteHammer(Hammer.id)">
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
      Hammers: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/Hammers")
        .then((response) => {
          this.Hammers = response.data;
        });
    },
    editHammer(id) {
      this.$router.push("editHammer/" + id)
    },
    deleteHammer(id) {
      this.axios
        .delete("https://localhost:5001/api/Hammers/" + id)
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