This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Install LTS Node Version with nvm
```
# Install Node Version Manager
https://github.com/coreybutler/nvm-windows/releases -> nvm-setup.zip

# Install the LTS version of Node
nvm install v22.14.0
nvm use v22.14.0
```


### Create Next App
```
# Example Next.js app with Jest app looks old & uses the pages router
# npx create-next-app@latest --example with-jest with-jest-app

# Instead create a new project & add Jest
npx create-next-app@latest next-jest

√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack for `next dev`? ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
Creating a new Next.js app in C:\TEMP\next-jest.

cd next-jest
code .
```

### Install Jest Packages
```
# Add Jest package dependencies
# Refer to https://nextjs.org/docs/pages/building-your-application/testing/jest
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node
npm install -D import @testing-library/user-event 
npm init jest@latest
```

### Configure a **TypeScript** Jest Config File
```
# Create the jest.config.ts
npm init jest@latest


> next-jest@0.1.0 npx
> create-jest


The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... **yes**
√ Choose the test environment that will be used for testing » node
√ Do you want Jest to add coverage reports? ... no
√ Which provider should be used to instrument code for coverage? » v8
√ Automatically clear mock calls, instances, contexts and results before every test? ... no

✏️  Modified C:\TEMP\next-jest\package.json

📝  Configuration file created at C:\TEMP\next-jest\jest.config.ts
```


### Overwrite jest.config.ts
```
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
```

### Update package.json
```
// Update package.json to re-run Jest on file change 
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  },
```

### Create Home page
```
// app/pages.tsx
export default function Home() {
  return <h1>Home</h1>
}
```

### Add Test Suite
```
// __tests__/index.test.js
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeInTheDocument()
    });
    test('run a case insensitive search', () => {
        render(<Home />)
        const heading = screen.getByText(/home/i)
        expect(heading).toBeInTheDocument()
    })
})
```