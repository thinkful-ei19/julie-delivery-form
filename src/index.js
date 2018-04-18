import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import ComplainForm from './components/complain-form';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}> 
        <ComplainForm /> 
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
