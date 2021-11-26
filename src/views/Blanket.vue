<template>
  <div>
    <a href="addBlanket">New blanket</a>
    <b-list-group v-for="blanket in blankets" :key="blanket.id">
      <b-list-group-item>
        <ul class="list-group">
        <li class="list-group-item">
          Name: {{ blanket.name }}
          <b-button variant="info" @click="editBlanket(blanket.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBlanket(blanket.id)">
          Delete
        </b-button>
        </li>
        <li class="list-group-item">
          <small class="text-secondary"> Brand: {{ blanket.brand }} </small>
        </li>
        <li class="list-group-item">
          <small class="text-secondary"> mainColor: {{ blanket.mainColor }} </small>
        </li>
        <li class="list-group-item">
          <small class="text-secondary"> mainMaterial: {{ blanket.mainMaterial }} </small>
        </li>
        <li class="list-group-item">
          <small class="text-secondary"> Widht: {{ blanket.width }} </small>
        </li>
        <li class="list-group-item">
          <small class="text-secondary"> Length: {{ blanket.length }} </small>
        </li>
      </ul>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blankets: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/BlanketModels")
        .then((response) => {
          this.blankets = response.data;
        });
    },
    editBlanket(id) {
      this.$router.push("editBlanket/" + id)
    },
    deleteBlanket(id) {
      this.axios
        .delete("https://localhost:5001/api/BlanketModels/" + id)
        .then(() => {
          this.updateList();
          alert("success");
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