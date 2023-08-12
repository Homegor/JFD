import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { validator } from '../../../utils/validator'
import { useAuth } from '../../../hooks/useAuth'
import { useProfessions } from '../../../hooks/useProfession'
import { useQualities } from '../../../hooks/useQualities'

import TextField from '../../common/form/textField'
import SelectField from '../../common/form/selectField'
import RadioField from '../../common/form/radioField'
import MultiSelectField from '../../common/form/multiSelectField'

const EditUserPage = () => {
  const history = useHistory()

  const [data, setData] = useState()
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { currentUser, updateUser } = useAuth()

  const { professions, isLoading: professionsLoading } = useProfessions()
  const professionsList = professions.map((p) => ({
    label: p.name,
    value: p._id
  }))
  const { qualities, isLoading: qualitiesLoading } = useQualities()
  const qualitiesList = qualities.map((q) => ({
    label: q.name,
    value: q._id
  }))

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  function getQualitiesListByIds(qualitiesId) {
    const qualitiesArray = []
    for (const qualId of qualitiesId) {
      for (const quality of qualities) {
        if (quality._id === qualId) {
          qualitiesArray.push(quality)
          break
        }
      }
    }
    return qualitiesArray
  }
  const transformData = (data) => {
    return getQualitiesListByIds(data).map((qual) => ({
      label: qual.name,
      value: qual._id
    }))
  }

  useEffect(() => {
    if (!professionsLoading && !qualitiesLoading && currentUser && !data) {
      setData({
        ...currentUser,
        qualities: transformData(currentUser.qualities)
      })
    }
  }, [professionsLoading, qualitiesLoading, currentUser, data])

  useEffect(() => {
    if (data && isLoading) setIsLoading(false)
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
  const handleSubmit = (newQual) => {
    newQual.preventDefault()
    const isValid = validate()
    if (!isValid) return false
    // const { profession, qualities } = data
    // api.users
    //   .update(userId, {
    //     ...data,
    //     profession: getProfId(profession),
    //     qualities: getQualId(qualities)
    //   })
    //   .then((data) => history.push(`/users/${data._id}`))
    updateUser({ ...data, qualities: data.qualities.map((q) => q.value) })
  }
  return (
    <div className='container mt-5'>
      <button className={'btn btn-primary'} onClick={() => history.goBack()}>
        Назад
      </button>
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
                options={professionsList}
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
                options={qualitiesList}
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
