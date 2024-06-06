export interface User {
  name: string
  sun: string
  moon: string
  ascendant: string
}

export interface UserData extends User {
  id: number
}
