import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, fiveCharacters, nonNumber} from '../validator';
import './complaint-form.css';

class ComplaintForm extends React.Component {
    onSubmit(values) {

    }
    render() {
        if(this.props.submitSucceeded) {
            return <div> We will be with you shortly </div>;
        }
        // console.log(this.props)
        return (
            <form 
              onSubmit={this.props.handleSubmit(values=> 
                this.onSubmit(values))
              }>
                <label htmlFor="trackingNumber">Tracking Number</label> <br/>
                <Field 
                    component="input" 
                    type="text" 
                    name="trackingNumber" 
                    id="trackingNumber"
                    validate={[required, nonEmpty, fiveCharacters, nonNumber]}
                /> <br/>
                <label htmlFor="details">What is your issue</label> <br/>
                <Field component="select" name="selectOptions"> 
                    <option value='notArrived' >My delivery hasn't arrived</option>
                    <option value='wrongItem' >The wrong item was delivered</option>
                    <option value='missing' >Part of my order was missing</option>
                    <option value='damaged' >Some of my order arrived damaged</option>
                    <option value='other' >Other(give details below)</option>
                </Field> <br/>
                <label htmlFor="details">Give more details(optional)</label> <br/>
                <Field component="textarea" name="textarea"> 
                    rows="3" cols="50" name="details" id="details"> 
                </Field> <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}


export default reduxForm({
    form: 'register'
})(ComplaintForm)