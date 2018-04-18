import React from 'react';
import {reduxForm} from 'redux-form';

class ComplaintForm extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="trackingNumber">Tracking Number</label> <br/>
                <input type="text" name="trackingNumber" id="trackingNumber" /> <br/>
                <label htmlFor="details">What is your issue</label> <br/>
                <select> 
                    <option value='' >My delivery hasn't arrived</option>
                    <option value='' >The wrong item was delivered</option>
                    <option value='' >Part of my order was missing</option>
                    <option value='' >Some of my order arrived damaged</option>
                    <option value='' >Other(give details below)</option>
                </select> <br/>
                <label htmlFor="details">Give more details(optional)</label> <br/>
                <textarea rows="3" cols="50" name="details" id="details"> </textarea> <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}


export default reduxForm({
    form: 'register'
})(ComplaintForm)