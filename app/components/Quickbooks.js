import Table from 'react-bootstrap/Table';

export default function Quickbooks(props) {
    const data = JSON.parse(props.data)
    if (data.hasOwnProperty("fault")) {
        return (
            <div>
                <h1>Quickbooks Error</h1>
                <p>{data.fault.error[0].message}</p>
            </div>
        )
    }
    const columns = data.Columns.Column.map((column) => {
        return (column.ColType === "Account") ? "Account": column.ColTitle
    })
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        {
                            columns.map((column) => {
                                return (
                                    <th key={column}>{column}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.Rows.Row.map((row) => {
                            if (row.Summary) {
                                return (
                                    <tr key="total">
                                        {
                                            row.Summary.ColData.map((colData) => {
                                                return (
                                                    <td key={colData.value}>{colData.value}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            } else
                            return (
                                <tr key={row.ColData[0].id}>
                                    {
                                        row.ColData.map((colData) => {
                                            return (
                                                <td key={colData.value}>{colData.value}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                    })
                }
                </tbody>
            </Table>
        </div>
    )
}