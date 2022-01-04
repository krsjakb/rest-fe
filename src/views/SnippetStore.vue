<template>
    <div>
      <b-jumbotron>
        <template #header>SnippetStore</template>

        <template #lead>
          You can save a snippet using the button below, or you can view, update and delete all the previously saved snippets !
        </template>

        <hr class="my-2">

        

        <b-button variant="primary" href="addSnippetStore">Add a snippet</b-button>
        <b-button variant="success"  v-b-toggle:snippetList>List/edit the saved snippets</b-button>
        <!-- <b-list-group v-for="Snippet in SnippetStore" :key="Snippet.id">
              <b-list-group-item>
                  Type: {{ Snippet.title }}
                  <small class="text-secondary"> Title: {{ Snippet.title }} </small>
                  <b-button variant="info" @click="editSnippet(Snippet.id)" class="mr-2">
                      Edit
                  </b-button>
                  <b-button variant="danger" @click="deleteSnippet(Snippet.id)">
                      Delete
                  </b-button>
              </b-list-group-item>
        </b-list-group> -->
      </b-jumbotron>
      <b-collapse id="snippetList">
        <b-list-group v-for="Snippet in SnippetStore" :key="Snippet.id">
              <b-list-group-item>
                  Title: {{ Snippet.title }}
                  <small class="text-secondary"> Codeblock: {{ Snippet.codeBlock }} </small>
                  <b-button variant="info" @click="editSnippet(Snippet.id)" class="mr-2">
                      Edit
                  </b-button>
                  <b-button variant="danger" @click="deleteSnippet(Snippet.id)">
                      Delete
                  </b-button>
              </b-list-group-item>
        </b-list-group>
      </b-collapse>
    </div>    
</template>

<script>
export default {
  data() {
    return {
      SnippetStore: []
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/Snippet")
        .then((response) => {
          this.SnippetStore = response.data;
        });
      console.log(this.SnippetStore);
    },
    editSnippet(id) {
      this.$router.push("EditSnippetStore/" + id)
    },
    deleteSnippet(id) {
      this.axios
        .delete("https://localhost:5001/api/Snippet/" + id)
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