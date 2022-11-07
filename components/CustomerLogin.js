import React, { Component } from 'react'
import './CustomerLogin.css'
import { Link } from 'react-router-dom'
import CustomerService from '../../services/CustomerService';
class CustomerLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Customer: [],
            username: '',
            password: '',
            cus: '',
        }

        this.changeCustomerUsername = this.changeCustomerUsername.bind(this);
        this.changeCustomerPassword = this.changeCustomerPassword.bind(this);
        this.validateUser = this.validateUser.bind(this);
    }

    changeCustomerUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    changeCustomerPassword = (event) => {
        this.setState({ password: event.target.value })
    }

    validateUser = (e) => {
        e.preventDefault();
        let find = 0;
        for (let i = 0; i < this.state.cus.length; i++) {

            if ((this.state.username === this.state.cus[i].username) && (this.state.password === this.state.cus[i].password)) {

                alert(" welcome " + this.state.cus[i].customerFirstName + " " + this.state.cus[i].customerLastName);
                find = 1;
                this.props.history.push("/FoodItem");
            }
        }
        if (find === 0) {
            alert("Inavlid Username or Password");
        }


    }

    componentDidMount() {
        let Customer = { username: this.state.username, password: this.state.password }
        console.log(this.state.username)
        console.log('Customer =>' + JSON.stringify(Customer));
        CustomerService.getAllCustomer().then((res) => {
            this.setState({ Customer: res.data })
            this.state.cus = (res.data);
            console.log(this.state.cus);

        })
    }



    render() {

        return (
            <div className='wholeBody2'>
                <div className="container2" id="container2">
                    <div className="form-container2 sign-in-container2">
                        <form >
                            <h1>Customer Login Page</h1>
                            <div style={{ margin: '30px 0' }}>
                                <input type="text" placeholder="Username" style={{marginBottom:'30px'}} name="username" value={this.state.username} onChange={this.changeCustomerUsername} />
                                <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.changeCustomerPassword} />
                            </div>
                            <button onClick={this.validateUser}>Login</button>

                            {/* <button >Back to Home page</button> */}
                        </form>
                    </div>

                </div>
                <div classNameName="form-group" >

                    <div ><Link className="card-link" to="/CustomerRegister"><button type="button" className="btn  btn-link btn-block">New User? Register Now!</button></Link>  </div>
                </div>

            </div>

        )

    }

}
export default CustomerLogin;