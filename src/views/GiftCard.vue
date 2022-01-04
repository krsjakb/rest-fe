<template>
  <div>
    <div class="button">
        <a href="addGiftCard">New gift card</a>
    </div>
    
    <b-list-group v-for="giftcard in giftcard_list" :key="giftcard.id">
      <b-list-group-item>
        Beneficiary Name: {{ giftcard.beneficiary_name  }} |
        Amount: {{ giftcard.amount }} |
        Currency:{{ getCurrency(giftcard.currency) }} |
        <b-button variant="info" @click="editGiftCard(giftcard.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteGiftCard(giftcard.id)">
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
      giftcard_list: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      this.axios
        .get("https://localhost:5001/api/giftcards")
        .then((response) => {
          this.giftcard_list = response.data;
        });
    },
    getCurrency(currency){
        if(currency === 0){
            return "Forint"
        }
        if(currency === 1){
          return "Euro"
        }
        if(currency === 2){
          return "Dollar"
        }
        return ""
    },
    editGiftCard(id) {
      this.$router.push("editGiftCard/" + id)
    },
    deleteGiftCard(id) {
      this.axios
        .delete("https://localhost:5001/api/giftcards/" + id)
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
  button{
    margin-left: 10px;
    margin-right: 10px;
  }
</style>