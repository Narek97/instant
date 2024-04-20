export interface Channel {
  channel_name: string
  team: {
    team_name: string
  }
}

export interface Author {
  qp_user_id: number
  qp_user_email: string
}

export interface SurveyData {
  external_survey_id: string
  survey_name: string
  current_quota: number
  quota: number
  country: string
  url: string
  bot_type: string
  created_at: string
  channel: Channel | null
  author: Author | null
}
