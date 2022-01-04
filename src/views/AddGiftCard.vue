<template>
  <div>
    <b-card title="Add new GiftCard">
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
beneficiaryName:"",
amount:"",
selectedCurrency:null,
currencyOptions:[
  {value:null, text:'Select currency type'},
  {value:'HUF', text:'Forint'},
  {value:'EUR', text:'Euro'},
  {value:'USD', text:'Dollar'},
],
    };
  },
  methods: {
   saveGiftCard() {
      let params = {
        beneficiary_name: this.beneficiaryName,
        amount:this.amount,
        currency:this.selectedCurrency,
      }

      this.axios
        .post("https://localhost:5001/api/giftcards", params)
        .then(() => {
          alert("success");
          this.$router.push("giftcards");
        })
        .catch((e) => {
          alert(e);
        });
    },
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