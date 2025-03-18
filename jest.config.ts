// jest.config.ts
// Refer to https://nextjs.org/docs/pages/building-your-application/testing/jest

import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
}
 
export default createJestConfig(config)

