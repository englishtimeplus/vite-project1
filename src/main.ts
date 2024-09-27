import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
 <p>개씨발년</p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
