import './App.css'
import { Header } from './pages/header'
import { Footer } from './pages/Footer'

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen">
      
      <Header />

      <main className="flex-1 p-6">
        <p className="text-gray-700">Upload your images here...</p>
      </main>

      <Footer />
      
    </div>
    </>
  )
}

export default App
