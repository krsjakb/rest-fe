<template>
    <div>
        <a href="addPhone">New phone</a>
    <b-list-group v-for="phone in phones" :key="phone.id">
      <b-list-group-item>
        Price: {{ phone.price }}
        <small class="text-secondary">
          BrandName: {{ phone.brandName }} 
        </small>
        <small class="text-secondary">
          TypeName: {{ phone.typeName }} 
        </small>
        <b-button variant="info" @click="editPhone(phone.id)">Edit</b-button>
        <b-button variant="danger" @click="deletePhone(phone.id)">Delete</b-button>
      </b-list-group-item>
    </b-list-group>

    </div>
</template>

<script>
    export default {
  data() {
    return {
      phones: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/Phones")
        .then((response) => {
          this.phones = response.data;
        });
    },
    editPhone(id) {
      this.$router.push("editPhone/" + id)
    },
    deletePhone(id) {
      this.axios
        .delete("https://localhost:5001/api/Phones/" + id)
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