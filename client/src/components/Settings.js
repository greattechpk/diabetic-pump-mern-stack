/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'
import EditSettings from './EditSettings'


export default class Settings extends Component {

    state = {
        data: {},
        editView: false
    }


    componentDidMount() {
        axios.get('/api/settings')
            .then((res) => {
                this.setState({ data: res.data[0] })
                console.log(this.state.data)
            })
    }

    toggleEditSettings = async () => {
        const editView = !this.state.editView
        if(this.state.editView){
            try{
                const settingsId = this.state.data._id
                const passData = this.state.data
                await axios.put(`/api/settings/${settingsId}`,passData)
            } catch (err){
                console.log('Put Err')
                console.log(err)
            }
        }
        this.setState({editView: editView})
    }

    onChangeCharacter = (evt) => {
        const newState = { ...this.state }
        newState.data[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    render() {
        return (
            <div>
                
                <div className='settings-info'>
                <h1>Global Settings</h1>
                    <div className='settings-entry'><span className='settings-label'>Carb Ratio:</span><span className='settings-data'> {this.state.data.carbRatio}</span></div>
                    <div className='settings-entry'><span className='settings-label'>Correction Factor:</span><span className='settings-data'> (BG - {this.state.data.correctionSubtract})/{this.state.data.correctionDivisor}</span></div>
                    <div className='settings-entry'><span className='settings-label'>Insulin Type:</span><span className='settings-data'> {this.state.data.insulinType}</span></div>
                    <div className='settings-entry'><span className='settings-label'>Insulin Activity Length:</span><span className='settings-data'> {this.state.data.insulinActivityLength}</span></div>
                    <button onClick={this.toggleEditSettings}>Edit</button>
                    
                    {this.state.editView ? 
                    <EditSettings
                        carbRatio={this.state.data.carbRatio}
                        correctionSubtract={this.state.data.correctionSubtract}
                        correctionDivisor={this.state.data.correctionDivisor}
                        insulinType={this.state.data.insulinType}
                        insulinActivityLength={this.state.data.insulinActivityLength}
                        onChangeCharacter={this.onChangeCharacter}/> :
                         null}

                </div>
            </div>
        )
    }
}
