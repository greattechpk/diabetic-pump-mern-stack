/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Settings extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        data: {}
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        axios.get('/api/settings')
            .then((res) => {
                this.setState({ data: res.data[0] })
                console.log(this.state.data)
            })
    }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>Global Settings</h1>
                <div className='settings-info'>
                    <div className='settings-entry'><span className='settings-label'>Carb Ratio:</span><span className='settings-data'>{this.state.data.carbRatio}</span></div>
                </div>

            </div>
        )
    }
}