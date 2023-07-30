import { Button, Container, Form, InputGroup } from "react-bootstrap";

const HeroSearch = () => {
    return (
        <div
            className="py-5"
            style={{
                backgroundColor: '#4287f5'
            }}>
            <Container>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Makanan paling enak di alam semesta"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="rounded-pill"
                            />
                            <Button id="basic-addon2" className="btn-cool-blues rounded-pill">
                                <i className="bi bi-search" style={{fontSize: '0.8rem'}}></i>
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeroSearch;