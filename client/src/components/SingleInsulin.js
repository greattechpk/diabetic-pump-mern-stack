import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default class SingleInsulin extends Component {
    state={
        data:{}
    }

    
    async componentDidMount(){
        let getter =  this.props.match.params.id
        try{
            const res = await Axios.get(`/api/${getter}`)
            console.log(res.data)
            res.data.totalDelivery = (res.data.totalDelivery).toFixed(3)
            this.setState({data:res.data})
            console.log(this.state)
        }catch (err){
            console.log(err)
        }
    }

    render() {
        return (
            <div className="all-items">
<div className="single-item-container single-insulin">
        <div className="insulin-item">
            <div className="item-group">
                <div className="item">
                    <div className="label">Blood Glucose</div>
                    <div className="data">{this.state.data.bloodGlucose}</div>
                </div>
                <div className="item">
                    <div className="label">Total Correction</div>
                    <div className="data long">{this.state.data.totalCorrection}u</div>
                </div>
                <div className="item">
                    <div className="label">Fixed Correction</div>
                    <div className="data long">{this.state.data.fixedCorrection}u</div>
                </div>
            </div>
            <div className="item-group">
                <div className="item">
                    <div className="label">Total Carbs</div>
                    <div className="data">{this.state.data.totalCarbs}g</div>
                </div>
                <div className="item">
                    <div className="label">Food Delivery</div>
                    <div className="data">{this.state.data.totalFoodDelivery}u</div>
                </div>
            </div>
            <div className="item">
                <div className="label">Delivery Type</div>
                <div className="data d-type">{this.state.data.deliveryType}</div>
            </div>
            <div className="item">
                <div className="label">Delivery Time</div>
                <div className="data date">{this.state.data.deliveryTime}</div>
            </div>
        </div>
        <div className="container">
            <Link className="viewbtn" to="/">
                <button>
                    Back to All
                </button>
            </Link>
            <div className="item total-delivery">
                <div className="label">Total</div>
                <div className="data totald">{this.state.data.totalDelivery}u</div>
            </div>
        </div>
    </div>
    </div>
        )
    }
}
