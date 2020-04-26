import React from 'react';
import axios from 'axios';
import Cardview from './Card';
import '../App.css'

class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/donees')
            .then((res) => this.setState({ users: res.data }))
            .catch((err) => console.log(err))
    }

    render() {

        return (
            <div className="container-lg mt-3 mb-3">
                <div className="d-flex flex-column align-items-center">
                    <br />
                    <br />
                    <br />

                    {this.state.users.map((cardProps) => <Cardview props={cardProps} />)}
                </div>
            </div>
        )
    }
}

export default Homepage;