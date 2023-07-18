import { Dropdown } from 'react-bootstrap';

export default function Selector(props) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Platforms
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    props.choices.map((choice) => {
                        return (
                            <Dropdown.Item onClick={props.handleSelect} key={choice}>{choice}</Dropdown.Item>
                        )
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}