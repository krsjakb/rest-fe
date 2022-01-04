<template>
    <div>
        <b-card :title="'Edit character with id of ' + id">
            <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

            <b-form-input v-model="faction" placeholder="Enter faction"></b-form-input>

            <b-form-input v-model="planet" placeholder="Enter planet"></b-form-input>

            <b-button variant="success" @click="saveCharacter">Save</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      faction: "",
      place: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCharById();
  },
  methods: {
    getCharById() {
      this.axios
        .get("https://localhost:5001/api/SWChars/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.faction = response.data.faction;
          this.planet = response.data.planet;

        })
        .catch(() => {
          alert("failed");
        });
    },
    saveCharacter() {
      let params = {
        id: this.id,
        name: this.name,
        origin: this.faction,
        planet: this.planet,
      }

      this.axios
        .put("https://localhost:5001/api/SWChars/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/SWchars");
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