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
                                    v-model.trim="productName" @blur="validateProductName" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2 focus:ring-2 focus:ring-orange"/>
                                    <p v-if="invalidProductName" class="error">"Please enter product name"</p>
                                </div>
                                <div>
                                    <label class="label">Type: </label>
                                    <input  type="text" id="productType" name="productType"
                                    v-model.trim="productType" @blur="validateProductType" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                                    <p v-if="invalidProductType" class="error">"Please enter product type"</p>
                                </div>
                                <div>
                                    <label class="label">Price: </label>
                                    <input  type="text" id="productPrice" name="productPrice"
                                    v-model.trim="productPrice" @blur="validateProductPrice" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                                    <p v-if="invalidProductPrice" class="error">"Please enter product price"</p>
                                </div>
                                <div>
                                    <label class="label">Size: </label>
                                    <input  type="text" id="productSize" name="productSize"
                                    v-model.trim="productSize" @blur="validateProductSize" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                                    <p v-if="invalidProductSize" class="error">"Please enter product size"</p>
                                </div>
                                <div>
                                    <label class="label">Date: </label>
                                    <input  type="date" id="productDate" name="productDate"
                                    v-model.trim="productDate" @blur="validateProductDate" class="font-medium text-left rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                                    <p v-if="invalidProductDate" class="error">"Please enter product date"</p>
                                </div>
                            </div>
                            <div class="mt-2 w-3/5 space-y-1">
                                <div>
                                    <label class="label">Details: </label>
                                    <textarea rows="4" cols="50" type="text" id="productDetail" name="productDetail"
                                    placeholder="Enter product detail ..." v-model.trim="productDetail" @blur="validateProductDetail" class="w-full px-3 py-2 mb-1 h-48 font-medium text-left bg-white border-2 border-orange border-opacity-50y rounded-md"/>
                                    <p v-if="invalidProductDetail" class="error">"Please enter product detail"</p>
                                </div>
                                <div>
                                    <label class="label">Brand: </label>
                                    <select id="brand"  v-model.trim="brand" @blur="validateBrand" name="brand" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2">
                                        <option>Adidas</option>
                                        <option>Nike</option>
                                        <option>New Balance</option>
                                        <option>Converse</option>
                                        <option>Vans</option>
                                        <option>Fila</option>
                                    </select>
                                    <p v-if="invalidBrand" class="error">"Please select product brand"</p>
                                </div>
                                <div class=" pt-1.5">
                                    <label class="label">Color: </label>
                                    <div class="flex flex-row space-x-3">
                                        <div>
                                            <input type="checkbox" class="h-10 w-10 bg-gray-300 border-2 border-black appearance-none rounded-md checked:bg-black checked:border-transparent"
                                            id="1" value="#000000" v-model="color" :checked="color === '#000000'">
                                        </div>
                                        <div>
                                            <input type="checkbox" class=" h-10 w-10 bg-gray-300 border-2 border-white appearance-none rounded-md checked:bg-white checked:border-transparent"
                                            id="2" value="#FFFFFF" v-model="color" :checked="color === '#FFFFFF'">
                                        </div>
                                        <div>
                                            <input type="checkbox" class=" h-10 w-10 bg-gray-300 border-2 border-gray-500 appearance-none rounded-md checked:bg-gray-500 checked:border-transparent"
                                            id="3" value="#B7B7A4" v-model="color" :checked="color === '#B7B7A4'">
                                        </div> 
                                        <div>
                                            <input type="checkbox" class=" h-10 w-10 bg-gray-300 border-2 border-green-500 appearance-none rounded-md checked:bg-green-500 checked:border-transparent"
                                            id="4" value="#70E000" v-model="color" :checked="color === '#70E000'">>
                                        </div>
                                        <div>
                                            <input type="checkbox" class=" h-10 w-10 bg-gray-300 border-2 border-blue-500 appearance-none rounded-md checked:bg-blue-500 checked:border-transparent"
                                            id="5" value="#56CFE1" v-model="color" :checked="color === '#56CFE1'">
                                        </div>
                                        <div>
                                            <input type="checkbox" class=" h-10 w-10 bg-gray-300 border-2 border-blue-900 appearance-none rounded-md checked:bg-blue-900 checked:border-transparent"
                                            id="6" value="#013A63" v-model="color" :checked="color === '#013A63'">>
                                        </div>
                                        <div>
                                            <input type="checkbox" class=" h-10 w-10 bg-gray-300 border-2 border-purple-600 appearance-none rounded-md checked:bg-purple-600 checked:border-transparent"
                                            id="7" value="#BE0AFF" v-model="color" :checked="color === '#BE0AFF'">>
                                        </div>
                                        <div>
                                            <input type="checkbox" class=" h-10 w-10 bg-gray-300 border-2 border-pink appearance-none rounded-md checked:bg-pink checked:border-transparent"
                                            id="8" value="#FF7AA2" v-model="color" :checked="color === '#FF7AA2'">
                                        </div>
                                        <div>
                                            <input type="checkbox" class=" h-10 w-10 bg-gray-300 border-2 border-red-600 appearance-none rounded-md checked:bg-red-600 checked:border-transparent"
                                            id="9" value="#EF233C" v-model="color" :checked="color === '#EF233C'">
                                        </div>
                                        <div>
                                            <input type="checkbox" class=" h-10 w-10 bg-gray-300 border-2 border-yellow-300 appearance-none rounded-md checked:bg-yellow-300 checked:border-transparent"
                                            id="10" value="#FFE100" v-model="color" :checked="color === '#FFE100'">
                                        </div>
                                    
                                    </div>
                                    <p v-if="invalidColor" class="error">"Please select product color"</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4 mb-4 flex flex-col items-center space-y-2">
                            <label class="label">Choose a product picture (*.png, *.jpeg, *.gif): </label>
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
export default {
    name: "add-product",
    props: ["imageDb"],
    emits: ["close", "save-product"],
    data() {
        return {
            imageUpload: this.imageDb ? this.imageDb : imageUpload,
            proroductName: '',
            productType: '',
            productPrice: '',
            productSize: '',
            productDate: '',
            productDetail: '',
            brand: '',
            color: [],
            invalidProductName: false,
            invalidProductType: false,
            invalidProductPrice: false,
            invalidProductSize: false,
            invalidProductDate: false,
            invalidProductDetail: false,
            invalidBrand: false,
            invalidColor: false,
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
        addProduct(){
            this.invalidProductName = this.productName === '' ? true : false;
            this.invalidProductType = this.productType === '' ? true : false;
            this.invalidProductPrice = this.productPrice === '' ? true : false;
            this.invalidProductSize = this.productSize === '' ? true : false;
            this.invalidProductDate = this.productDate === '' ? true : false;
            this.invalidProductDetail = this.pProductDetail === '' ? true : false;
            this.invalidBrand = this.brand === '' ? true : false;
            this.invalidColor = this.color === '' ? true : false;
            console.log(`productName: ${this.productName}`)
            console.log(`productType: ${this.productType}`)
            console.log(`productPrice: ${this.productPrice}`)
            console.log(`productSize: ${this.productSize}`)
            console.log(`productDate: ${this.productDate}`)
            console.log(`productDetail: ${this.productDetail}`)
            console.log(`brand: ${this.brand}`)
            console.log(`color: ${this.color}`)
            console.log(`invalidProductName: ${this.invalidProductName}`)
            console.log(`invalidProductType: ${this.invalidProductType}`)
            console.log(`invalidProductPrice: ${this.invalidProductPrice}`)
            console.log(`invalidProductSize: ${this.invalidProductSize}`)
            console.log(`invalidProductDate: ${this.invalidProductDate}`)
            console.log(`invalidProductDetail: ${this.invalidProductDetail}`)
            console.log(`invalidBrand: ${this.invalidBrand}`)
            console.log(`invalidColor: ${this.invalidColor}`)
            if (this.productName !== '' && this.productType !== '' &&
                this.productPrice !== '' && this.productSize !== '' &&
                this.productDetail !== '' && this.productDate !== '' &&
                this.brand !== '' && this.color !== '') {
                    this.addNewProduct({
                        productName: this.productName,
                        productType: this.productType,
                        productPrice: this.productPrice,
                        productSize: this.productSize,
                        productDate: this.productDate,
                        productDetail: this.productDetail
                    })                 
            } else {
                this.saveProduct();
                this.closeModal();
            }
        },
        saveProduct(){
            let products = {
                productName: this.productName,
                productType: this.productType,
                productPrice: this.productPrice,
                productSize: this.productSize,
                productDate: this.productDate,
                productDetail: this.productDetail,
                productImg: this.imageUpload,
                brand: this.brand,
                color: this.color
            };
            this.$emit("save-product", products);
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
        validateProductDetail(){
            this.invalidProductDetail = this.productDetail === '' ? true : false
            console.log(`productDetail: ${this.invalidProductDetail}`);
        },
        validateBrand(){
            this.invalidBrand = this.Brand === '' ? true : false
            console.log(`productBrand: ${this.invalidBrand}`);
        },
        validateColor(){
            this.invalidColor = this.Color === '' ? true : false
            console.log(`productBrand: ${this.invalidColor}`);
        },
   
    },
};
</script>