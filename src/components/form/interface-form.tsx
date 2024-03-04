export interface IAddress {
  model:string
  city: string
  area: string
  street: string
  house: string
  message:string
}


export interface INaming {
  email: string
  name: string
  old: string
  lastname: string
  address: IAddress
  comment: string
  error:string


}

export interface IOption {
  value: string
  label: string

}
