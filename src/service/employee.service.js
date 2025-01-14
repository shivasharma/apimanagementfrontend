import axios from 'axios';
import axiosInstance from '../component/axiosInstance';
const API_URL = 'http://backend:8080';

class ProductService{

     saveProduct = async (product) => {
        try {
          const response = await fetch(API_URL + "/saveProduct", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log("Product saved successfully:", data);
        } catch (error) {
          console.error("There was an error saving the product:", error.message);
        }
      };
      
      getAllProduct = async () => {
        try {
          console.log(API_URL);
          const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            credentials: 'include' // Use 'include' if sending cookies or credentials
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log("Products fetched successfully:", data);
          return data;
        } catch (error) {
          console.error("Network error or no response received:", error.message);
        }
      };
    getProductById(id){
        return axios.get(API_URL + '/'+id);
    }

    deleteProduct(id){
        return axios.delete(API_URL + '/deleteProduct/'+id);
    }   

    editProduct(product){
        return axios.post(API_URL + '/editProduct/'+ product.id,product);
    }
}

export default  new ProductService;