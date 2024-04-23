'use client'
import React from 'react'
import './create-survey-home.scss'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomDropDown from '@/components/ui/custom-drop-down/custom-drop-down'
import CustomButton from '@/components/ui/custom-button/custom-button'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CREATE_SURVEY_VALIDATION } from '@/constants/yup-validation'
import { CreateSurveyType } from '@/ts/types/surveys'
import useSWRMutation from 'swr/mutation'
import { APP_URL } from '@/constants/env'
import { axiosPostFetcher } from '@/utils/swr-fetcher'

const CreateSurveyHome = () => {
  const audiences = [
    { id: 1, value: 10 },
    { id: 2, value: 100 },
    { id: 3, value: 300 },
    { id: 4, value: 600 },
    { id: 5, value: 1000 },
  ]

  const questionType = [
    { id: 1, name: 'Single', value: 'single' },
    { id: 2, name: 'Multi', value: 'multi' },
  ]

  const { isMutating: isMutatingCreateSurvey, trigger: createSurvey } =
    useSWRMutation(`${APP_URL}/api/surveys/create`, axiosPostFetcher, {
      onSuccess: (data) => {
        console.log(data)
      },
    })

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CreateSurveyType>({
    resolver: yupResolver(CREATE_SURVEY_VALIDATION),
    defaultValues: {
      name: 'Instant Answers - Survey',
      audience: 300,
    },
  })

  const selectedAudience = watch('audience')

  const onHandleCreateSurvey = (formData: CreateSurveyType) => {
    createSurvey(formData)
  }

  return (
    <form
      className={'create-survey-home'}
      onSubmit={handleSubmit(onHandleCreateSurvey)}
    >
      <div className={'create-survey-home--form-item-block'}>
        <Controller
          name={'name'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              className={'create-survey-home--name'}
              sxStyles={{
                input: {
                  fontSize: 16,
                  color: '#1B87E6',
                },
              }}
              disabled={isMutatingCreateSurvey}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <span className={'validation-error'}>
          {(errors && errors.name?.message) || ''}
        </span>
      </div>

      <div className={'create-survey-home--name-select-block'}>
        <div className={'create-survey-home--form-item-block'}>
          <Controller
            name={'question'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder={'What would you like to ask?'}
                autoFocus={true}
                disabled={isMutatingCreateSurvey}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <span className={'validation-error'}>
            {(errors && errors.question?.message) || ''}
          </span>
        </div>
        <div className={'create-survey-home--select-block'}>
          <div className={'create-survey-home--form-item-block'}>
            <Controller
              name={'questionType'}
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomDropDown
                  placeholder={'Select one'}
                  menuItems={questionType}
                  disabled={isMutatingCreateSurvey}
                  onChange={onChange}
                  defaultValue={value}
                />
              )}
            />
            <span className={'validation-error'}>
              {(errors && errors.questionType?.message) || ''}
            </span>
          </div>
        </div>
      </div>
      <div className={'create-survey-home--description-block'}>
        <div className={'create-survey-home--form-item-block'}>
          <Controller
            name={'option'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                multiline={true}
                rows={7}
                placeholder={'Option 1\n' + 'Option 2\n' + 'Option 3'}
                disabled={isMutatingCreateSurvey}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <span className={'validation-error'}>
            {(errors && errors.option?.message) || ''}
          </span>
        </div>
      </div>
      <div className={'create-survey-home--country-audience-block'}>
        <div className={'create-survey-home--country-block'}>
          <div className={'create-survey-home--form-item-block'}>
            <Controller
              name={'country'}
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomDropDown
                  placeholder={'Select country'}
                  menuItems={questionType}
                  disabled={isMutatingCreateSurvey}
                  onChange={onChange}
                  defaultValue={value}
                />
              )}
            />
            <span className={'validation-error'}>
              {(errors && errors.country?.message) || ''}
            </span>
          </div>
        </div>
        <div className={'create-survey-home--form-item-block'}>
          <div className={'create-survey-home--audience-block'}>
            {audiences.map((audience) => (
              <label
                key={audience.id}
                className={`create-survey-home--audience ${+audience.value === +selectedAudience ? 'create-survey-home--selected-audience' : ''}`}
                htmlFor={audience.id.toString()}
              >
                {audience.value}

                <Controller
                  control={control}
                  name={'audience'}
                  render={({ field: { onChange, value } }) => (
                    <input
                      type="radio"
                      id={audience.id.toString()}
                      disabled={isMutatingCreateSurvey}
                      onChange={() => onChange(audience.value)}
                      checked={+audience.value === +value}
                    />
                  )}
                />
              </label>
            ))}
          </div>
          <span className={'validation-error'}>
            {(errors && errors.audience?.message) || ''}
          </span>
        </div>
      </div>
      <div className={'create-survey-home--divider'} />
      <div className={'create-survey-home--btn-block'}>
        <CustomButton type={'submit'} disabled={isMutatingCreateSurvey}>
          Launch
        </CustomButton>
      </div>
    </form>
  )
}

export default CreateSurveyHome
