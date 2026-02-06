import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ContactForm from './ContactFrom'
import Reducer from './Reducer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContactForm/>
   <Reducer/>
  </StrictMode>,
)
