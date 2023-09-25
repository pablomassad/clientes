import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {ToastProvider} from 'react-toast-notifications'
// import {FirestoreProvider} from "@react-firebase/firestore"
// import firebase from './firebase'

import GlobalStyles from "./global-styles"

import {EventContextProvider} from './EventContext'
import Main from './pages/main'
// import './App.css'


const App = ()=>
{
    // const data = await firebase.firestore().collection('clients').get()
    // console.log(data)

    return (
        <Router>
            <GlobalStyles></GlobalStyles>
            <ToastProvider>
                {/* <FirestoreProvider {...config} firebase={firebase}> */}
                    <EventContextProvider>
                        <Main></Main>
                    </EventContextProvider>
                {/* </FirestoreProvider> */}
            </ToastProvider>
        </Router>
    )
}

export default App;
