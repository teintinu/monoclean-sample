
export interface TodoWasCreatedPayload {
  title: string
}

export interface TodoWasCreated {
  event: 'TodoWasCreated'
  at: number
  payload: TodoWasCreatedPayload
}
