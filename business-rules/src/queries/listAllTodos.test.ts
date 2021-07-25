
import { listAllTodos } from './listAllTodos'

it('listAllTodos', async () => {
  const allTodos = await listAllTodos()
  expect(allTodos).toEqual([
    {
      id: 'test-1',
      title: 'Thing did',
      completed: true
    },
    {
      id: 'test-2',
      title: 'Thing todo',
      completed: false
    }
  ])
})
