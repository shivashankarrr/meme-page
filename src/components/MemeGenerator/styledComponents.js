import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-family: roboto;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 40px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-family: roboto;
`
export const CustomLabel = styled.label`
  font-family: roboto;
  color: #5a7184;
  margin-top: 20px;
`

export const CustomInput = styled.input`
  padding: 5px;
  width: 300px;
  outline: none;
  border: 1px solid #5a7184;
  border-radius: 5px;
`
export const CustomSelect = styled.select``

export const CustomOption = styled.option``

export const MemeContainer = styled.div`
  background-image: url(${props => props.backgoundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  width: 600px;
  height: 600px;
  margin: 20px;
`
export const TextContenet = styled.p`
  margin: 10px;
  font-weight: 600;
  font-size: ${props => props.activeOptionId}px;
  color: #ffffff;
  font-family: open sans;
`

export const SubmitButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  margin-top: 20px;
  width: 100px;
  outline: none;
  border: 0px;
  padding: 5px;
  font-family: roboto;
  border-radius: 5px;
  cursor: pointer;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
