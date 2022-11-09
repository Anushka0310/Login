//import axios from "axios";
import React, { Component } from "react";
import LoanService from "../services/LoanService";

export class UpdateLoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loanId : this.props.match.params.id,
            loanType: '',
            loanTerm: '',
            loanAmount: '',
        }

        this.changeLoanTypeHandler = this.changeLoanTypeHandler.bind(this);
        this.changeLoanTermHandler = this.changeLoanTermHandler.bind(this);
        this.changeLoanAmountHandler = this.changeLoanAmountHandler.bind(this)

        this.updateLoan = this.updateLoan.bind(this)
    }

    componentDidMount(){
        LoanService.getLoan(this.state.loanId).then((res) =>{
            let loan = res.data;
            this.setState({
                loanType: loan.loanType,
                loanTerm: loan.loanTerm,
                loanAmount: loan.loanAmount,
            })
        })
    }

    updateloan = (e) => {
        e.preventDefault();
        let loan = {
            loanType: this.state.loanType,
            loanTerm: this.state.loanTerm,
            loanAmount: this.state.loanAmount
        }
        console.log('loan =>' + JSON.stringify(loan))
        loanService.updateloan(loan,this.state.loanId).then(res => {
            alert("loan updated successfully....")
        })
        this.props.history.push("/listloan");
    }

    cancel(){
        alert("leaving with out saving.....")
    }

    changeloanTypeHandler(event){
        this.setState({loanType:event.target.value})
    }

    changeloanTermHandler(event){
        this.setState({loanTerm:event.target.value})
    }

    changeloanAmountHandler(event){
        this.setState({loanAmount:event.target.value})
    }

    render() {
        return (
            <div>
                <br ></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Edit loan</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                  <label >loan Name</label>
                                  <input type="text" name="loanType" id="" className="form-control" placeholder="Enter loanType" 
                                   value={this.state.loanType} onChange={this.changeloanTypeHandler} />
                                </div>
                                <div className="form-group">
                                  <label >loan Sal</label>
                                  <input type="text" name="loanTerm" id="" className="form-control" placeholder="Enter loanTerm" 
                                   value={this.state.loanTerm} onChange={this.changeloanTermHandler} />
                                </div>
                                <div className="form-group">
                                  <label >loan Location</label>
                                  <input type="text" name="loanAmount" id="" className="form-control" placeholder="Enter loanAmount" 
                                   value={this.state.loanAmount} onChange={this.changeloanAmountHandler} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.updateloan}>Update</button>
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
