import React, { Component } from 'react'
import './ListLoanComponents.css'//css file

import LoanService from '../../services/LoanService'

class ListLoanComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loans: []
        }
        console.log("from constructor");
        }
    

    componentDidMount() {
        LoanService.getLoanDetails().then((res) => {
            this.setState({ loans: res.data })
            console.log(this.state.loans);


        })
        console.log(this.state.loans);

    }

    // addingTry = (e) => {
    //     this.props.history.push("/addfooditem");
    // }
/* 
    visitToCart =(e)=>{
        this.props.history.push("/cart");
    } */



    render() {
        // console.log("from render");
        // const foodList = this.state.foods
        // localStorage.setItem("foodList", JSON.stringify(foodList));
        
        return (

            <div className='loanbyid'>
                <h1>Loan Details</h1>
                <div style={{margin:'50px'}}>
                    <div className='now' style={{ display: 'flex',flexWrap: 'wrap'}}>
                        {
                            this.state.loans.map(loan => {
                                return <loan key={loan.loanId} dif={loan.loanId} wholeDetail={loan} type={loan.loanType} term={loan.loanTerm} amount={loan.loanAmount}/>
                            })
                        }
                    </div>
                </div>
                {/* <button onClick={this.addingTry}>Add new Food</button> */}

{/*                 <button style={{marginLeft:'30px'}}onClick={this.visitToCart}>Go to cart</button>
 */}            
 
                </div>
        )

    }

}
export default GetLoanById;