import { css } from '@emotion/react'

export const globalStyles = css`
  :root {
    --main-text-color: rgb(233, 235, 238);
    --main-background-color: rgb(27, 27, 29);
  }

  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  button,
  input,
  select {
    margin: 0;
  }
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  img,
  video {
    height: auto;
    max-width: 100%;
  }
  iframe {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    background-color: var(--main-background-color);
    color: var(--main-text-color);
  }

  #root {
    display: grid;
    align-content: center;
    justify-items: center;
  }

  a {
    color: var(--main-text-color);
    text-decoration: none;
    position: relative;
  }
  a:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 66%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
    background-color: rgba(79, 192, 141, 0.5);
  }
  a:hover:after {
    top: 0%;
  }

  button:hover {
    cursor: pointer;
  }
`
