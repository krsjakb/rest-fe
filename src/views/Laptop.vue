<template>
  <div>
    <a href="addLaptop">New laptop</a>
    <b-list-group v-for="laptop in laptops" :key="laptop.id">
      <b-list-group-item>
        Name: {{ laptop.serialName }}
        <small class="text-secondary"> Origin: {{ laptop.brand }} </small>
        <b-button variant="info" @click="editLaptop(laptop.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteLaptop(laptop.id)">
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
      laptops: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/Laptop")
        .then((response) => {
          this.laptop = response.data;
        });
    },
    editLaptop(id) {
      this.$router.push("editLaptop/" + id)
    },
    deleteLaptop(id) {
      this.axios
        .delete("https://localhost:5001/api/Laptop/" + id)
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