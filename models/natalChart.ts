export interface NatalChart {
  success: number
  data: Datum[]
}

export interface Datum {
  name: string
  full_degree: FullDegree
  sign: string
  sign_no: number
  longitude: string
  speed: string
  is_retro: string
  is_rising: string
  is_setting: string
  in_midheaven: string
  house: number
  element: string
  modality: Modality
}

export type FullDegree = number | string

export type Modality = 'Cardinal' | 'Mutable' | 'Fixed'
