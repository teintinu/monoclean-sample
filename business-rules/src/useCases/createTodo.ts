import { TodoWasCreated } from '../events'
import { getSingleton } from '../dependencyInversion/singleton'

export async function createTodo (title: string) {
  const event: TodoWasCreated = {
    event: 'TodoWasCreated',
    at: Date.now(),
    payload: { title }
  }
  const eventProcessor = getSingleton().getTodoWasCreatedEventProcessor()
  await eventProcessor.process(event)
}
