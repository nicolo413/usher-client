import { GestureResponderEvent } from "react-native"
import { getJWT } from "../../services/api/auth"

export const login = ( event: GestureResponderEvent, formData: LoginForm) => {
  const { email, password } = formData
  const isValid = validateLogin(formData)
  if (isValid !== true) {
    console.error(isValid)
    return
  } 
  getJWT(email, password)
}

const validateLogin = (formData: LoginForm) => {
  if (!formData.email) {
    return 'Email is required'
  } else if (!formData.password) {
    return 'Password is required'
  } else if (!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return 'Email should be in email format'
  }
  return true
}

export type LoginForm = {
  email: string
  password: string
}

export const loginMock = {
  email: '',
  password: ''
}