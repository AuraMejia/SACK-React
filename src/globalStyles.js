import {createGlobalStyle} from 'styled-components'
import PrimaryFont from '../src/utils/fonts/Montserrat-Bold.woff'
import SecundaryFont from '../src/utils/fonts/Montserrat-Light.woff'
export const GlobalStyle = createGlobalStyle` 
*
margin:0;
padding:0;
h4,h1, h3{
    font-family: Montserrat-Bold;
}
h5, h3, #texto, p{
    font-family: Montserrat-Light;
}

/*Fuentes*/
@font-face{
    font-family: 'Montserrat-Bold';
    src: local('Monserrat-Bold'), url(${PrimaryFont}) format('woff');
    font-style: normal;
}
@font-face{
    font-family: 'Montserrat-Light';
    src: local('Monserrat-Light'), url(${SecundaryFont}) format('woff');
    font-style: normal;
}
`;
 
export default GlobalStyle;