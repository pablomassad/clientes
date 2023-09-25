import {createGlobalStyle} from "styled-components"
import BackgroundImage from './patricia.jpeg'

export default createGlobalStyle`

    *:focus {
	outline: none !important;
    }

    *{
        user-select: none;
        outline: none !important;
    }

    body {
        margin: 0;
	    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
		'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
		'Helvetica Neue', sans-serif;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
        background-color: lightgray;
        font-family: 'Titillium Web',sans-serif;
        box-shadow: border-box;
        min-height: 100vh;
        justify-content: center;
        /* background-image:url(${BackgroundImage}); */
        background-size:contain;
        background-repeat:no-repeat;
        background-position:center;
    }
    .heading {
        font-weight: 700;
    }
    .subheading {
        font-weight: 300;
    }


`
