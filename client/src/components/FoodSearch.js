import React, { Component } from 'react'
import axios from 'axios'

export default class FoodSearch extends Component {
    state = {
        search: '',
        parsed: []
    }


    onCharacterChange = (evt) => {
        const newState = { ...this.state }
        newState[evt.target.name] = evt.target.value
        console.log(newState.search)
        this.setState(newState)
    }

    onSearch = async (evt) => {
        evt.preventDefault()
        try {
            let search = this.state.search
            search = search.split(' ').join('%20')
            let result = await axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${search}&category=generic-foods&app_id=b6da0fca&app_key=02acafbceb6ee853539268717f03f694`)
            result = result.data.hints
            const newState = { ...this.state }
            newState.parsed = result
            this.setState(newState)
        } catch (err) {
            console.log(err)
        }
        console.log(this.state.parsed)
    }

    render() {
        return (
            <div>
                <h3>Food Search</h3>
                <form onSubmit={this.onSearch}>
                    <input type='text' name='search' value={this.state.search} onChange={this.onCharacterChange}></input>
                    <input type='submit' value='search' ></input>
                </form>
                <div className='result-display'>
                    {this.state.parsed.map((foodItem, index) => {
                        console.log(foodItem, index)
                        return (
                            <div className='food-result' key={index}>
                                <h5>{foodItem.food.label}</h5>
                                <img className='result-image' src={foodItem.food.image} />
                                <div className='nutrient-values'>
                                    <div className='result-nutrient'><span>Calories: </span>{foodItem.food.nutrients.ENERC_KCAL}</div>
                                    <div className='result-nutrient'><span>Fat: </span>{foodItem.food.nutrients.FAT}</div>
                                    <div className='result-nutrient'><span>Protien: </span>{foodItem.food.nutrients.PROCNT}</div>
                                    <div className='result-carbs'><span>Carbs: </span>{foodItem.food.nutrients.CHOCDF}</div>
                                </div>
                                <div className='button-container'>
                                <button>+</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
