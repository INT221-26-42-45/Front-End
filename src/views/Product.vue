<template>
  <div class=" w-full  md:overflow-hidden">
<div class="text-base px-5 pt-4 text-right hover:underline ">
      <router-link to="/product" class="text-black hover:text-black">Add Product</router-link>
</div>

 
  <div class="grid md:grid-cols-3 sm:grid-cols-1 text-left justify-items-center  ">  
    <div v-for="p in product" :key="p.productId" class="mx-10 text-sm ">
      <div class="piece">
      
      <img class="pic" :src="getProductImage(p.productImg)"/>
      <p class="mt-3">{{"Name: "+ p.productName }}</p>
     
      <p>{{"Description: "+ p.productDescription }}</p>

      <p>{{"Type: "+ p.productType}}</p>

      <p>{{"Size: "+ p.productSize }}</p>

      <p class="mb-3">{{"Brand: "+ p.brands.brandName }}</p>
      
      <div class="colorFormat">
      <div class="color" v-for="color in p.colors" 
      :key="color.colorId" :style="{ background: color.colorName }">
      </div>
      </div>

      <p>{{"Date: "+ p.productDate}}</p>

      <p>{{"Price: "+ p.productPrice }}</p>

     <div class="bottom-0 right-0">
      <button class="bg-black hover:bg-lavender py-1 px-3 rounded-md text-white " @click="editButtonClick">
              Edit
      </button>

      <button class="bg-black hover:bg-rose py-1 px-3 mx-2 rounded-md text-white" @click="deleteButtonClick">
              Delete
      </button>
      </div>
      </div>
    </div>
</div>
</div>
 

</template>

<script>
import ProductService from '../service/ProductService';
export default {
  data(){
    return {
      product: [],
      colors: [],
      brands: []
    };
  },
  methods: {
    getProduct(){
      ProductService.retrieveAllProduct()
      .then((response) => {
        this.product = response.data;
      });
    },
    getProductImage(productImg){
      return "http://localhost:9000/image/"+productImg;
    }
  },
    created() {
    this.getProduct();
  },
  //
};
</script>
<style>
.colorFormat {
  display: flex;
  width: 100%;
}
.color {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 0px;
  margin-bottom: 15px;
}
.piece {
    width: 400px;
    height: 640px;
    border: 1px solid #F9BEC7;
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: #F9BEC7;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.pic {
  height: 80px;
  margin: auto;
  display: block;
}
</style>