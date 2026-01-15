import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'


// import './base/01-const-let';
// import './base/02-object';
// import './base/03-arrays'
// import './base/04-functions'
// import './base/05-deses-obj'
// import './base/06-deses-arr'
// import './base/07-imp-exp'
// import './base/08-promises'
import './base/09.fetch-api'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
  </div>
`

