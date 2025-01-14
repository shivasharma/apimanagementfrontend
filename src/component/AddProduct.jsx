import React from 'react'
import ProductService from '../service/product.service';

function AddProduct() {

    const [product, setProduct] = React.useState({
        productName: "",
        description: "",
        price: "",
        status: ""
    });

    const[msg, setMsg]=React.useState('')

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    };


    const ProductRegister = (e) => {
        e.preventDefault();
        console.log(product);
        ProductService.saveProduct(product).then((res) => {
            setMsg("Product Added Successfully");
            setProduct({
                productName: "",
                description: "",
                price: "",
                status: ""
            });
            })
            .catch((err) => {
                console.log(err);
            });
    };
   

    return (
        <>

            <div className="container">
                <div className="row">
                    <h1 className="text-center my-3">Add Product</h1>{
                        msg && <h3 className="text-center text-success my-3">{msg}</h3>
                    }

                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">
                                Add Product
                            </div>
                            <div className="card-body">
                                <form onSubmit={(e) => ProductRegister(e)}>
                                    <div className="mb-3">
                                        <label> Enter Product Name</label>
                                        <input type="text"
                                            name="productName"
                                            className="form-control"
                                            onChange={(e => handleChange(e))} 
                                            value={product.productName}
                                            />
                                    </div>
                                    <div className="mb-3">
                                        <label> Enter Description Name</label>
                                        <input type="text" name="description" className="form-control"
                                            onChange={(e => handleChange(e))} 
                                            value={product.description}
                                            />
                                    </div>
                                    <div className="mb-3">
                                        <label> Enter Price</label>
                                        <input type="text" name="price" className="form-control"
                                            onChange={(e => handleChange(e))}
                                            value={product.price}
                                            />
                                    </div>
                                    <div className="mb-3">
                                        <label> Enter Status</label>
                                        <input type="text" name="status" className="form-control"
                                            onChange={(e => handleChange(e))}
                                            value={product.status}
                                            />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Add Product</button>
                                    <button type="reset" className="btn btn-danger">Clear</button>
                                </form>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}

export default AddProduct