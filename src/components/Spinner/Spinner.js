import React from 'react'
import SpinnerIcon from './SpinnerIcon'
import './Spinner.scss'
import {rgb} from 'd3'

const Spinner = ({overlay}) =>
{
    const styled = (overlay) ? {
        background: rgb(0,0,0,.5),
        height:'100vh',
        width:'100vw',
        position:'fixed',
        zIndex:'205'
    } : null

    return (
        <div className="spinner" style={styled}>
            <SpinnerIcon></SpinnerIcon>
        </div>
    )
}
export default Spinner