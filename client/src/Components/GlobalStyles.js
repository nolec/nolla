import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
 ${reset};
 body{
    background-color: #ffffff;
    color: #555;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    background-color: #ffffff;
    color: #555;
 }
 * {
    box-sizing: border-box;
 }
 a{
    color: #1abc9c;
    word-break: keep-all;
    text-decoration : none !important;
    color : #fff;
    :hover {
       color : none;
    }
 }
`;

export default globalStyles;
