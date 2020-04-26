import React from 'react';
import { Card, ProgressBar, Button, Col } from 'react-bootstrap';
import '../App.css'

const Cardview = () => {
    return (
        <div class="container-lg mt-3 mb-3">
            <div class="d-flex flex-column align-items-center">
                {/* <div class="p-2"> */}
                    <Card border={'secondary'} style={{ width: '50%', margin: 'auto' }}>
                        <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ProgressBar now={60} />
                        <br/>
                        <Card.Text>
                               $60 out of $100 donated!
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <br/>

                    <Card border={'secondary'} style={{ width: '50%', margin: 'auto' }}>
                        <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <br/>

                    <Card border={'secondary'} style={{ width: '50%', margin: 'auto' }}>
                        <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Cardview;