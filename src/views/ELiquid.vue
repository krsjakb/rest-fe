<template>
  <div>
    <a href="AddELiquid">New Eliquid</a>
    <b-list-group v-for="ELiquid in ELiquids" :key="ELiquid.id">
      <b-list-group-item>
        Fantasy Name: {{ ELiquid.fName }}
        <small class="text-secondary"> Strenght: {{ ELiquid.str }} </small>
        <b-button variant="info" @click="editELiquid(ELiquid.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteBrand(ELiquid.id)">
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
      ELiquids: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/ELiquids")
        .then((response) => {
          this.ELiquids = response.data;
        });
    },
    editBrand(id) {
      this.$router.push("editELiquid/" + id)
    },
    deleteBrand(id) {
      this.axios
        .delete("https://localhost:5001/api/ELiquids/" + id)
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