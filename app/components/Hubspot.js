import Table from 'react-bootstrap/Table';

export default function Hubspot(props) {
    const data = JSON.parse(props.data);
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Deal Name</th>
                    <th>Deal Stage</th>
                    <th>Amount</th>
                    <th>Close Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.results.map((result) => {
                            return (
                                <tr key={result.id}>
                                    <td>{result.properties.dealname}</td>
                                    <td>{result.properties.dealstage}</td>
                                    <td>{result.properties.amount}</td>
                                    <td>{new Date(Date.parse(result.properties.closedate)).toDateString()}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}