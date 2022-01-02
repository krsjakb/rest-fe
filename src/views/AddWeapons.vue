<template>
  <div>
    <b-card title="Add Weapon">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="price" placeholder="Enter Price"></b-form-input>

      <b-button variant="success" @click="saveWeapon">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: "",
    };
  },
  methods: {
    saveWeapon() {
      let params = {
        name: this.name,
        price: this.price
      }

      this.axios
        .post("https://localhost:5001/api/Weapons", params)
        .then(() => {
          alert("success");
          this.$router.push("Weapons");
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