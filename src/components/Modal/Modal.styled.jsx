import styled from "styled-components";

export const Modalwindow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-image: url("path/to/lgbt-flag.png"); Replace with the path or URL of the LGBT flag image */
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Modalcontent = styled.div`
    background: linear-gradient(45deg, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D);
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    width: 600px;
    height: 600px;

` 
export const ModalHeader = styled.h2`
  font-size: 36px;
  background: #fff;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ModalParagraph = styled.h2`
  font-size: 14px;
  background: #fff;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Buttoncontainer = styled.div`
    margin-top: 20px;
`

export const BtnYes = styled.button`
    font-size: 24px;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 4px;
    background-color: #4caf50;
    color: #fff;
`

export const BtnNo = styled.button`
    font-size: 24px;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 4px;
    background-color: #f44336;
    color: #fff;
`
