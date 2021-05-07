import axios from "axios";

const API_URL = "http://localhost:9000";

class ProductService {
    retrieveAllProduct() {
        return axios.get(`${API_URL}/product`);
    }
    retriveProductImage(){
        return axios.get(`${API_URL}/product`);
    }
}

export default new ProductService();