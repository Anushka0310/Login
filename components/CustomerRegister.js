import React, { Component } from 'react'
import './CustomerRegister.css'
import CustomerService from '../../services/CustomerService'


class CustomerRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerFirstName: '',
            customerMiddleName:'',
            customerLastName:'',
            customerPhoneNumber:'',
            customerEmail:'',
            customerGender:'',
            customerHouseNumber:'',
            customerStreet:'',
            customerCity:'',
            customerCountry:'',
            customerDateOfBirth:'',
            customerAge:0,
            username:'',
            password:''
          }

        this.changeCustomerFirstName = this.changeCustomerFirstName.bind(this);
        this.changeCustomerMiddleName = this.changeCustomerMiddleName.bind(this);
        this.changeCustomerLastName = this.changeCustomerLastName.bind(this);
        this.changeCustomerDateOfBirth = this.changeCustomerDateOfBirth.bind(this);
        this.changeCustomerAge = this.changeCustomerAge.bind(this);
        this.changeCustomerGender = this.changeCustomerGender.bind(this);
        this.changeCustomerEmail = this.changeCustomerEmail.bind(this);
        this.changeCustomerPhoneNumber = this.changeCustomerPhoneNumber.bind(this);
        this.changeCustomerHouseNumber = this.changeCustomerHouseNumber.bind(this);
        this.changeCustomerStreet = this.changeCustomerStreet.bind(this);
        this.changeCustomerCity = this.changeCustomerCity.bind(this);
        this.changeCustomerCountry = this.changeCustomerCountry.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.registerCustomer = this.registerCustomer.bind(this);

    }

    changeCustomerFirstName =(event)=>{
        this.setState({customerFirstName:event.target.value})
      }
      changeCustomerMiddleName =(event)=>{
        this.setState({customerMiddleName:event.target.value})
      }
      changeCustomerLastName =(event)=>{
        this.setState({customerLastName:event.target.value})
      }
      changeCustomerDateOfBirth =(event)=>{
        this.setState({customerDateOfBirth:event.target.value})
      }
      changeCustomerAge =(event)=>{
        this.setState({customerAge:event.target.value})
      }
      changeCustomerGender =(event)=>{
        this.setState({customerGender:event.target.value})
      }
      changeCustomerEmail =(event)=>{
        this.setState({customerEmail:event.target.value})
      }
      changeCustomerPhoneNumber =(event)=>{
        this.setState({customerPhoneNumber:event.target.value})
      }
      changeCustomerHouseNumber =(event)=>{
        this.setState({customerHouseNumber:event.target.value})
      }
      changeCustomerStreet =(event)=>{
        this.setState({customerStreet:event.target.value})
      }
      changeCustomerCity =(event)=>{
        this.setState({customerCity:event.target.value})
      }
      changeUsername =(event)=>{
        this.setState({username:event.target.value})
      }
      changePassword =(event)=>{
        this.setState({password:event.target.value})
      }
      changeCustomerCountry=(event)=>{
        this.setState({customerCountry:event.target.value})
      }

      registerCustomer=(e)=>{
        e.preventDefault()
          let register = {
            customerFirstName:this.state.customerFirstName,
            customerMiddleName:this.state.customerMiddleName,
            customerLastName:this.state.customerLastName,
            customerPhoneNumber:this.state.customerPhoneNumber,
            customerEmail:this.state.customerEmail,
            customerGender:this.state.customerGender,
            customerHouseNumber:this.state.customerHouseNumber,
            customerStreet:this.state.customerStreet,
            customerCity:this.state.customerCity,
            customerCountry:this.state.customerCountry,
            customerDateOfBirth:this.state.customerDateOfBirth,
            customerAge:this.state.customerAge,
            username:this.state.username,
            password:this.state.password
            }
          
          console.log('register =>' +JSON.stringify(register));
          CustomerService.createCustomer(register).then(res =>{
              alert("You registered successfully")
              this.props.history.push("/CustomerLogin");
             })
        }
      


    render() {
        return (
            <div className='wholeBodyfordiv'>
                <div className="containerfordiv" id="containerfordiv">
                    <div className="form-containerfordiv sign-up-containerfordiv">
                    < h1  >Create Customer Account</h1>
                        <form action="#">
                            
                            <h6></h6>
                            <div className="names"  >
                                <input type="text" placeholder="First name" style={{ width: '25%' }} name="customerFirstName" value={this.state.customerFirstName} onChange={this.changeCustomerFirstName}/>
                                <input type="text" placeholder="Middle name" style={{ width: '20%', margin: ' 0 12px' }}  name="customerMiddleName" value={this.state.customerMiddleName} onChange={this.changeCustomerMiddleName}/>
                                <input type="text" placeholder="Last name" style={{ width: '25%' }} name="customerLastName" value={this.state.customerLastName} onChange={this.changeCustomerLastName}/>
                            </div>
                            <h6></h6>
                            <div className="names">
                                <input type="date" placeholder="Date of Birth" style={{ width: '28%' }} name="customerDateOfBirth" value={this.state.customerDateOfBirth}  onChange={this.changeCustomerDateOfBirth}/>
                              
                                <input type="number" placeholder="Age" style={{ width: '22%', margin: ' 0 12px' }} name="customerAge" value={this.state.customerAge}  onChange={this.changeCustomerAge}/>
                                <input type="text" placeholder="Gender" style={{ width: '28%' }} name="customerGender" value={this.state.customerGender} onChange={this.changeCustomerGender}/>
                            </div> 
                             <div className="try">
                                <input type="email" placeholder="Email" style={{ width: '25%' }} name="customerEmail" value={this.state.customerEmail} onChange={this.changeCustomerEmail}/>
                                <input type="number" placeholder="phone number" style={{ width: '25%', marginLeft: '20px', marginBottom: '10px' }} name="customerPhoneNumber" value={this.state.customerPhoneNumber} onChange={this.changeCustomerPhoneNumber}/>
                            </div>
                           
                            <h3 style={{margin: '0'}}>Address:</h3>
                            <div style={{display:'flex',justifyContent:'space-between'}} >
                                <input type="text" placeholder="House number" style={{width:'45%'}} name="customerHouseNumber" value={this.state.customerHouseNumber} onChange={this.changeCustomerHouseNumber}/>
                                <input type="text" placeholder="street name" style={{width:'45%',marginLeft:'20px'}} name="customerStreet" value={this.state.customerStreet}  onChange={this.changeCustomerStreet}/>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <input type="text" placeholder="city name" style={{width:'45%'}}  name="customerCity" value={this.state.customerCity}  onChange={this.changeCustomerCity}/>
                                <input type="text" placeholder="country name" style={{width:'45%',marginLeft:'20px'}} name="customerCountry" value={this.state.customerCountry}  onChange={this.changeCustomerCountry}/>
                            </div>
                            <h3 style={{margin: '0'}}>Login Credentials:</h3>
                            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'20px'}}>
                                <input type="text" placeholder="Username" style={{ width:'45%',}} name="username" value={this.state.username}  onChange={this.changeUsername}/>
                                <input type="text" placeholder="Password" style={{ width:'45%' ,marginLeft:'20px'}}name="password" value={this.state.password}  onChange={this.changePassword}/>
                            </div>
                            <button onClick={this.registerCustomer}>Sign Up</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default CustomerRegister;