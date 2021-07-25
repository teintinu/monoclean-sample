import { EventProcessorFactory } from '../events'
import { QueryProcessorFactory } from '../queries'

export interface DependencyInversionSingleton extends EventProcessorFactory, QueryProcessorFactory {
  newUUID(): string
}

let dependencyInversionSingleton: DependencyInversionSingleton

export function getSingleton (): DependencyInversionSingleton {
  if (dependencyInversionSingleton) return dependencyInversionSingleton
  throw new Error('Dependency Inversion Singleton was not configurated')
}

export function configureDependency (singleton: DependencyInversionSingleton) {
  dependencyInversionSingleton = singleton
}
