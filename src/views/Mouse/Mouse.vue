<template>
    <div>
        <a href="AddMouse">New Mouse</a>
        <b-list-group v-for="Mouse in Mouses" :key="Mouse.id">
            <b-list-group-item>
                Brand: {{ Mouse.brand }}
                <small class="text-secondary"> Name: {{ Mouse.name }} </small>
                <small class="text-secondary"> maxDPI: {{ Mouse.maxDPI }} </small>
                <small class="text-secondary"> minDPI: {{ Mouse.minDPI }} </small>
                <b-button variant="info" @click="editMouse(Mouse.id)" class="mr-2">
                    Edit
                </b-button>
                <b-button variant="danger" @click="deleteMouse(Mouse.id)">
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
                Mouses: [],
            };
        },
        created() {
            this.updateList();
        },
        methods: {
            updateList() {
                this.axios
                    .get("https://localhost:5001/api/Mouses")
                    .then((response) => {
                        this.Mouses = response.data;
                    });
            },
            editMouse(id) {
                this.$router.push("editMouse/" + id)
            },
            deleteMouse(id) {
                this.axios
                    .delete("https://localhost:5001/api/Mouses/" + id)
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