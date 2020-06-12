import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import FoodSearch from './FoodSearch'
import FoodSelection from './FoodSelection'

export default class NewInsulin extends Component {
    state = {
        form: {
            bloodGlucose: 100,
            totalCorrection: 0,
            fixedCorrection: 0,
            foodItems: [],
            totalCarbs: 0,
            totalFoodDelivery: 0,
            deliveryType: 'both',
            totalDelivery: 0,
            deliveryTime: ''
        },
        settings: {
            carbRatio: 0,
            correctionSubtract: 0,
            correctionDivisor: 0,
            insulinType: '',
            activeInsulin: 0
        },
        foodSearch: {
            foodItems: [],
            totalCarbs: 0
        },
        redirect: false

    }

    componentDidMount = async () => {
        try {
            let data = await axios.get('/api/settings')
            data = data.data[data.data.length -1]
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
        if (evt.target.name === "bloodGlucose") {
            this.calcBg()
            this.calcTotal()
        }
        if (evt.target.name === "totalCarbs") {
            this.calcFood()
            this.calcTotal()
        }
    }

    calcFood = () => {
        const tCarbs = this.state.form.totalCarbs
        const newState = { ...this.state }
        newState.form.totalFoodDelivery = (tCarbs + newState.foodSearch.totalCarbs) / this.state.settings.carbRatio
        document.getElementById('totalFoodDelivery').textContent = newState.form.totalFoodDelivery
        this.setState(newState)
    }

    calcBg = () => {
        const bg = this.state.form.bloodGlucose
        let tc = this.state.form.totalCorrection
        let fc = this.state.form.fixedCorrection
        const newState = { ...this.state }
        tc = (bg - this.state.settings.correctionSubtract) / this.state.settings.correctionDivisor
        fc = tc - this.state.settings.activeInsulin
        document.getElementById('totalCorrection').textContent = (tc).toFixed(2)
        document.getElementById('fixedCorrection').textContent = (fc).toFixed(2)
        newState.form.totalCorrection = tc
        newState.form.fixedCorrection = fc
        this.setState(newState)
    }
    calcTotal = () => {
        const newState = { ...this.state }
        newState.form.totalDelivery = newState.form.fixedCorrection + newState.form.totalFoodDelivery
        document.getElementById('totalDelivery').textContent = (newState.form.totalDelivery).toFixed(2)
        this.setState(newState)
    }

    onSelect = (evt) => {
        const newState = { ...this.state }
        newState.form.deliveryType = evt.target.value
        console.log(evt.target.value)
        this.setState(newState)
    }

    onAddFood = (food) => {
        console.log(food)
        const newState = { ...this.state }
        newState.foodSearch.totalCarbs += food.nutrients.CHOCDF
        newState.foodSearch.foodItems.push(food)
        this.setState(newState)
        console.log(this.state.foodSearch.foodItems)
        console.log(this.state.foodSearch.totalCarbs)
        this.calcFood()
    }

    onRemoveFood = (food) => {
        console.log(food)
        const newState = { ...this.state }
        newState.foodSearch.totalCarbs -= food.nutrients.CHOCDF
        newState.foodSearch.foodItems.splice(newState.foodSearch.foodItems.indexOf(food),1)
        this.setState(newState)
        console.log(this.state.foodSearch.totalCarbs)
        this.calcFood()
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const newState = { ...this.state }
            newState.form.foodItems = [...newState.form.foodItems, ...newState.foodSearch.foodItems]
            newState.form.totalCarbs += newState.foodSearch.totalCarbs
            newState.redirect = true
            console.log(this.state.form)
            this.setState(newState)
            await axios.post('/api', this.state.form)
            let nutrition = await axios.get('/api/nutrition')
            let nutritionId = nutrition.data[nutrition.data.length-1]._id
            nutrition = nutrition.data[nutrition.data.length-1]
            console.log(nutrition)
            let nutritionObj = {
                totalCarbs: 0,
                fat:0,
                protein:0
            }
            this.state.form.foodItems.forEach(food => {
                let carbs = food.nutrients.CHOCDF + nutrition.totalCarbs
                let fat = food.nutrients.FAT + nutrition.fat
                let protien = food.nutrients.PROCNT + nutrition.protein
                nutritionObj.totalCarbs += carbs
                nutritionObj.fat += fat
                nutritionObj.protein += protien 
            })
            await axios.put(`/api/nutrition/${nutritionId}`, nutritionObj)
            console.log(nutritionObj)
            console.log('ok')
        } catch (err) {
            console.log('Failed to create new tier')
            console.log(err)
        }
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect exact to='/' />)
        }
        return (
            <div className="new-insulin-container">
                <FoodSearch onAddFood={this.onAddFood} />
                <form onSubmit={this.onSubmit}>
                    <h3>Correction</h3>
                    <div className='form-group'>
                        <label htmlFor='bloodGlucose'>Blood Glucose: </label>
                        <input type="number" name="bloodGlucose" onChange={this.onChangeNum} />
                    </div>
                    <div className='form-group'>
                        <span className='form-entry-label'>Total Correction: </span>
                        <span id='totalCorrection' className='automated'>0</span>
                    </div>
                    <div className='form-group'>
                        <span className='form-entry-label'>Fixed Correction: </span>
                        <span id='fixedCorrection' className='automated'>0</span>
                    </div>
                    <h3>Carbs</h3>
                    <FoodSelection foodItems={this.state.foodSearch.foodItems} onRemoveFood={this.onRemoveFood}/>
                    <div className='form-group'>
                        <label htmlFor='totalCarbs'>Total Carbs: </label>
                        <input type="number" name="totalCarbs" onChange={this.onChangeNum} />
                    </div>
                    <div className='form-group'>
                        <span className='form-entry-label'>Total Food Delivery: </span>
                        <span id='totalFoodDelivery' className='automated'>0</span>
                    </div>
                    <h3>Delivery Summary</h3>
                    <div className='form-group'>
                        <select name="deliveryType" id="deliveryTypeDD" value={this.state.form.deliveryType} onChange={this.onSelect}>
                            <option value="both">Both</option>
                            <option value="food">Food Delivery</option>
                            <option value="correction">Correction</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <span className='form-entry-label'>Total Delivery:</span>
                        <span id='totalDelivery' className='automated'>0</span>
                    </div>
                    <input className="submit" type="submit" value="Create Delivery" />
                </form>
            </div>

        )
    }
}