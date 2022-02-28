import React from 'react'
import './All.css'
import Navbar from './Header/Navbar'
import Catagory from './Header/Catagory'
import TopFooter from './Footer/TopFooter'
import Footer from './Footer/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BodyAll from '../Body/BodyAll'
import Dastavka from './Routers/Dastavka'
import Badiiy from './Routers/badiiy'
import Diniy_Adabyot from './Routers/Diniy_Adabyot'
import Lugat from './Routers/Lug\'at'
import Biznes from './Routers/Biznes'
import Rivojlanish from './Routers/Rivojlanish'
import Ilm_fan from './Routers/Ilm_fan'
import Oquv_qurollari from './Routers/Oquv_qurollari'
import Book from './Routers/Book'
import Chegirmalar from './Routers/Chegirmalar'

export default function All({AllCatagory}) {
    return (
        <div>
            <BrowserRouter>
            <div className="w-100 fixed-top">
                <Navbar AllCatagory={AllCatagory} />
                <Catagory />
            </div>
                    <Switch>
                        <Route path='/' exact component={ BodyAll } />
                        <Route path='/dastavka' exact component={ Dastavka } />
                        <Route path='/badiiy_adabyot' exact component={ Badiiy } />
                        <Route path='/diniy_adabyot' exact component={ Diniy_Adabyot } />
                        <Route path='/chegirmalar' exact component={ Chegirmalar } />
                        <Route path='/lug`at' exact component={ Lugat } />
                        <Route path='/biznes' exact component={ Biznes } />
                        <Route path='/rivojlanish' exact component={ Rivojlanish } />
                        <Route path='/ilm_fan' exact component={ Ilm_fan } />
                        <Route path='/o`quv_qurollari' exact component={ Oquv_qurollari } />
                        <Route path='/about-product' exact component={Book} />
                    </Switch>
                <TopFooter />
                <Footer />
            </BrowserRouter>

        </div>
    )
}
