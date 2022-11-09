import React, { Component } from 'react'
import './FoodOfRestaurant.css'

import LoanDetailsService from '../../services/LoanService'
import Loan from '../Loan'
import HeaderAfterLoginR from '../HeaderAfterLoginR'
import FoodOfRestaurant from './FoodOfRestaurant'


class Loan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: []
        }
        console.log("from constructor");
        
         this.addingTry = this.addingTry.bind(this);
    }
    

    componentDidMount() {
        LoanService.getAllLoan().then((res) => {
            this.setState({ loans: res.data })
            console.log(this.state.loans);


        })
        console.log(this.state.loans);

    }

    addingTry = (e) => {
        this.props.history.push("/addLoans");
    }



    render() {
        // console.log("from render");
        // const foodList = this.state.foods
        // localStorage.setItem("foodList", JSON.stringify(foodList));
        
        return (

            <div className='wholebodyLoan'>
            <HeaderAfterLoginR />
                <h1>Loan Details</h1>
                <div style={{margin:'50px'}}>
                    <div className='now' style={{ display: 'flex',flexWrap: 'wrap'}}>
                        {
                            this.state.loans.map(loan => {
                                return <FoodOfRestaurant key={food.foodItemId} dif={food.foodItemId} wholeDetail={food} name={food.foodItemName} price={food.foodItemPrice} type={food.foodItemType} category={food.foodItemCategory}/>
                            })
                        }
                    </div>
                </div>
                <button onClick={this.addingTry}>Add new Loan</button>
            </div>
        )

    }

}
export default FoodItem;