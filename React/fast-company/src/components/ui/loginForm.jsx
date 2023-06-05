import React, { useEffect, useState } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const handelChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна' },
      isEmail: {
        message: 'Email введен некорректно'
      }
    },
    password: {
      isRequired: { message: 'Пароль обязателен' },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число'
      },
      minSymbol: {
        message: 'Пароль должен содержать не менее 8 символов',
        value: 8
      }
    }
  }
  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0
  const handelSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }
  return (
    <form onSubmit={handelSubmit}>
      <TextField
        label={'Электронная почта'}
        name={'email'}
        value={data.email}
        onChange={handelChange}
        error={errors.email}
      />
      <TextField
        label={'Пароль'}
        type={'password'}
        name={'password'}
        value={data.password}
        onChange={handelChange}
        error={errors.password}
      />
      <button
        type={'submit'}
        disabled={!isValid}
        className={'btn btn-primary w-100 mx-auto'}
      >
        submit
      </button>
    </form>
  )
}

export default LoginForm
