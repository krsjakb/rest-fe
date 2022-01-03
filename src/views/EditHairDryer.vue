<template>
    <div>
        <b-card :title="'Edit hair dryer with id of ' + id">
            <b-form-input v-model="type" placeholder="Enter type"></b-form-input>

            <b-form-input v-model="manufacturer" placeholder="Enter manufacturer"></b-form-input>

            <b-button variant="success" @click="saveHairDryer">Save</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      type: "",
      manufacturer: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getHairDryerById();
  },
  methods: {
    getHairDryerById() {
      this.axios
        .get("https://localhost:5001/api/HairDryers/" + this.id)
        .then((response) => {
          console.log(response);
          this.type = response.data.type;
          this.manufacturer = response.data.manufacturer;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveBook() {
      let params = {
        id: this.id,
        type: this.type,
        manufacturer: this.manufacturer
      }
      this.axios
        .put("https://localhost:5001/api/HairDryers/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/HairDryer");
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