<template>
    <div>
        <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none flex justify-center items-center mb-4">
            <div class=" h-96 border-0 rounded-md shadow-lg flex flex-col w-3/4 bg-darkgray outline-none focus:outline-none">
                <div class="flex justify-end">
                    <button class="font-bold text-xl my-1 mx-3 text-white" type="button" @click="closeModal"> X </button>
                </div>
                <div class="pt-3 px-64">
                    <h3 class="text-3xl uppercase text-white">skór</h3>
                </div>

                <div class=" bg-darkgray rounded-md px-4">
                <form @submit.prevent="addProduct" >
                    <div class="flex flex-row justify-around mt-2 space-x-5">
                        <div class="mt-2 w-2/5 space-y-2">
                            <div>
                                <label class="pl-1 font-medium text-white flex justify-start">Product name: </label>
                                <input  type="text" id="productName" name="productName"
                                v-model.trim="enteredProductName" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                            </div>

                            <div>
                                <label class="pl-1 font-medium text-white flex justify-start">Type: </label>
                                <input  type="text" id="productType" name="productType"
                                v-model.trim="enteredProductType" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                            </div>

                            <div>
                                <label class="pl-1 font-medium text-white flex justify-start">Price: </label>
                                <input  type="text" id="productPrice" name="productPrice"
                                v-model.trim="enteredProductPrice" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                            </div>

                            <div>
                                <label class="pl-1 font-medium text-white flex justify-start">Size: </label>
                                <input  type="text" id="productSize" name="productSize"
                                v-model.trim="enteredProductSize" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                            </div>

                            <div>
                                <label class="pl-1 font-medium text-white flex justify-start">Date: </label>
                                <input  type="text" id="productDate" name="productDate" placeholder="YYYY-MM-DD"
                                v-model.trim="enteredProductDate" class="font-medium text-left rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                            </div>
                            
                        </div> 
                        <div class="mt-2 w-3/5 space-y-1">
                            <div>
                                <label class="pl-1 font-medium text-white flex justify-start">Details: </label>
                                <textarea rows="4" cols="50" type="text" id="productDetail" name="productDetail"
                                placeholder="Enter detail ..." v-model.trim="enteredProductDetail" class="w-full px-3 py-2 mb-1 h-48 font-medium text-left bg-white border-2 border-orange border-opacity-50y rounded-md"/>
                            </div>

                            <div>
                                <label class="pl-1 font-medium text-white flex justify-start">Brand: </label>
                                <select id="brand"  v-model="brand" name="brand" class="font-medium rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2">
                                    <option>Adidas</option>
                                    <option>Nike</option>
                                    <option>New Balance</option>
                                    <option>Converse</option>
                                    <option>Vans</option>
                                    <option>Fila</option>
                                </select>
                            </div>
                            
                            <div class=" pt-1.5">
                                <label class="pl-1 font-medium text-white flex justify-start">Color: </label>
                                <input  type="text" id="color" name="color" placeholder="YYYY-MM-DD"
                                v-model.trim="color" class="font-medium text-left rounded-md border-2 border-orange border-opacity-50y w-full px-3 py-2"/>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 mb-4 flex flex-col space-y-2">
                        <label class=" pl-72 font-medium text-white flex justify-start">Choose a product picture (*.png, *.jpeg, *.gif): </label>
                        <input type="submit" value="Upload Image" class="ml-72 font-medium text-left rounded-md border-2 bg-white border-orange border-opacity-50y w-36 px-3 py-2" />
                        <input id="file-input" type="file" @change="uploadPhoto" class="absolute top-0 left-0 opacity-0 h-10" />
                        <div class="flex justify-center">
                            <img src="../assets/imageupload.png" alt="imageupload" class="object-cover h-60 border" />
                        </div>
                    </div>

                    <div class=" flex flex-row justify-center space-x-2 mt-4 mb-4">
                        <base-button buttonLabel="CANCEL" buttonColor="bg-white" txtColor="text-darkgray" buttonBorder=" border-orange"></base-button>
                         <base-button buttonLabel="ADD" buttonColor="bg-pkras" txtColor="text-darkgray"></base-button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "add-product",
    emits: ["close", "save-product"],

    data() {
        return {
            url: 'http://localhost:5000/products',
            products: [ ],
            isEdit: false,
            editId: '',
            enteredProductName: '',
            enteredProductType: '',
            enteredProductPrice: '',
            enteredProductSize: '',
            enteredProductDate: '',
            enteredProductDetail: '',
            brand: '',
            color: '',
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

        addProduct(){
            this.invalidProductName = this.enteredProductName === '' ? true : false;
            this.invalidProductType = this.enteredProductType === '' ? true : false;
            this.invalidProductPrice = this.enteredProductPrice === '' ? true : false;
            this.invalidProductSize = this.enteredProductSize === '' ? true : false;
            this.invalidProductDate = this.enteredProductDate === '' ? true : false;
            this.invalidProductDetail = this.enteredProductDetail === '' ? true : false;
            this.invalidBrand = this.brand === '' ? true : false;
            this.invalidColor = this.color === '' ? true : false;
            console.log(`productName: ${this.enteredProductName}`)
            console.log(`productType: ${this.enteredProductType}`)
            console.log(`productPrice: ${this.enteredProductPrice}`)
            console.log(`productSize: ${this.enteredProductSize}`)
            console.log(`productDate: ${this.enteredProductDate}`)
            console.log(`productDetail: ${this.enteredProductDetail}`)
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

            if (this.enteredProductName !== '' && this.enteredProductType !== '' &&
                this.enteredProductPrice !== '' && this.enteredProductSize !== '' &&
                this.enteredProductDetail !== '' && this.enteredProductDate !== '' &&
                this.brand !== '' && this.color !== '') {

                    if(this.isEdit){
                        this.editAdd({
                            id: this.editId,
                            productName: this.enteredProductName,
                            productType: this.enteredProductType,
                            productPrice: this.enteredProductPrice,
                            productSize: this.enteredProductSize,
                            productDate: this.enteredProductDate,
                            productDetail: this.enteredProductDetail,
                            brand: this.brand,
                            color: this.color
                        })
                    } else {
                        this.addNewProduct({
                            productName: this.enteredProductName,
                            productType: this.enteredProductType,
                            productPrice: this.enteredProductPrice,
                            productSize: this.enteredProductSize,
                            productDate: this.enteredProductDate,
                            productDetail: this.enteredProductDetail,
                            brand: this.brand,
                            color: this.color
                        })
                    }
                
                }
                this.enteredProductName=''
                this.enteredProductType=''
                this.enteredProductPrice=''
                this.enteredProductSize=''
                this.enteredProductDate=''
                this.enteredProductDetail=''
                this.brand=''
                this.color=''
        },

        saveProduct(){
            let products = {
                productName: this.enteredProductName,
                productType: this.enteredProductType,
                productPrice: this.enteredProductPrice,
                productSize: this.enteredProductSize,
                productDate: this.enteredProductDate,
                productDetail: this.enteredProductDetail,
                brand: this.brand,
                color: this.color
            };
            this.$emit("save-product", products);
        },

        validateProductName(){
            this.invalidProductName = this.enteredProductName === '' ? true : false
            console.log(`productName: ${this.invalidProductName}`);
        },

        validateProductType(){
            this.invalidProductType = this.enteredProductType === '' ? true : false
            console.log(`productType: ${this.invalidProductType}`);
        },

        validateProductPrice(){
            this.invalidProductPrice = this.enteredProductPrice === '' ? true : false
            console.log(`productPrice: ${this.invalidProductPrice}`);
        },

        validateProductSize(){
            this.invalidProductSize = this.enteredProductSize === '' ? true : false
            console.log(`productSize: ${this.invalidProductSize}`);
        },

        validateProductDate(){
            this.invalidProductDate = this.enteredProductDate === '' ? true : false
            console.log(`productDate: ${this.invalidProductDate}`);
        },

        validateProductDetail(){
            this.invalidProductDetail = this.enteredProductDetail === '' ? true : false
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

        showData(oldAdd){
            this.isEdit = true
            this.editId = oldAdd.id
            this.enteredProductName = oldAdd.productName
            this.enteredProductType = oldAdd.productType
            this.enteredProductPrice = oldAdd.productPrice
            this.enteredProductSize = oldAdd.productSize
            this.enteredProductDate = oldAdd.productDate
            this.enteredProductDetail = oldAdd.productDetail
            this.brand = oldAdd.brand
            this.color = oldAdd.color
        },


        
    },
}
</script>