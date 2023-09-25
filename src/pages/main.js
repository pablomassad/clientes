import React, {useEffect, useState, useContext} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {useHistory} from 'react-router'
import styled from 'styled-components'

// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Button from '@material-ui/core/Button'

import '../components/sidebar.css'
import {EventContext} from '../EventContext'

import NavBar from '../components/navBar'
import Clientes from './clientes'
import Ventas from './ventas'
import Resumen from './resumen'
import Stock from './stock'
import Cuentas from './cuentas'
import Opciones from './opciones'
import Estadisticas from './estadisticas'

import {Capacitor} from '@capacitor/core';
import {Plugins} from '@capacitor/core';

import firebase from '../firebase'




const MenuItem = styled.div`
    cursor: pointer;
    margin:5px;
    padding:10px;
    color:white;
    text-shadow: 1px 1px 1px black;
    transition: all .15s ease-in;

    &:hover{
        transform: scale(1.1) translateY(-2px);
        text-shadow:1px 1px 3px black;
    }
`

const Container = styled.div`
    padding:0px;
`


const Main = () =>
{
    const history = useHistory()

    // const [spinner, showSpinner, hideSpinner] = useSpinner(true)
    const [sidebarOpened, setSidebarOpened] = useState(false)

    const {evtManager} = useContext(EventContext)

    const menuHandler = () =>
    {
        setSidebarOpened(!sidebarOpened)
    }


    const [theme, setTheme] = useState('light')
    const toggleTheme = () =>
    {
        const newTheme = (theme === 'light') ? 'dark' : 'light'
        setTheme(newTheme)
    }

    const goto = (page)=>{
        history.push(`${page}`, {})
        setSidebarOpened(!sidebarOpened)
    }

    useEffect(() => {
        // firebase.firestore().collection('times').add({
        //     title:'titulo',
        //     time_seconds:45
        // })
        
    }, [])


    // useEffect(() =>
    // {
    //     evtManager.on('evtSpinner', (data) =>
    //     {
    //         if (data) showSpinner()
    //         else hideSpinner()
    //     })
    // }, [evtManager, hideSpinner, showSpinner])


    return (
        <div>
            <NavBar onMenuClick={menuHandler}>
            </NavBar>

            {/* <AppBar position="fixed">
                <Toolbar>
                    <Button color="inherit" >
                        Login
                    </Button>
                    <Button color="inherit" >
                        Principal
                    </Button>
                </Toolbar>
            </AppBar> */}

            <div theme={theme} className={(sidebarOpened) ? "sidebar sbOpen" : "sidebar sbClose"}  >
                <h2><span role="img" aria-label="">⚙️</span> Opciones</h2>

                <MenuItem onClick={() => goto('/clientes', {})}>Clientes</MenuItem>
                <MenuItem onClick={() => goto('/ventas', {})}>Ventas</MenuItem>
                <MenuItem onClick={() => goto('/ctacte')}>Cuentas</MenuItem>
                <MenuItem onClick={() => goto('/resumen')}>Resumen</MenuItem>
                <MenuItem onClick={() => goto('/estadisticas')}>Estadisticas</MenuItem>
                <MenuItem onClick={() => goto('/stock')}>Stock</MenuItem>
                <br />
                <MenuItem onClick={() => goto('/opciones')}>Opciones</MenuItem>
                <MenuItem onClick={toggleTheme}>Cambiar tema: '{theme}'</MenuItem>
                <hr />
                <MenuItem>&times; Salir</MenuItem>
            </div>

            <Container>
                <Switch>
                    <Route exact path="/clientes" component={Clientes}></Route>
                    <Route exact path="/ventas" component={Ventas}></Route>
                    <Route exact path="/ctacte" component={Cuentas}></Route>
                    <Route exact path="/resumen" component={Resumen}></Route>
                    <Route exact path="/estadisticas" component={Estadisticas}></Route>
                    <Route exact path="/stock" component={Stock}></Route>
                    <Route exact path="/opciones" component={Opciones}></Route>
                </Switch>
            </Container>
            {/* {spinner} */}
        </div>
    )
}
export default Main