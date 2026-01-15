import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function AboutMe() {
  return <div> Ryan Ekiru 
    <p>Software Developer</p>
  </div>
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutMe> </AboutMe>
  </StrictMode>,
)
