import React from 'react';
import {reduxForm} from 'redux-form';

class ComplaintForm extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="trackingNumber">Tracking Number</label>
                <input type="text" name="trackingNumber" id="trackingNumber" />
                
                <label htmlFor="details">Give more details(optional)</label>
            </form>
        )
    }
}


export default reduxForm({
    form: 'register'
})(ComplaintForm)