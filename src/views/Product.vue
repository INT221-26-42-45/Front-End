<template>
  <div class="fixed p-5 mt-20 w-full ">
    <div class="pt-1 w-full flex justify-center space-x-16">
        <router-link to="/product">
          <base-button buttonLabel="VIEW PRODUCTS" buttonColor="bg-pkras"></base-button>
        </router-link> 
        <router-link to="/product">
          <base-button @click="toggleAddProduct" buttonLabel="ADD PRODUCTS" buttonColor="bg-pkras"></base-button>
        </router-link>

        <add-product v-if="showAddProductModal" @save-product="addNewProduct" @close="toggleAddProduct"></add-product>
        <div v-if="showAddProductModal" class="show-modal"></div>
    </div>
  </div>

  <!-- <footer class="bg-black mt-12">
     <div class="container flex flex-col justify-center p-6 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
      <div class="flex flex-row justify-center space-x-4 mt-6 -mb-6 text-left md:pl-20 md:mt-0 ">
        <div class="w-full px-2 pl-0 lg:w-1/4 md:w-1/2">
            <h1 class="mb-3 text-lg font-bold tracking-widest text-white uppercase title-font">Products
            </h1>
            <nav class="mb-8 list-none">
              <li>
                <p class="text-sm text-white">Nike Sneaker</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">Adidas Sneaker</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">NB Sneaker</p>
              </li>
            </nav>
        </div>
        <div class="w-full px-4 lg:w-1/4 md:w-1/2">
              <h1 class="mb-3 text-lg font-bold tracking-widest text-white  uppercase title-font">Collections
              </h1>
              <nav class="mb-8 list-none">
                <li>
                  <p class="text-sm text-white">Nike Air</p>
                </li>
                <li>
                  <p class="text-sm mt-2 text-white">Sperstar NMD</p>
                </li>
                <li>
                  <p class="text-sm mt-2 text-white">574</p>
                </li>
              </nav>
        </div>
        <div class="w-full px-2 pl-10 lg:w-1/4 md:w-1/2">
            <h1 class="mb-3 text-lg font-bold tracking-widest text-white uppercase title-font">Support
            </h1>
            <nav class="mb-8 list-none">
              <li>
                <p class="text-sm text-white">Nike</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">Adidas</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">New Balance</p>
              </li>
            </nav>
        </div>
        <div class="w-full mt-16 pl-2 lg:w-1/4 md:w-1/2">
          <img class="w-24 h-12" alt="logofooter" src="../assets/logo.png" />
        </div>
      </div>
    </div>         
  </footer> -->

</template>

<script>

import AddProduct from '../components/AddProduct.vue';

export default {
  components: {
    AddProduct
  },

  data(){
    return {
      url: "http://localhost:5000/products",
      products: [],
      showAddProductModal: false
    };
  },

  methods: {
    toggleAddProduct: function() {
      this.showAddProductModal = !this.showAddProductModal;
    },

    async addNewProduct(newProduct){
      try {
        const res = await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            productName: newProduct.productName,
            productType: newProduct.productType,
            productPrice: newProduct.productPrice,
            productSize: newProduct.productSize,
            productDate: newProduct.productDate,
            productDetail: newProduct.productDetail,
            brand: newProduct.brand,
            color: newProduct.color
          }),
        });
        const data = await res.json();
        this.products = [...this.products, data];
      } catch (error) {
        console.log(`Could not add ${error}`);
      }
      this.enteredProductName=''
      this.enteredProductType=''
      this.enteredProductPrice=''
      this.enteredProductSize=''
      this.enteredProductDate=''
      this.enteredProductDetail=''
      this.brand=''
      this.color=''
    }
  },
  
}
</script>
<style>

</style>