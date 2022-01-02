<template>
  <div>
    <a href="addWeapons">New Weapon</a>
    <b-list-group v-for="Weapons in Weapons" :key="Weapons.id">
      <b-list-group-item>
        Name: {{ Weapons.name }}
        <small class="text-secondary"> Price: {{ Weapons.price }} </small>
        <b-button variant="info" @click="editWeapon(Weapons.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteWeapon(Weapons.id)">
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
      Weapons: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/Weapons")
        .then((response) => {
          this.Weapons = response.data;
        });
    },
    editWeapon(id) {
      this.$router.push("editWeapons/" + id)
    },
    deleteWeapon(id) {
      this.axios
        .delete("https://localhost:5001/api/Weapons/" + id)
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