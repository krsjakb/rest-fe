<template>
  <div>
    <div class="button">
      <a href="addJob">Add new job</a>
    </div>

    <b-list-group v-for="job in job_list" :key="job.id">
      <b-list-group-item>
        Title: {{ job.title }} | About: {{ job.about }} | Salary:
        {{ job.salary }} |
        <b-button variant="info" @click="editJob(job.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteJob(job.id)">
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
      job_list: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios.get("https://localhost:5001/api/Jobs").then((response) => {
        this.job_list = response.data;
      });
    },
    editJob(id) {
      this.$router.push("editJob/" + id);
    },
    deleteJob(id) {
      this.axios
        .delete("https://localhost:5001/api/Jobs/" + id)
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

<style>
button {
  margin: 0 10px;
}
</style> 
