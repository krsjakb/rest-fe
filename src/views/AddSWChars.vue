<template>
  <div>
    <b-card title="Add Star Wars Character">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

      <b-form-input
        v-model="faction"
        placeholder="Enter faction"
      ></b-form-input>

      <b-form-input v-model="planet" placeholder="Enter planet"></b-form-input>

      <b-button variant="success" @click="saveCharacter">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      faction: "",
      planet: "",
    };
  },
  methods: {
    saveCharacter() {
      let params = {
        name: this.name,
        faction: this.faction,
        planet: this.planet,
      };

      this.axios
        .post("https://localhost:5001/api/SWChars", params)
        .then(() => {
          alert("success");
          this.$router.push("character");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
