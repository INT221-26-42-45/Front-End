<template>
    <div>
        <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none flex justify-center items-center mb-4">
            <div class=" h-96 border-0 rounded-md shadow-lg flex flex-col w-3/4 bg-darkgray outline-none focus:outline-none">
                <div class="flex justify-end">
                    <button class="close" type="button" @click="closeModal"> X </button>
                </div>
                <div class="pt-3 px-64">
                    <h3 class="text-3xl uppercase text-white">skór</h3>
                </div>

                <div class=" bg-darkgray rounded-md px-4">
                    <form @submit.prevent="addProduct">
                        <div class="flex flex-row justify-around mt-2 space-x-5">
                            <div class="mt-2 w-2/5 space-y-2">
                                <div>
                                    <label class="label">Product name: </label>
                                    <input  type="text" id="productName" name="productName"
                                    v-model.trim="product.productName" @blur="validateProductName" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2 focus:ring-2 focus:ring-orange"/>
                                    <p v-if="invalidProductName" class="error">"Please enter product name"</p>
                                </div>
                                <div>
                                    <label class="label">Type: </label>
                                    <input  type="text" id="productType" name="productType"
                                    v-model.trim="product.productType" @blur="validateProductType" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                                    <p v-if="invalidProductType" class="error">"Please enter product type"</p>
                                </div>
                                <div>
                                    <label class="label">Price: </label>
                                    <input  type="text" id="productPrice" name="productPrice"
                                    v-model.trim="product.productPrice" @blur="validateProductPrice" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                                    <p v-if="invalidProductPrice" class="error">"Please enter product price"</p>
                                </div>
                                <div>
                                    <label class="label">Size: </label>
                                    <input  type="text" id="productSize" name="productSize"
                                    v-model.trim="product.productSize" @blur="validateProductSize" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                                    <p v-if="invalidProductSize" class="error">"Please enter product size"</p>
                                </div>
                                <div>
                                    <label class="label">Date: </label>
                                    <input  type="text" id="productDate" name="productDate" placeholder="YYYY-MM-DD"
                                    v-model.trim="product.productDate" @blur="validateProductDate" class="font-medium text-left rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                                    <p v-if="invalidProductDate" class="error">"Please enter product date"</p>
                                </div>
                            </div>
                            <div class="mt-2 w-3/5 space-y-1">
                                <div>
                                    <label class="label">Description: </label>
                                    <textarea rows="4" cols="50" type="text" id="productDetail" name="productDetail"
                                    placeholder="Enter product description ..." v-model.trim="product.productDescription" @blur="validateProductDetail" class="w-full px-3 py-2 mb-1 h-48 font-medium text-left bg-white border-2 border-orange border-opacity-50y rounded-md"/>
                                    <p v-if="invalidProductDetail" class="error">"Please enter product detail"</p>
                                </div>
                                <div>
                                    <label class="label">Brand: </label>
                                    <select id="brands"  v-model.trim="brands.brandName" @blur="validateBrand" name="brands" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2" >  
                                        <option v-for="brand in brands" :key="brand.brandId">{{ brand.brandName }}</option> 
                                    </select>
                                    <p v-if="invalidBrand" class="error">"Please select product brand"</p>
                                </div>
                                <div class=" pt-1.5">
                                    <label class="label">Color: </label>
                                    <div class="flex flex-row space-x-3">
                                            <input type="checkbox" class="h-10 w-10  appearance-none rounded-md "
                                             v-model="colors.colorName"  id="colors.colorId" value="colors.colorName" v-for="color in colors" :key="color.colorId" :style="{ background: color.colorName }" >
                                    </div>
                                    <p v-if="invalidColor" class="error">"Please select product color"</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4 mb-4 flex flex-col items-center space-y-2">
                            <label class="label">Choose a product picture (*.png, *.jpeg): </label>
                            <input id="file-input" type="file" @change="uploadPhoto"/>
                            <div class="flex justify-center">
                                <img :src="imageUpload" class="object-cover h-60 w-30" />
                            </div>
                        </div>
                        <div class=" flex flex-row justify-center space-x-2 mt-4 mb-4">
                            <button class="bg-green-500 hover:bg-green-600 hover:text-white py-2 px-16 mx-2 rounded-full text-darkgray text-xl font-bold uppercase">
                                add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import imageUpload from "../assets/imageupload.png";
import ProductService from '../service/ProductService.js';

export default {
    name: "add-product",
    props: ["imageDb"],
    emits: ["close", "save-product"],
    data() {
        return {
            imageUpload: this.imageDb ? this.imageDb : imageUpload,
            brands: [],
            colors: [],
            product: [],
            invalidProductName: false,
            invalidProductType: false,
            invalidProductPrice: false,
            invalidProductSize: false,
            invalidProductDate: false,
            invalidProductDescription: false,
            invalidBrands: false,
            invalidColors: false,
        }
    },
    methods: {
        closeModal(){
            this.$emit("close", true);
        },
        uploadPhoto(u) {
            const file = u.target.files[0] || u.dataTransfer.files[0];
            const reader = new FileReader();
            reader.onload = (u) => {
                this.imageUpload = u.target.result;
            };
            reader.readAsDataURL(file);
        },
    
        validateProductName(){
            this.invalidProductName = this.productName === '' ? true : false
            console.log(`productName: ${this.invalidProductName}`);
        },
        validateProductType(){
            this.invalidProductType = this.productType === '' ? true : false
            console.log(`productType: ${this.invalidProductType}`);
        },
        validateProductPrice(){
            this.invalidProductPrice = this.productPrice === '' ? true : false
            console.log(`productPrice: ${this.invalidProductPrice}`);
        },
        validateProductSize(){
            this.invalidProductSize = this.productSize === '' ? true : false
            console.log(`productSize: ${this.invalidProductSize}`);
        },
        validateProductDate(){
            this.invalidProductDate = this.productDate === '' ? true : false
            console.log(`productDate: ${this.invalidProductDate}`);
        },
        validateProductDescription(){
            this.invalidProductDescription = this.productDetail === '' ? true : false
            console.log(`productDetail: ${this.invalidProductDescription}`);
        },
        validateBrand(){
            this.invalidBrands = this.Brands === '' ? true : false
            console.log(`productBrand: ${this.invalidBrands}`);
        },
        validateColor(){
            this.invalidColors = this.Colors === '' ? true : false
            console.log(`productBrand: ${this.invalidColors}`);
        },
        listBrand(){
            ProductService.get("/brand").then(response => {
                this.brands = response.data;
            });
        },
        listColor(){
            ProductService.get("/color").then(response => {
                this.colors = response.data;
            })
        }
   
    },
    created() {
    this.listBrand();
    this.listColor();
    }
};
</script>
<style scoped>
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

</style>