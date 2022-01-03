<template>
    <div>
        <b-card title="Add new hair dryer">
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
      type: "",
      manufacturer: "",
    };
  },
  methods: {
    saveHairDryer() {
      let params = {
        type: this.type,
        manufacturer: this.manufacturer
      }
      this.axios
        .post("https://localhost:5001/api/HairDryers", params)
        .then(() => {
          alert("success");
          this.$router.push("HairDryer");
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