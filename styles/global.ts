import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html,body{
        font-size: 16px;
        -webkit-text-size-adjust: none;
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
        width: 100%;
        min-height: 100vh;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }
`
