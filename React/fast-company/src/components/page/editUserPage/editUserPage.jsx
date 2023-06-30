import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import api from '../../../api'
import TextField from '../../common/form/textField'
import SelectField from '../../common/form/selectField'
import RadioField from '../../common/form/radioField'
import MultiSelectField from '../../common/form/multiSelectField'
import { validator } from '../../../utils/validator'

const EditUserPage = () => {
  const { userId } = useParams()
  const history = useHistory()

  const [data, setData] = useState({
    name: '',
    email: '',
    profession: '',
    sex: '',
    qualities: []
  })
  const [errors, setErrors] = useState({})
  const [professions, setProfessions] = useState([])
  const [qualities, setQualities] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return false
    const { profession, qualities } = data
    api.users
      .update(userId, {
        ...data,
        profession: getProfId(profession),
        qualities: getQualId(qualities)
      })
      .then((data) => history.push(`/users/${data._id}`))
  }
  const transformData = (data) => {
    return data.map((item) => ({ label: item.name, value: item._id }))
  }

  const getProfId = (id) => {
    for (const prof in professions) {
      const profData = professions[prof]
      if (profData._id === id) return profData
    }
  }
  const getQualId = (item) => {
    const qualArray = []
    for (const elem of item) {
      for (const quality in qualities) {
        if (elem.value === qualities[quality]._id) {
          qualArray.push(qualities[quality])
        }
      }
    }
    return qualArray
  }

  useEffect(() => {
    setIsLoading(true)
    api.qualities.fetchAll().then((data) => setQualities(data))
    api.professions.fetchAll().then((data) => setProfessions(data))
    api.users.getById(userId).then(({ profession, qualities, ...data }) =>
      setData((prevState) => ({
        ...prevState,
        ...data,
        qualities: transformData(qualities),
        profession: profession._id
      }))
    )
  }, [])
  useEffect(() => {
    if (data._id) setIsLoading(false)
  }, [data])
  useEffect(() => {
    validate()
  }, [data])

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна' },
      isEmail: {
        message: 'Email введен некорректно'
      }
    },
    name: {
      isRequired: { message: 'Имя не должно быть пустым' }
    },
    profession: {
      isRequired: {
        message: 'Обязательно выберете профессию'
      }
    },
    sex: {
      isRequired: {
        message: 'Обязательно выберете свой пол'
      }
    },
    qualities: {
      minSymbol: {
        message: 'Должно быть выбрано хотя бы одно качество'
      }
    }
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 shadow p-4'>
          {!isLoading && Object.keys(professions).length > 0 ? (
            <form onSubmit={handleSubmit}>
              <TextField
                label={'Имя'}
                onChange={handleChange}
                value={data.name}
                name={'name'}
                error={errors.name}
              />
              <TextField
                label={'Электронная почта'}
                name={'email'}
                value={data.email}
                onChange={handleChange}
                error={errors.email}
              />
              <SelectField
                label={'Выберите свою профессию'}
                onChange={handleChange}
                options={professions}
                name={'profession'}
                defaultOption={'Choose...'}
                error={errors.profession}
                value={data.profession}
              />
              <RadioField
                options={[
                  { name: 'Male', value: 'male' },
                  { name: 'Female', value: 'female' },
                  { name: 'Other', value: 'other' }
                ]}
                value={data.sex}
                name={'sex'}
                label={'Выберете ваши пол'}
                onChange={handleChange}
                error={errors.sex}
              />
              <MultiSelectField
                options={qualities}
                onChange={handleChange}
                defaultValue={data.qualities}
                name='qualities'
                label='Выберите ваши качества'
              />
              <button
                type={'submit'}
                disabled={!isValid}
                className={'btn btn-primary w-100 mx-auto'}
              >
                Обновить
              </button>
              <button
                className={'btn btn-primary'}
                onClick={() => history.goBack()}
              >
                Назад
              </button>
            </form>
          ) : (
            'Loading...'
          )}
        </div>
      </div>
    </div>
  )
}

export default EditUserPage
