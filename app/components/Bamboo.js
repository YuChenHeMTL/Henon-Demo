import Table from 'react-bootstrap/Table';

export default function Bamboo(props) {
    const data = JSON.parse(props.data);
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    {
                        data.fields.map((field) => {
                            return (
                                <th key={field.id}>{field.name}</th>
                            )
                        })
                    }
                    </tr>
                    {
                        data.employees.map((employee) => {
                            return (
                                <tr key={employee.id}>
                                    {
                                        data.fields.map((field) => {
                                            return (
                                                <td key={field.id}>{employee[field.id]}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </thead>
            </Table>
        </div>
    )
}