import React from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {required, nonEmpty, fiveCharacters, nonNumber} from '../validator';
import './complaint-form.css';

class ComplaintForm extends React.Component {
    onSubmit(values) {
        console.log(values);
        return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report/', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') && res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ){
                        return res.json().then(err => Promise.reject(err));
                    }
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    })
                }
                return;
            })
            .then(() => console.log('Submitted with values', values))
            .catch(error => {
                return Promise.reject(
                    new SubmissionError({
                        [error.location]: error.message
                    })
                )
            });
    };
    render() {
 
        if(this.props.submitSucceeded) {
            return <div className="success message">Success</div>;
        }
       
        if(this.props.submitFailed) {
            return <div className="error message">Error</div> 
        }
        return (
            
                 
            <form 
              onSubmit={this.props.handleSubmit(values => {
                  console.log(values);

                return this.onSubmit(values) }
            )}>
            
         
                <label htmlFor="trackingNumber">Tracking Number</label> <br/>
                <Field 
                    component="input" 
                    type="text" 
                    name="trackingNumber" 
                    id="trackingNumber"
                    validate={[required, nonEmpty, fiveCharacters, nonNumber]}
                /> <br/>
                <label htmlFor="issue">What is your issue</label> <br/>
                <Field component="select" name="issue"> 
                    <option value='not-delivered' >My delivery hasn't arrived</option>
                    <option value='wrong-item' >The wrong item was delivered</option>
                    <option value='missing-part' >Part of my order was missing</option>
                    <option value='damaged' >Some of my order arrived damaged</option>
                    <option value='other' >Other(give details below)</option>
                </Field> <br/>
                <label htmlFor="details">Give more details(optional)</label> <br/>
                <Field component="textarea" name="details"> 
                    rows="3" cols="50" name="details" id="details"> 
                </Field> <br/>
                <button type="submit">Submit</button>
            </form>
        
        )
    }
}


export default reduxForm({
    form: 'complaint'
})(ComplaintForm)