<template>
<div>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group
        id="job-name-input-group"
        label="job name:"
        label-for="job-name-input"
      >
        <b-form-input
          id="job-name-input"
          v-model="form.JobName"
          type="text"
          placeholder="Enter Job Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="mb-2"
        id="job-text-input-group"
        label="job text:"
        label-for="job-text-input"
      >
        <b-form-input
          id="job-text-input"
          v-model="form.JobText"
          type="text"
          placeholder="job text"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group
        class="mb-3"
        id="job-price-input-group"
        label="job price:"
        label-for="job-price-input"
      >
        <b-form-input
          id="job-price-input"
          v-model="form.JobPrice"
          type="number"
          placeholder="job price"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="mx-1" type="submit" variant="primary">Submit</b-button>
      <b-button class="mx-1" type="reset" variant="danger">Reset</b-button>
    </b-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        JobName: "",
        JobText: "",
        JobPrice: 0,
      },
      toastCount: 0,
    };
  },
  methods: {
    onSubmit() {
      let self = this;
      let params = {
        JobName: self.form.JobName,
        JobText: self.form.JobText,
        JobPrice: self.form.JobPrice,
      };
      self.axios
        .post("https://localhost:5001/api/Jobs", params)
        .then(() => {
          self.$router.push("jobs");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    onReset() {
      this.form.JobName = "";
      this.form.JobText = "";
      this.form.JobPrice = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>