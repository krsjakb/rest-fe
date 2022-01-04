<template>
    <div>
        <b-card :title="'Edit the snippet with id of ' + id">
            <b-form-input v-model="title" placeholder="Enter snippet's title"></b-form-input>

            <b-form-textarea rows=5 placeholder="Paste your code snippet here..." v-model="codeblock"></b-form-textarea>

            <b-button variant="success" @click="saveSnippet">Save</b-button>
        </b-card>
    </div>
</template>


<script>
export default {
  data() {
    return {
      id: null,
      title: "",
      codeblock: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getSnippetStoreById();
  },
  methods: {
    getSnippetStoreById() {
      console.log("itt vagyok");
      this.axios
        .get("https://localhost:5001/api/Snippet/" + this.id)
        .then((response) => {
          console.log("itt vagyok");
          this.title = response.data.title;
          this.codeblock = response.data.codeBlock;
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveSnippet() {
      let params = {
        id: this.id,
        title: this.title,
        codeblock: this.codeblock
      }
      this.axios
        .put("https://localhost:5001/api/Snippet/" + this.id, params)
        .then(() => {
          alert("success");
          this.$router.push("/SnippetStore");
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