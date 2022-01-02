<template>
    <div>
        <b-card title="Add pizza">
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
      name: "",
      components: "",
    };
  },
  methods: {
    savePizza() {
      let params = {
        name: this.name,
        components: this.components,
      }

      this.axios
        .post("https://localhost:5001/api/Pizzas", params)
        .then(() => {
          alert("success");
            this.$router.push("pizzas");
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