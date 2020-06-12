import React, { Component } from 'react'
import Axios from 'axios'

export default class AllNutrition extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        Axios.get('/api/nutrition')
            .then((res) => {
                let data = res.data[res.data.length-1]
                this.setState({ data: data })
                console.log(this.state.data)
            })
    }

    render() {
        return (
            <div>
                <h1>Nutrition Average</h1>
                <div>
                    <span>Date Started:</span>
                    <h4>{this.state.data.date}</h4>
                    <div>
                        <span>Total Carbs:</span>
                        <span>{this.state.data.totalCarbs}g</span>
                    </div>
                    <div>
                        <span>Total Fat:</span>
                        <span>{this.state.data.fat}g</span>
                    </div>
                    <div>
                        <span>Total Protien:</span>
                        <span>{this.state.data.protein}g</span>
                    </div>

                </div>
            </div>
        )
    }
}
