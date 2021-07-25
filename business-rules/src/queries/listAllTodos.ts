import { getSingleton } from '../dependencyInversion/singleton'
import { Todo } from '../entities'

export interface ListAllTodosCondition {
}

export type ListAllTodosResult = Todo[]

export async function listAllTodos (): Promise<ListAllTodosResult> {
  const query = getSingleton().getListAllTodosQueryProcessor()
  return await query.open({})
}
