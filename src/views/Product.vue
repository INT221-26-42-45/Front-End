<template>
  <div class="fixed mt-24 w-full ">
    <div class=" pl-28 flex flex-col justify-center space-x-28">
        <!-- <router-link to="/product">
          <base-button buttonLabel="VIEW PRODUCTS" buttonColor="bg-pkras"></base-button>
        </router-link> 
        <router-link to="/product">
          <base-button @click="toggleAddProduct" buttonLabel="ADD PRODUCTS" buttonColor="bg-pkras"></base-button>
        </router-link> -->
      <div class="flex flex-col w-1/2 mt-4">
        <div v-for="product in product " :key="product.id">
          <div class="flex flex-row border space-x-8 border-gray-50 rounded-md shadow p-2 my-1 w-1/2 h-96">
            <div>
                <img :src="imageUpload" class=" border-2 border-black object-cover w-36 h-36 ml-2 my-2" />
      
            </div>

            <div class="w-3/4 text-left">
                <p class="font-medium text-lg">{{ "Name: " + product.productName }} </p>
                <p class="font-medium text-lg">{{ "Brand: " + product.brand }} </p>
                <p class="font-medium text-lg">{{ "Type: " + productType }} </p>
                <p class="font-medium text-lg">{{ "Detail: " + product.productDetail }} </p>
                <p class="font-medium text-lg">{{ "Price: " + procuct.productPrice + "THB" }} </p>
                <p class="font-medium text-lg">{{ "Size: " + product.productSize }} </p>
                <p class="font-medium text-lg">{{ "Date: " + product.productDate }} </p>
                  <div class="flex flex-row inset-0 bottom-0">
                    <base-button
                      @btn-click="editProduct(product)"
                      buttonLabel="Edit"
                      buttonColor="bg-favyellow"
                      txtColor="text-gray-900"
                      ></base-button>
                    <base-button
                      @btn-click="deleteProduct(product.id)"
                      buttonLabel="Delete"
                      buttonColor="bg-red-500"
                      txtColor="text-gray-900"
                      ></base-button>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <add-product 
          v-if="isEdit"
          :oldId="oldId"
          :oldProductName="oldProductName"
          :oldProductType="oldProductType"
          :oldProductPrice="oldProductPrice"
          :oldProductSize="oldProductSize"
          :oldProductDate="oldProductDate"
          :oldProductDetail="oldProductDetail"
          :oldBrand="oldBrand"
          :oldColor="oldColor"
          @save-product="editProduct"
          ></add-product>
        <add-product @save-product="addNewProduct"></add-product>
      </div>
    </div>
  </div>
</template>

<script>

import AddProduct from '../components/AddProduct.vue';

export default {
  components: {
    AddProduct
  },

  data(){
    return {
      url: "http://localhost:5000/product",
      product: [],
      isEdit: false,
      oldId: '',
      oldProductName: '',
      oldProductType: '',
      oldProductPrice: '',
      oldProductSize: '',
      oldProductDate: '',
      oldProductDetail: '',
      oldBrand: '',
      oldColor: null
    };
  },

  methods: {
    async fetchProduct(){
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },

    async addNewProduct(newProduct){
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
        this.product = [...this.product, data];
    },

    async deleteProduct(id) {
      const res = await fetch(`${this.url}/${id}`, {
        method: "DELETE",
      });
      res.status === 200 ? (this.product = this.product.filter(
        (product) => product.id !== id))
      : alert("Error delete product")
    },

    async editProduct(editingProduct) {
      const res = await fetch(`${this.url}/${this.editingProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify({
          productName: editingProduct.productName,
          productType: editingProduct.productType,
          productPrice: editingProduct.productPrice,
          productSize: editingProduct.productSize,
          productDate: editingProduct.productDate,
          productDetail: editingProduct.productDetail,
          productImg: editingProduct.productImg,
          brand: editingProduct.brand,
          color: editingProduct.color
        }),
      });
      const data = await res.json();
      this.product = this.product.map((product) => 
        product.id === data.id
          ? {
              ...product,
              productName: data.productName,
              productType: data.productType,
              productPrice: data.productPrice,
              productSize: data.productSize,
              productDate: data.productDate,
              productDetail: data.productDetail,
              productImg: data.productImg,
              brand: data.brand,
              color: data.color
            }
          : product
        );
        this.isEdit = false
    }
  },

  async created() {
    this.product = await this.fetchProduct();
  },
  
};
</script>
<style>

</style>