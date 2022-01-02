<template>
  <div>
    <a href="addBeer">New beer</a>
    <b-list-group v-for="beer in beers" :key="beer.id">
      <b-list-group-item>
        {{ beer.brand }}
        <small class="text-secondary">, Type: {{ beer.type }} </small>
        <small class="text-secondary">, Name: {{ beer.name }} </small>
        <small class="text-secondary">
          , Alcohol: {{ beer.alcoholPercentage }} %</small
        >
        <small class="text-secondary"> , Rating: {{ beer.rating }} </small>
        <b-button variant="info" @click="editBeer(beer.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBeer(beer.id)">
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
      beers: []
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios.get("https://localhost:5001/api/Beers").then(response => {
        this.beers = response.data;
      });
    },
    editBeer(id) {
      this.$router.push("editBeer/" + id);
    },
    deleteBeer(id) {
      this.axios
        .delete("https://localhost:5001/api/Beers/" + id)
        .then(() => {
          this.updateList();
          alert("success");
        })
        .catch(() => {
          alert("failed");
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
