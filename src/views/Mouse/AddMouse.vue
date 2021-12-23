<template>
    <div>
        <b-card title="Add Mouse">
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
                //id: null,
                name: "",
                brand: "",
                maxDPI: "",
                minDPI: ""
            };
        },
        methods: {
            saveMouse() {
                let params = {
                    //id: this.id,
                    name: this.name,
                    brand: this.brand,
                    maxDPI: this.maxDPI,
                    minDPI: this.minDPI
                }
                this.axios
                    .post("https://localhost:5001/api/Mouses", params)
                    .then(() => {
                        alert("success");
                        this.$router.push("Mouses");
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