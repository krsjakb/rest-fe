<template>
  <div>
    <b-card :title="'Edit brand with id of ' + id">
      <b-form-input v-model="type" placeholder="Enter type"></b-form-input>

      <b-form-input v-model="price" placeholder="Enter price"></b-form-input>

      <b-button variant="success" @click="saveNotebook">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      type: "",
      price: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getNotebookById();
  },
  methods: {
    getNotebookById() {
      this.axios
        .get("https://localhost:5001/api/NotebookModel/" + this.id)
        .then((response) => {
          console.log(response);
          this.type = response.data.type;
          this.price = response.data.price;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveNotebook() {
      let params = {
        id: this.id,
        type: this.type,
        price: this.price,
      };

      this.axios
        .put("https://localhost:5001/api/NotebookModel/" + this.id, params)
        .then(() => {
          alert("success");
          this.$router.push("/notebook");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
