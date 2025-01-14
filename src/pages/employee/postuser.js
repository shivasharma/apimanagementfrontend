
import { Form,Button,Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Postuser=()=>{

    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
               
    });

    const handleInputChange = (e) => {
            const{name,value}=e.target;
            setFormData({
                ...formData, [name]: value
            })
    }
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try{
           const response = await fetch(`${process.env.REACT_APP_API_URL}/save`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(formData)
            });
            const data = await response.json();
            navigate("/");
            console.log("employee posted",data);
    }catch(error){  
        console.log("error",error);
    }
}

    return(
        <>
         <Container className="mt-5">
         <div className="center-form">
            <h1>Post New Employee</h1>
         <Form onSubmit={handleSubmit}>
         <Form.Group  controlId="formBasicName">   
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter First Name" 
            name="firstname"
            value={formData.firstname} 
            onChange={handleInputChange}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicName">   
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter Last Name" 
            name="lastname"
            value={formData.lastname} 
            onChange={handleInputChange}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicName">   
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter Email" 
            name="email"
            value={formData.email} 
            onChange={handleInputChange}/>
         </Form.Group>
         <Button variant="primary" type="submit"className="w-100"> Post Employee</Button>
         </Form>
         </div>
         </Container>
        </>
       
    )
}


export default Postuser; 