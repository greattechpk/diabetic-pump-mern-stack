import React, { Component } from 'react'
import Axios from 'axios'

export default class AdminNutrition extends Component {
    onSubmit = async (evt) =>{
        evt.preventDefault()
        const nutrition = {
        totalCarbs: 0,
        fat: 0,
        protein: 0
        }
        try{
            Axios.post('/api/nutrition', nutrition)
        }catch(err){
            console.log('err posting')
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='submit' value='New Nutrition'/>
                </form>
            </div>
        )
    }
}
