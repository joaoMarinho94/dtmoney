import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f3f6;
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{ 
    // font default 16px

    @media (min-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media (min-width: 720px){
      font-size: 87.5%; // 14px
    }
  }

  body{ 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button{ 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`