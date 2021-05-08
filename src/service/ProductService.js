import axios from "axios";

// const API_URL = "http://localhost:9000";

// class ProductService {
//     retrieveAllProduct() {
//         return axios.get(`${API_URL}/product`);
//     }


// }

// export default new ProductService();

export default axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-type": "application/json",
    }
});