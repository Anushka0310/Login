import React, { Component } from "react";
import LoanService from "../services/LoanService";

export class AddLoanComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loanType: '',
            loanTerm: '',
            loanAmount: '',
        }

        this.changeLoanTypeHandler = this.changeLoanTypeHandler.bind(this);
        this.changeLoanTermHandler = this.changeLoanTermHandler.bind(this);
        this.changeLoanAmountHandler = this.changeLoanAmountHandler.bind(this)

        this.saveLoan = this.saveLoan.bind(this)


    }

    saveLoan = (e) => {
        e.preventDefault();
        let loan = {
            loanType: this.state.loanType,
            loanTerm: this.state.loanTerm,
            loanAmount: this.state.loanAmount
        }
        console.log('loan =>' + JSON.stringify(loan))
        LoanService.createLoan(loan).then(res => {
            alert("Loan added successfully....")
        })
        this.props.history.push("/listLoan");
    }

    cancel(){
        alert("leaving with out saving.....")
    }

    changeLoanTypeHandler(event){
        this.setState({loanType:event.target.value})
    }

    changeLoanTermHandler(event){
        this.setState({loanTerm:event.target.value})
    }

    changeLoanAmountHandler(event){
        this.setState({loanAmount:event.target.value})
    }

    render() {
        return (
            <div>
                <br ></br>
                <div className="container">
                    <div>
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Add Loan</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                  <label >Loan Name</label>
                                  <input type="text" name="loanType" id="" className="form-control" placeholder="Enter LoanType" 
                                   value={this.state.loanType} onChange={this.changeLoanTypeHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Loan Term</label>
                                  <input type="text" name="loanTerm" id="" className="form-control" placeholder="Enter LoanTerm" 
                                   value={this.state.loanTerm} onChange={this.changeLoanTermHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Loan Amount</label>
                                  <input type="text" name="loanAmount" id="" className="form-control" placeholder="Enter LoanAmount" 
                                   value={this.state.loanAmount} onChange={this.changeLoanAmountHandler} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.saveLoan}>Create</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}