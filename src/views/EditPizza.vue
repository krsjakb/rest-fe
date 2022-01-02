<template>
    <div>
        <b-card :title="'Edit pizza with id of ' + id">
            <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

            <b-form-input v-model="components" placeholder="Enter components"></b-form-input>

            <b-button variant="success" @click="savePizza">Save</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
        id: null,
        name: "",
        components: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getPizzaById();
  },
  methods: {
      getPizzaById() {
      this.axios
          .get("https://localhost:5001/api/Pizzas/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.components = response.data.components;
        })
        .catch(() => {
          alert("failed");
        });
    },
      savePizza() {
      let params = {
        id: this.id,
        name: this.name,
        components: this.components,
      }

      this.axios
        .put("https://localhost:5001/api/Pizzas/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/pizzas");
        })
        .catch(() => {
          alert("failed");
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>