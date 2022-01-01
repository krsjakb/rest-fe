<template>
  <div>
    <a href="addPlugType">New plug type</a>
    <b-row id="header">
      <b-col>Id</b-col>
      <b-col>Name of plug type</b-col>
      <b-col></b-col>
    </b-row>
    <hr>
    <div id="body" v-for="plugType in plugTypes" :key="plugType.id" class="text-xs-center">
      <b-row>
        <b-col>{{ plugType.id }}</b-col>
        <b-col>{{ plugType.name }}</b-col>
        <b-col>
          <b-button v-b-tooltip.hover title="Edit" variant="light" @click="editPlugType(plugType.id)">
            <b-icon icon="pencil-fill" variant="primary"></b-icon>
          </b-button>
          <b-button v-b-tooltip.hover title="Delete" variant="light" @click="deletePlugType(plugType.id)">
            <b-icon icon="trash" variant="danger"></b-icon>
          </b-button>
        </b-col>
      </b-row>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
        plugTypes: []
    }
  },
  created(){
    this.updateList();
  },
  methods:{
    updateList(){
      this.axios
        .get("https://localhost:5001/api/PlugTypes")
        .then((response) => this.plugTypes = response.data)
    },
    editPlugType(id){
      this.$router.push("editPlugType/" + id);
    },
    deletePlugType(id) {
      this.axios
        .delete("https://localhost:5001/api/PlugTypes/" + id)
        .then(() => {
          this.updateList();
          alert("success");
        })
        .catch(() => { alert("failed"); });
    }
  }
}
</script>
