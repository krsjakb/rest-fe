<template>
  <div>
    <a href="addCouch">New couch</a>
    <b-list-group v-for="couch in couches" :key="couch.id">
      <b-list-group-item>
        Brand Name: {{ couch.brandName }}
        <br/>
        Weight: {{couch.weight}}
        <br/>
        Material: {{couch.material}}
        <br/>
        <b-button variant="info" @click="editCouch(couch.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteCouch(couch.id)">
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
      couches: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:44328/api/Couches")
        .then((response) => {
          this.couches = response.data;
        });
    },
    editCouch(id) {
      this.$router.push("editCouch/" + id)
    },
    deleteCouch(id) {
      this.axios
        .delete("https://localhost:44328/api/Couches/" + id)
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