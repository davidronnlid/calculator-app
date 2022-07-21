import AppTitle from './aboutProjectComponents/appTitle'
import Calculator from './calculatorComponents/calculator'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/appStyles.scss'

function App() {
  return (
    <div className="app">
      <AppTitle />
      <Calculator />
    </div>
  )
}

export default App
