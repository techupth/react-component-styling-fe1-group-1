// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Button(props) {
    let buttonColor;
    if (props.type === "primary"){
        buttonColor='#074EE8';
    }
    else if (props.type === "secondary"){
        buttonColor='#07A4E8';
    }
    return(<button 
    css={css`
    border-radius: 4px;
    width: 171.19px;
    height: 50px;
    padding: 0px 16px;
    margin:8px;
    text-align: center;
    color: #ffffff;
    font-family: Sarabun;
    font-size: 16px;
    background-color:${buttonColor};
    `}>
        Button
    </button>)
}
