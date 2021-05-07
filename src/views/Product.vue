<template>
  <div class=" w-full ">
<div class="text-base px-5 pt-28 text-right hover:underline text-black ">
      <router-link to="/product">Add Product</router-link>
</div>

 
  <div class="grid grid-cols-3 text-left ">  
    <div v-for="p in product" :key="p.productId" class="mx-10 text-sm ">
      <div class="border space-x-8 border-gray-50 rounded-md shadow p-2 mt-3 ">
      <img :src="getProductImage(p.imageName)"/>
      <p>{{ p.productName }}</p>
      <p>{{ p.productDescription }}</p>
      <p>{{ p.productType}}</p>
      <p>{{ p.productSize }}</p>
      <p>{{ p.brands }}</p>
      <div class="" v-for="brand in brands"
      :key="brand.brandId" :style="brand.brandName">
      </div>
      <p>{{ p.colors }}</p>
      <div class="" v-for="color in p.colors" 
      :key="color.colorId" :style="{ background: color.colorName }">
      </div>
      <p>{{ p.productDate}}</p>
      <p>{{ p.productPrice }}</p>
     <div class="bottom-0 right-0">
      <button class="bg-green-500 py-1 px-3 rounded-md text-white" @click="editButtonClick">
              Edit
      </button>
      <button class="bg-red-500 py-1 px-3 mx-2 rounded-md text-white" @click="deleteButtonClick">
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
      brands: [],
      imageName: ""
    };
  },
  methods: {
    getProduct(){
      ProductService.retrieveAllProduct()
      .then((response) => {
        this.product = response.data;
      });
    },
    getProductImage(imageName){
      return ProductService.retriveProductImage() +imageName;
    }
  },
    created() {
    this.getProduct();
    this.getProductImage(this.imageName);
  },
  
};
</script>
<style>
</style>