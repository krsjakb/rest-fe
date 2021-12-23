<template>
  <div>
    <b-card :title="'Edit Witch with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter the Witch's name"></b-form-input>

      <b-form-input v-model="house" placeholder="Enter the Witch's Hogwarts House"></b-form-input>
      
      <b-form-input v-model="patronus" placeholder="Enter the Witch's patronus"></b-form-input>

      <b-button variant="success" @click="saveWitch">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      house: "",
      patronus: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getWitchById();
  },
  methods: {
    getWitchById() {
      this.axios
        .get("https://localhost:5001/api/Witches/" + this.id)
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.house = response.data.house;
          this.patronus = response.data.patronus;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveWitch() {
      let params = {
        id: this.id,
        name: this.name,
        house: this.house,
        patronus: this.patronus
      }

      this.axios
        .put("https://localhost:5001/api/Witches/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/Witches");
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