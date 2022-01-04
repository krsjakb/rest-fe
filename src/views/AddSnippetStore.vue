<template>
    <div>
        <b-card title="Add a new snippet to the SnippetStore">
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
      title: "",
      codeblock: "",
    };
  },
  methods: {
    saveSnippet() {
      let params = {
        title: this.title,
        codeblock: this.codeblock
      }
      this.axios
        .post("https://localhost:5001/api/Snippet", params)
        .then(() => {
          alert("success");
          this.$router.push("SnippetStore");
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