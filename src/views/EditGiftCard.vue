<template>
  <div>
    <b-card :title="'Edit gift card of id:  ' + id">
      <b-form-input v-model="beneficiaryName" placeholder="Beneficiary name"></b-form-input>
      <b-form-input v-model="amount" placeholder="Amount" type="number"></b-form-input>
      <b-form-select v-model="selectedCurrency" :options="currencyOptions"></b-form-select>
      <b-button variant="success" @click="saveGiftCard">Save</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beneficiaryName:null,
      amount:null,
      currencyOptions:[
        {value:null, text:'Select currency type'},
        {value:'HUF', text:'Forint'},
        {value:'EUR', text:'Euro'},
        {value:'USD', text:'Dollar'},
      ],
      selectedCurrency:null
    };
  },
  
  created() {
    this.id = this.$route.params.id;
    this.  getGiftCardById();
  },
  methods: {
    getGiftCardById() {
      this.axios
        .get("https://localhost:5001/api/giftcards/" + this.id)
        .then((response) => {
          console.log(response);
          this.beneficiaryName = response.data.beneficiary_name;
          this.amount = response.data.amount;
          this.selectedCurrency = this.getCurrency(response.data.currency);
        })
        .catch(() => {
          alert("failed");
        });
    },
    getCurrency(currency){
        if(currency === 0){
            return "HUF"
        }
        if(currency === 1){
          return "EUR"
        }
        if(currency === 2){
          return "USD"
        }
        return ""
    },
    saveGiftCard() {
      let params = {
        id: this.id,
        beneficiary_name: this.beneficiaryName,
        amount: this.amount,
        currency : this.selectedCurrency
      }

      this.axios
        .put("https://localhost:5001/api/giftcards/" + this.id,
         params)
        .then(() => {
          alert("success");
          this.$router.push("/giftcards");
        })
        .catch(() => {
          alert("failed");
        });
    }
  },
};
</script>

<style>
input{
    text-align: center;
  }
  select{
    width: 95vw;
    height: 40px;
    border: lightgray 1px solid;
    border-radius: 5px;
    text-align: center;
    
  }
</style>