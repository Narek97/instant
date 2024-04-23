export type ChannelType = {
  channel_name: string
  team: {
    team_name: string
  }
}

export type AuthorType = {
  qp_user_id: number
  qp_user_email: string
}

export type SurveyDataType = {
  external_survey_id: string
  survey_name: string
  current_quota: number
  quota: number
  country: string
  url: string
  bot_type: string
  created_at: string
  channel: ChannelType | null
  author: AuthorType | null
}

export type CreateSurveyType = {
  name: string
  question: string
  option: string
  questionType: string
  audience: number
  country: string
}
