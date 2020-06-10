import React, { Component } from 'react'
import axios from 'axios'

export default class NewInsulin extends Component {
    state = {
        form: {
            bloodGlucose: 100,
            totalCorrection: 0,
            fixedCorrection: 0,
            foodItems: [],
            totalCarbs: 0,
            totalFoodDelivery: 0,
            deliveryType: 'Both',
            totalDelivery: 0
        },
        settings: {
            carbRatio: 0,
            correctionSubtract: 0,
            correctionDivisor: 0,
            insulinType: ''
        }
    }

    componentDidMount = async () => {
        try {
            let data = await axios.get('/api/settings')
            data = data.data[0]
            const newState = { ...this.state }
            Object.keys(newState.settings).forEach(kv => {
                newState.settings[kv] = data[kv]
            })
            this.setState(newState)
            console.log(this.state)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <form>
                    <h3>Correction</h3>
                    <div className='form-group'>
                        <label htmlFor='bloodGlucose'>Blood Glucose</label>
                        <input type="number" name="bloodGlucose" />
                    </div>
                    <div className='form-group'>
                        <span className='form-entry-label'>Fixed Correction</span>
                        <span id='fixedCorrection' className='automated'></span>
                    </div>
                    <div className='form-group'>
                        <span className='form-entry-label'>Total Correction</span>
                        <span id='totalCorrection' className='automated'></span>
                    </div>
                    <h3>Carbs</h3>
                    <div className='form-group'>
                        <label htmlFor='totalCarbs'>Total Carbs</label>
                        <input type="number" name="totalCarbs" />
                    </div>
                    <div className='form-group'>
                        <span className='form-entry-label'>Total Food Delivery</span>
                        <span id='totalFoodDelivery' className='automated'></span>
                    </div>
                    <h3>Delivery Summary</h3>
                    <div className='form-group'>
                        <select name="deliveryType" id="deliveryTypeDD">
                            <option value="both">Both</option>
                            <option value="food">Food Delivery</option>
                            <option value="correction">Correction</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <span className='form-entry-label'>Total Delivery</span>
                        <span id='totalDelivery' className='automated'></span>
                    </div>
                    <input type="submit" value="Create" />
                </form>
            </div>
        )
    }
}