
import ProductService from '../service/product.service';
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {

const [productList,setProductList] = useState([]);
const [error, setError] = useState(null);
useEffect(() => {
    init()
  }, []);
  
  const deleteProduct = (id) => {
      ProductService.deleteProduct(id)
    .then((data) => {
        init();
        })
    .catch((err) => {
            console.error("Error fetching product list:", err);
            setError(err.message);
          });
}

const init=() => {
    ProductService.getAllProduct()
    .then((data) => {
      console.log("Fetched data:", data); // Log the fetched data
      setProductList(data); // Adjust according to your API structure
    })
    .catch((err) => {
      console.error("Error fetching product list:", err);
      setError(err.message);
    });

}

  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header fs-3 text-center">
                        <h2 className="text-center">All Product List</h2>
                    </div>
                    <div className="card-body">
                    <table class="table">
                        <thead>
                            {<tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                            </tr>}
                        </thead>
                        <tbody>
                                {productList && productList.length > 0 ? (
                                    productList.map((p, num) => (
                                        <tr key={num}> {/* Add a unique key for each row */}
                                            <td>{num + 1}</td>
                                            <td>{p.productName}</td>
                                            <td>{p.description}</td>
                                            <td>{p.price}</td>
                                            <td>{p.status}</td>
                                            <td>
                                                <Link to={'editProduct/'+p.id} className="btn btn-sm btn-primary m-1 "> Edit</Link>
                                                <button onClick={()=>deleteProduct(p.id)} className="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No products available.</td> {/* Message when no products are found */}
                                    </tr>
                                )}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home