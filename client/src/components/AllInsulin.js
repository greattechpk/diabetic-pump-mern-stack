import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default class AllInsulin extends Component {
    state = {
        data: []
    }

    componentDidMount = async () => {
        try{
            let data = await axios.get('/api')
            data = data.data
            console.log(data)
            this.setState({data: data})
            console.log(this.state)
        }catch(err){
            console.log(err)
        }
        
    }

    render() {
        return (
            <Router>
            <div>
                <h1>All Insulin</h1>
                {this.state.data.map(delivery =>{
                    return(
                        <div class="single-item-container">

                        <div class="insulin-item">
                            <div class="item-group">
                                <div class="item">
                                    <div class="label">Blood Glucose</div>
                                    <div class="data">{delivery.bloodGlucose}</div>
                                </div>
                                <div class="item">
                                    <div class="label">Correction</div>
                                    <div class="data long">{delivery.fixedCorrection}u</div>
                                </div>
                            </div>
                            <div class="item-group">
                                <div class="item">
                                    <div class="label">Total Carbs</div>
                                    <div class="data">{delivery.totalCarbs}g</div>
                                </div>
                                <div class="item">
                                    <div class="label">Food Delivery</div>
                                    <div class="data">{delivery.totalFoodDelivery}u</div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="label">Delivery Type</div>
                                <div class="data d-type">{delivery.deliveryType}</div>
                            </div>
                            <div class="item">
                                <div class="label">Delivery Time</div>
                                <div class="data date">{delivery.deliveryTime}</div>
                            </div>
                        </div>
                        <div class="container">
                            <Link class="viewbtn" to={delivery._id}>
                                <button>
                                    View
                                </button>
                            </Link>
                            <div class="item total-delivery">
                                <div class="label">Total</div>
                                <div class="data totald">{delivery.totalDelivery}u</div>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
            </Router>
        )
    }
}
