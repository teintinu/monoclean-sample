
import { listAllTodos } from '../queries'
import { createTodo } from './createTodo'

it('createTodo', async () => {
  await createTodo('UseCase1')
  const allTodos = await listAllTodos()
  expect(allTodos).toEqual(['UseCase1'])
})
