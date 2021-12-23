<template>
    <div>
        <b-card :title="'Edit Mouse with id of ' + id">
            <b-form-input v-model="name" placeholder="Enter name"></b-form-input>

            <b-form-input v-model="brand" placeholder="Enter brand"></b-form-input>

            <b-form-input v-model="maxDPI" placeholder="Enter Max DPI"></b-form-input>

            <b-form-input v-model="minDPI" placeholder="Enter Min DPI"></b-form-input>

            <b-button variant="success" @click="saveMouse">Save</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: null,
                name: "",
                brand: "",
                maxDPI: 0,
                minDPI: 0
            };
        },
        created() {
            this.id = this.$route.params.id;
            this.getMouseById();
        },
        methods: {
            getMouseById() {
                this.axios
                    .get("https://localhost:5001/api/Mouses/" + this.id)
                    .then((response) => {
                        console.log(response);
                        this.name = response.data.name;
                        this.brand = response.data.brand;
                        this.maxDPI = response.data.maxDPI;
                        this.minDPI = response.data.minDPI;
                    })
                    .catch(() => {
                        alert("failed");
                    });
            },
            saveMouse() {
                let params = {
                    id: this.id,
                    name: this.name,
                    brand: this.brand,
                    maxDPI: this.maxDPI,
                    minDPI: this.minDPI
                }
                this.axios
                    .put("https://localhost:5001/api/Mouses/" + this.id,
                        params)
                    .then(() => {
                        alert("success");
                        this.$router.push("/Mouses");
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