<template>
  <div>
    <a href="AddMonitorBrand">New brand</a>
    <b-list-group v-for="monitorBrand in MonitorBrand" :key="monitorBrand.id">
      <b-list-group-item>
        Name: {{ monitorBrand.name }}
        <small class="text-secondary"> Type: {{ monitorBrand.type }} </small>
        <small class="text-secondary"> Place: {{ monitorBrand.place }} </small>
        <b-button variant="info" @click="editBrand(monitorBrand.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBrand(monitorBrand.id)">
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
      MonitorBrand: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/MonitorBrand")
        .then((response) => {
          this.MonitorBrand = response.data;
        });
    },
    editBrand(id) {
      this.$router.push("editMonitorBrand/" + id)
    },
    deleteBrand(id) {
      this.axios
        .delete("https://localhost:5001/api/MonitorBrand/" + id)
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