import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoanService from "../services/LoanService";
import '../css/StyleLink.css';

export class ListLoanComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loans: []
        }
    }
    
    componentDidMount(){
        LoanService.getAllLoans().then ((res) =>{
            console.log(res.data);
            this.setState({loans : res.data});
        })
    }

    deleteLoan(loanId){
        LoanService.deleteLoan(loanId).then(res =>{
            this.setState({loans:this.state.loans.filter(loan => loan.loanId !== loanId)});
        })
    }

    updateLoan(loanId){
            
    }

    render(){
        return(
            <>
                <h2 className =  "text-center">Loans List</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Loan Type</th>
                                <th>Loan Term</th>
                                <th>Loan Amount</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                              {
                                this.state.loans.map(
                                    Loan =>
                                    <tr key={loan.loanId}>
                                        <td>{loan.loanType}</td>
                                        <td>{loan.loanTerm}</td>
                                        <td>{loan.loanAmount}</td>
                                        <td>
                                        <button type="button" className="btn btn-success" style={{marginRight:"10px"}}>
                                           <Link to={"/updateloan/" + loan.loanId} className="stylelink">
                                                update
                                            </Link>
                                        </button>
                                        <button className="btn btn-danger" onClick={()=>this.deleteLoan(loan.loanId)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                              }
                            </tbody>
                    </table>
                </div>
            </>
        )
    }

}