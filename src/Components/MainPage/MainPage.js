import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [emailConfirm,setEmailConfirm] =useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeEmailConfirm = (event) => {
  setEmailConfirm(event.target.value)
}

const sendData = () => {
  if(
    age >=18 &&
    name.length >= 10&&
    name.length <= 30 &&
    email.includes("@") &&
    email === emailConfirm
  ){
    setFormFlow(2);
  }else if (age <18){
    alert("idade inadequada")
  }else if (name.length <10 || name.length >30){
    alert("Nome nçao antende caracteres minimos ou maximos")
  }else if (email.includes("@") === false){
    alert ("email não esta no formato correto")
  }else if (email !== emailConfirm){
    alert("emails são diferentes e precisam ser iguais")
  }
};
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      onChangeName = {onChangeName}
      onChangeAge = {onChangeAge}
      onChangeEmail = {onChangeEmail}
      onChangeEmailConfirm = {onChangeEmailConfirm}
      name={name}
      age={age}
      email={email}
      emailConfirm={emailConfirm}
      sendData={sendData}

      // insira aqui suas props
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage



// aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos