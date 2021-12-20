<template>
  <div>
    <a href="AddJobs">New Job</a>
    <b-list-group v-for="job in Jobs" :key="job.Id">
      <b-list-group-item
        >Name: {{ job.jobName }}
        <small class="text-secondary"> szöveg: {{ job.jobText }} </small>
        <small class="text-secondary"> munkabér: {{ job.jobPrice }} </small>
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
      Jobs: [],
    };
  },
  created() {
    this.updateList();
    
  },
  methods:{
      updateList(){
          this.axios.get("https://localhost:5001/api/Jobs").then((response) => {
      this.Jobs = response.data;
    });
      },
      editJob(id){
          this.$router.push("editJobs/" + id)
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
  }
};
</script>

<style lang="scss" scoped></style>