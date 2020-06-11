import React, { Component } from 'react'
import axios from 'axios'

export default class FoodSearch extends Component {
    state = {
        search:'',
        parsed:[]
    }


    onCharacterChange = (evt) => {
        const newState = {...this.state}
        newState[evt.target.name] = evt.target.value
        console.log(newState.search)
        this.setState(newState)
    }

    onSearch = async (evt) =>{
        evt.preventDefault()
        try{
            let search = this.state.search
            search = search.split(' ').join('%20')
            let result = await axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${search}&app_id=b6da0fca&app_key=02acafbceb6ee853539268717f03f694`)
            result = result.data.hints
            console.log(result)
        }catch(err){
            console.log(err)
        }
        console.log('ok')
    }

    render() {
        return (
            <div>
                <h3>Food Search</h3>
                <form onSubmit={this.onSearch}>
                    <input type='text' name='search' value={this.state.search} onChange={this.onCharacterChange}></input>
                    <input type='submit' value='search' ></input>
                </form>
            </div>
        )
    }
}
