import Table from 'react-bootstrap/Table';

export default function Tableau(props) {
    const data = JSON.parse(JSON.parse(props.data));
    const workbooks = data.tsResponse.workbooks.workbook;
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Workbook Name</th>
                        <th>Content URL</th>
                    </tr>
                    {
                        workbooks.map((workbook) => {
                            const attributes = workbook._attributes;
                            return (
                                <tr key={attributes.id}>
                                    <td>{attributes.name}</td>
                                    <td><a href={attributes.webpageUrl}>{attributes.webpageUrl}</a></td>
                                </tr>
                            )
                        })
                    }
                </thead>
            </Table>
        </div>
    )
}