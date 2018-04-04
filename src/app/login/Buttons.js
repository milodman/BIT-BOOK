import React, {Component} from 'react'


class Buttons extends Component {
    constructor(props){
        super(props)
this.state = {
    value:''
}
    }

    handleState = (event) => {
        const type = event.target.id;

        this.setState({
            value: type
        })

        this.props.onCreatePost(type)
    }

    render(){
        return(
            <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a onClick={this.handleState} className="nav-link" id="login-tab" data-toggle="tab" href="#login" onClick={this.handleState} role="tab" aria-controls="login" aria-selected="false">Login</a>
                </li>
                <li className="nav-item">
                    <a onClick={this.handleState} className="nav-link" id="register-tab" data-toggle="tab" href="#register" onClick={this.handleState} role="tab" aria-controls="register" aria-selected="false">Register</a>
                </li>
            </ul>
            </div>
        )
    }
}

export default Buttons