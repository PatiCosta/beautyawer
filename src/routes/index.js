import { Routes as Switch, Route } from 'react-router-dom'

import {Home} from '../pages/Home'
import {Calendar} from '../pages/Calendar'
// import Route from './Route'


function Routes() {
    return (
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/calendar' element={<Calendar />} />
        </Switch>
    )
    
}

export default Routes
