<template>
  <div>
    <a href="addBed">New bed</a>
    <b-list-group v-for="bed in beds" :key="bed.id">
      <b-list-group-item>
        Brand Name: {{ bed.brandName }}
        <br/>
        Height: {{bed.height}}
        <br/>
        Width: {{bed.width}}
        <br/>
        Length: {{bed.length}}
        <br/>
        <b-button variant="info" @click="editBed(bed.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBed(bed.id)">
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
      beds: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/Beds")
        .then((response) => {
          this.beds = response.data;
        });
    },
    editBed(id) {
      this.$router.push("editBed/" + id)
    },
    deleteBed(id) {
      this.axios
        .delete("https://localhost:5001/api/Beds/" + id)
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