import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'GmarketSansMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
}
@font-face {
  font-family: 'SUIT-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
}
@font-face {
  font-family: 'SUIT-Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2') format('woff2');
}
@font-face {
  font-family: 'SUIT-ExtraBold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-ExtraBold.woff2') format('woff2');
}
@font-face {
  font-family: 'Montserrat-SemiBold';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu173w5aXo.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Montserrat-Bold';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aXo.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

html {
  height: -webkit-fill-available;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

html {
  width:100vw;
  overflow-x:hidden;
}

body::-webkit-scrollbar {
    width: 10px;
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(55, 41, 44, .4);
}

body::-webkit-scrollbar-track {
    background: transparent;
}

:root {
  scroll-behavior: smooth;
  --size-200: 0.35rem;
  --size-300: 0.75rem;
  --size-400: 1rem;
  --size-500: 1.33rem;
  --size-600: 1.77rem;
  --size-700: 2.36rem;
  --size-800: 3.15rem;
  --size-900: 4.2rem;
}

body {
  font-family: 'SUIT-Regular', 'Poppins', -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue,
    helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  transition-property: background-color, color, background;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  background-attachment: fixed;
  font-smoothing: antialiased;
}

body.light-mode {
  color: #37292C;
  background-color: white;
  background-image: linear-gradient(315deg, #ccfbf1 0%, #ffe4e6 50%);
}

body.dark-mode {
  color: #e9e9e9;
  background-color: #252526;
}

body.dark-mode ::selection{
  background: #e9e9e9;
  color: #252526;
}

body.light-mode ::selection{
  background: #37292C;
  color: white;
}

h1,
h2,
h3,
h4 {
  line-height: 1.125;
}

h1,
h2,
h3 {
  font-weight: 700;
}

h1 {
  font-size: var(--size-800);
}

h2 {
  font-size: var(--size-700);
}

h3 {
  font-size: var(--size-600);
}

p {
  font-size: var(--size-400);
}

p, li {
    max-width: none;
}

.gatsby-resp-image-wrapper {
    margin-left: 0 !important;
}


`;

export default GlobalStyle;
