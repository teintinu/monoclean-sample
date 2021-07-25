import { getSingleton } from '../dependencyInversion/singleton'

export interface Todo {
  readonly id: string,
  readonly title: string,
  readonly completed: boolean
}

export function factoryTodo (title: string): Todo {
  return {
    id: getSingleton().newUUID(),
    title,
    completed: false
  }
}
