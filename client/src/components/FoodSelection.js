import React, { Component } from 'react'

export default class FoodSelection extends Component {
    render() {
        return (
            <div>
                <h4>Food Selection</h4>
                <div className='result-display'>
                {this.props.foodItems.map((foodItem,index)=> { 
                    return (
                        <div className='food-result' key={index}>
                            <h5>{foodItem.label}</h5>
                            <img className='result-image' src={foodItem.image} />
                            <div className='nutrient-values'>
                                <div className='result-nutrient'><span>Calories: </span>{foodItem.nutrients.ENERC_KCAL}</div>
                                <div className='result-nutrient'><span>Fat: </span>{foodItem.nutrients.FAT}</div>
                                <div className='result-nutrient'><span>Protien: </span>{foodItem.nutrients.PROCNT}</div>
                                <div className='result-carbs'><span>Carbs: </span>{foodItem.nutrients.CHOCDF}</div>
                            </div>
                            <div className='button-container' >
                            <button onClick={()=> this.props.onRemoveFood(foodItem)}>-</button>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}
