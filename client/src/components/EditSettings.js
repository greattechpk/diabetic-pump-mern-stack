import React, { Component } from 'react'

export default class EditSettings extends Component {
    render() {
        return (
            <div>
                <form className='edit-settings'>
                    <div>
                        <label htmlFor='carbRatio'>Carb Ratio</label>
                        <input
                            type="number"
                            name="carbRatio"
                            value={this.props.carbRatio}
                            onChange={this.props.onChangeCharacter}/>
                    </div>
                    <div>
                        <label htmlFor='correctionSubtract'>Correction Subtract</label>
                        <input
                            type="number"
                            name="correctionSubtract"
                            value={this.props.correctionSubtract}
                            onChange={this.props.onChangeCharacter}/>
                    </div>
                    <div>
                        <label htmlFor='correctionDivisor'>Correction Divisor</label>
                        <input
                            type="number"
                            name="correctionDivisor"
                            value={this.props.correctionDivisor}
                            onChange={this.props.onChangeCharacter}/>
                    </div>
                    <div>
                        <label htmlFor='insulinType'>Insulin Type</label>
                        <input
                            type="text"
                            name="insulinType"
                            value={this.props.insulinType}
                            onChange={this.props.onChangeCharacter}/>
                    </div>
                    <div>
                        <label htmlFor='insulinActivityLength'>Insulin Activity Length</label>
                        <input
                            type="number"
                            name="insulinActivityLength"
                            value={this.props.insulinActivityLength}
                            onChange={this.props.onChangeCharacters}/>
                    </div>
                </form>
            </div>
        )
    }
}
