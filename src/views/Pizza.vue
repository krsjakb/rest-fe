<template>
    <div>
        <a href="addPizza">New pizza</a>
        <b-list-group v-for="pizza in pizzas" :key="pizza.id">
            <b-list-group-item>
                Name: {{ pizza.name }}
                <small class="text-secondary"> Components: {{ pizza.components }} </small>
                <b-button variant="info" @click="editPizza(pizza.id)" class="mr-2">
                    Edit
                </b-button>
                <b-button variant="danger" @click="deletePizza(pizza.id)">
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
      pizzas: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/Pizzas")
        .then((response) => {
          this.pizzas = response.data;
        });
    },
      editPizza(id) {
      this.$router.push("editPizza/" + id)
    },
      deletePizza(id) {
      this.axios
          .delete("https://localhost:5001/api/pizzas/" + id)
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