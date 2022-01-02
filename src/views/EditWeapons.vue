<template>
  <div>
    <b-card :title="'Edit Weapon with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input v-model="price" placeholder="Enter price"></b-form-input>

      <b-button variant="success" @click="saveWeapon">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      price: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getWeaponById();
  },
  methods: {
    getWeaponById() {
      this.axios
        .get("https://localhost:5001/api/Weapons/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.price = response.data.price;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveWeapon() {
      let params = {
        id: this.id,
        name: this.name,
        price: this.price
      }

      this.axios
        .put("https://localhost:5001/api/Weapons/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/Weapons");
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