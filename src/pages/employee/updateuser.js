import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const UpdateUser = () => {  
    const { id } = useParams();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: ''
    });

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employees/editEmployee/${id}`);
                
                const data = await response.json();
                setFormData(data);
                console.log("employee", data);
            } catch (error) {
                console.log("error", error);
            }
        }
        fetchEmployee();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/employees/updateEmployee/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log("Updated employee", data);
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <>
            <div className="center-form">
                <h1>Edit Employee</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100"> Post Employee</Button>
                </Form>
            </div>
        </>
    );
};

export default UpdateUser;