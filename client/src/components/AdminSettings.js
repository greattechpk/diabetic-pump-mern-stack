import React, { Component } from 'react'
import Axios from 'axios'

export default class AdminSettings extends Component {
    onSubmit = async (evt) =>{
        evt.preventDefault()
        const settings = {
            carbRatio: 10,
            correctionSubtract:100,
            correctionDivisor:30,
            activeInsulin: 0,
            activeInsulinTimer: 0,
            insulinType: 'Humalog',
            insulinActivityLength: 120
        }
        try{
            Axios.post('/api/settings', settings)
            console.log('ok')
        }catch(err){
            console.log('err posting')
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='submit' value='New Settings'/>
                </form>
            </div>
        )
    }
}
