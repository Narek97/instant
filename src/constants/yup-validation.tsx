import * as yup from 'yup'

export const CREATE_SURVEY_VALIDATION = yup
  .object()
  .shape({
    name: yup.string().required('Name is required'),
    question: yup.string().required('Question is required'),
    option: yup.string().required('Option is required').max(96),
    questionType: yup.string().required('Question type is required'),
    audience: yup.number().required('Audience is required'),
    country: yup.string().required('Country is required'),
  })
  .required()
