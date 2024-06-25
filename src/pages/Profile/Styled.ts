import { Box, Button, IconButton, Input, Typography } from "@mui/material"
import styled from "styled-components"

 export const ModalBody = styled(Box)`
  padding: 20px 20px 40px;
  border:unset;
`

 export const Form = styled.form`
  novalidate: true;
`

export const ChangePassPopupWeb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`

export const PopupLabel = styled(Typography)`
  font-family: "Bebas Neue", sans-serif;
  font-size: 12px;
  line-height: 16px;
  opacity: 0.5;
`

export const ValidationText = styled(Typography)`
  color: red;
  margin-top: 8px;
`

export const OnlyResponsiveView = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`

export const StyledInput = styled(Input)`
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 100%;
  margin-top: 3px;

  &.MuiInput-underline:before {
    border-bottom: none;
  }

  &.MuiInput-underline:after {
    border-bottom: none;
  }

  &:hover {
    border-color: unset;
    border-bottom:unset ;
  }
`

export const ModalFooter = styled(Box)`
  border: none;
  margin-top: 15px;
`

export const PopupButton = styled(Button)`
  width: 100%;
  background: #2560ad;
  border-radius: 8px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  height: 48px;
  font-size: 15px;
  color: #fff;
  margin-top: 10px;

  &:hover{
    text-decoration: none;
    background-color: #2560ad;
  }
`

export const FloatingLabelInput = styled.div`
  position: relative;
  margin-top: 20px;

  label {
    font-size: 12px;
    position: absolute;
    top: -0.5em;
    left: 0.75rem;
    z-index: 3;
    padding: 0 1px;
    background: #fff;
    color: rgba(0, 0, 0, 0.6);
  }

  input {
    height: 54px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 3px;
    border: 1px solid #ccc;
    width: 100%;
  }
`
export const ModalHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding-bottom: 20px;
`;

export const PopupTitle = styled(Typography)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 36px;
  }
`;

export const CloseButton = styled(IconButton)`
  padding: 0;
`;