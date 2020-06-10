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
                        <div className="single-item-container" key={delivery._id}>

                        <div className="insulin-item">
                            <div className="item-group">
                                <div className="item">
                                    <div className="label">Blood Glucose</div>
                                    <div className="data">{delivery.bloodGlucose}</div>
                                </div>
                                <div className="item">
                                    <div className="label">Correction</div>
                                    <div className="data long">{delivery.fixedCorrection}u</div>
                                </div>
                            </div>
                            <div className="item-group">
                                <div className="item">
                                    <div className="label">Total Carbs</div>
                                    <div className="data">{delivery.totalCarbs}g</div>
                                </div>
                                <div className="item">
                                    <div className="label">Food Delivery</div>
                                    <div className="data">{delivery.totalFoodDelivery}u</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="label">Delivery Type</div>
                                <div className="data d-type">{delivery.deliveryType}</div>
                            </div>
                            <div className="item">
                                <div className="label">Delivery Time</div>
                                <div className="data date">{delivery.deliveryTime}</div>
                            </div>
                        </div>
                        <div className="container">
                            <Link className="viewbtn" to={delivery._id}>
                                <button>
                                    View
                                </button>
                            </Link>
                            <div className="item total-delivery">
                                <div className="label">Total</div>
                                <div className="data totald">{delivery.totalDelivery}u</div>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
            </Router>
        )
    }
}
