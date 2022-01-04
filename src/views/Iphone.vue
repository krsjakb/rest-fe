<template>
   <div>
     <a href="addIphone">New iPhone</a>
     <b-list-group v-for="iphone in iphones" :key="iphone.id">
       <b-list-group-item>
         Serial Number: {{ iphone.serialNumber }}
         <br/>
         IMEI: {{iphone.imei}}
         <br/>
         <b-button variant="info" @click="editIphone(iphone.id)" class="mr-2">
           Edit
         </b-button>
         <b-button variant="danger" @click="deleteIphone(iphone.id)">
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
       iphones: [],
     };
   },
   created() {
     this.updateList();
   },
   methods: {
     updateList() {
       this.axios
         .get("https://localhost:5001/api/Iphone")
         .then((response) => {
           this.iphones = response.data;
         });
     },
     editIphone(id) {
       this.$router.push("editIphone/" + id)
     },
     deleteIphone(id) {
       this.axios
         .delete("https://localhost:5001/api/Iphone/" + id)
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
 