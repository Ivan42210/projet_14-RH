import {BrowerRouter as Router, Routes, Route} from 'react-router-dom'
import App from '../App'

export default function Layout(){
    return(
       <Router >
            <Routes >
                <Route exact path='/' element={<App />}/>
            </Routes>
       </Router>
    )
}