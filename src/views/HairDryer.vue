<template>
    <div>
        <a href="addHairDryer">New Hair Dryer</a>
        <b-list-group v-for="HairDryer in HairDryers" :key="HairDryer.id">
            <b-list-group-item>
                Type: {{ HairDryer.title }}
                <small class="text-secondary"> Manufacturer: {{ HairDryer.manufacturer }} </small>
                <b-button variant="info" @click="editHairDryer(HairDryer.id)" class="mr-2">
                    Edit
                </b-button>
                <b-button variant="danger" @click="deleteHairDryer(HairDryer.id)">
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
      HairDryer: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/HairDryers")
        .then((response) => {
          this.books = response.data;
        });
    },
    editBook(id) {
      this.$router.push("editHairDryer/" + id)
    },
    deleteBook(id) {
      this.axios
        .delete("https://localhost:5001/api/HairDryers/" + id)
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