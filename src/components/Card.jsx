import React from 'react';
import { Card, ProgressBar, Button } from 'react-bootstrap';
import '../App.css'

const Cardview = (props) => {
    return (
        
        <div>
            {console.log()}
            <Card border={'secondary'} style={{ width: '30rem' }}>
                <Card.Img variant="top" src={props.props.img_url}/>
                <Card.Body>
                    <Card.Title>{props.props.name}</Card.Title>
                    <Card.Text>
                        {props.props.description}
                    </Card.Text>
                    <ProgressBar striped variant="info" now={props.props.donations / props.props.needed * 100} />
                    <br />
                    <Card.Text>
                        {`$` + props.props.donations + ` out of $` + props.props.needed + ` donated!`}
                    </Card.Text>
                    <Button variant="primary">Donate!</Button>
                </Card.Body>
            </Card>
            <br />
        </div>

    )
}

export default Cardview;