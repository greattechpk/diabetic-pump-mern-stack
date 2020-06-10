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
            insulinType: '',
            activeInsulin: 0
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

    onChangeNum = (evt) => {
        const newState = { ...this.state }
        newState.form[evt.target.name] = parseInt(evt.target.value)
        
        this.setState(newState)
        if(evt.target.name === "bloodGlucose"){
            this.calcBg()
            this.calcTotal()
        }
        if(evt.target.name === "totalCarbs"){
            this.calcFood()
            this.calcTotal()
        }
        console.log(this.state)
    }

    calcFood = () => {
        const tCarbs = this.state.form.totalCarbs
        const newState = {...this.state}
        newState.form.totalFoodDelivery = tCarbs / this.state.settings.carbRatio
        document.getElementById('totalFoodDelivery').textContent = newState.form.totalFoodDelivery
        this.setState(newState)
    }

    calcBg = () => {
        const bg = this.state.form.bloodGlucose
        let tc = this.state.form.totalCorrection
        let fc = this.state.form.fixedCorrection
        const newState = {...this.state}
        tc = (bg - this.state.settings.correctionSubtract) / this.state.settings.correctionDivisor
        fc = tc - this.state.settings.activeInsulin
        document.getElementById('totalCorrection').textContent = tc
        document.getElementById('fixedCorrection').textContent = fc
        newState.form.totalCorrection = tc
        newState.form.fixedCorrection = fc
        this.setState(newState)
    }
    calcTotal = () => {
        const newState = {...this.state}
        newState.form.totalDelivery = newState.form.fixedCorrection + newState.form.totalFoodDelivery
        document.getElementById('totalDelivery').textContent = newState.form.totalDelivery
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <form>
                    <h3>Correction</h3>
                    <div className='form-group'>
                        <label htmlFor='bloodGlucose'>Blood Glucose</label>
                        <input type="number" name="bloodGlucose" onChange={this.onChangeNum}/>
                    </div>
                    <div className='form-group'>
                        <span className='form-entry-label'>Total Correction:</span>
                        <span id='totalCorrection' className='automated'>0</span>
                    </div>
                    <div className='form-group'>
                        <span className='form-entry-label'>Fixed Correction:</span>
                        <span id='fixedCorrection' className='automated'>0</span>
                    </div>
                    <h3>Carbs</h3>
                    <div className='form-group'>
                        <label htmlFor='totalCarbs'>Total Carbs</label>
                        <input type="number" name="totalCarbs" onChange={this.onChangeNum}/>
                    </div>
                    <div className='form-group'>
                        <span className='form-entry-label'>Total Food Delivery:</span>
                        <span id='totalFoodDelivery' className='automated'>0</span>
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
                        <span className='form-entry-label'>Total Delivery:</span>
                        <span id='totalDelivery' className='automated'>0</span>
                    </div>
                    <input type="submit" value="Create" />
                </form>
            </div>
        )
    }
}