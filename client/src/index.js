import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import axios from 'axios';



axios.defaults.baseURL = 'http://localhost:5000/'
axios.defaults.headers.common['authorization']='Bearer ' + localStorage.getItem('token');

ReactDOM.render(<App />, document.getElementById('root'));
