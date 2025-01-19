import { useEffect,useState } from "react";
import { Col, Container,Row,Table,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Dashboard = () => {

    const[employees,setEmployees]=useState([]);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
     const headers={}
    
    useEffect(()=>{ 
        const fetchEmployees = async () => {
            try {
                console.log(`process.env.REACT_APP_API_URL: ${process.env.REACT_APP_API_URL}`);
                
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL || "https://apimanagement-git-shivathebravo21114-dev.apps.rm3.7wse.p1.openshiftapps.com/api/employees/all"}`,
                    {
                        headers: {
                            // Add custom headers here if needed
                            "Content-Type": "application/json",
                        },
                    }
                );

                console.log("Response Data:", response.data);
                setEmployees(response.data);
            } catch (error) {
                console.error("Error fetching employees:", error.message);
                setError(error.message);
            }
        };
        fetchEmployees();

    },[])

    const handleDelete = async (id) => {    
        try{
            const response = await fetch(`${process.env.REACT_APP_API_URL}/deleteEmployee/${id}`,{
                method:"DELETE",
                
            });
            
            if(response.ok){
                setEmployees((prevEmployees) => prevEmployees.filter((employee)=>employee.id !== id));
            }
           
        }catch(error){
            console.log("error",error);
        }
    }

    const handleUpdate = async (id) => {
        navigate(`/employee/${id}`);
    }

  return (
   <>
   <Container className="mt-5">
     <Row>
        <Col>
         <h1 className="text-center">Employee</h1>
         <Table striped bordered hover responsive>
            <thead> 
                <tr>
                    <th> Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee)=>(
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstname}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.email}</td>
                        <td> <Button variant="primary" onClick={()=>handleUpdate(employee.id)}>Update</Button></td>
                        <td> <Button variant="danger" onClick={()=>handleDelete(employee.id)}> Delete</Button></td>
                    </tr>
                ))}
            </tbody>
            

         </Table>
        </Col>
     </Row>
    </Container>
   </>
  );
}
export default Dashboard;