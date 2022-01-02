<template>
  <div>
    <a href="addCharacter">New character</a>
    <b-list-group v-for="characterModel in characterModels" :key="characterModel.id">
      <b-list-group-item>
        Name: {{ characterModel.name }}
        <small class="text-secondary"> health: {{ characterModel.health }} </small>
        <b-button variant="info" @click="editCharacter(characterModel.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteCharacter(characterModel.id)">
          Delete
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characterModels: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/CharacterModels")
        .then((response) => {
          this.characterModels = response.data;
        });
    },
    editCharacter(id) {
      this.$router.push("editCharacter/" + id)
    },
    deleteCharacter(id) {
      this.axios
        .delete("https://localhost:5001/api/CharacterModels/" + id)
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