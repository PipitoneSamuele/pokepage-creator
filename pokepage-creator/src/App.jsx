import './App.css'
import { Header } from './pages/header'
import { Footer } from './pages/Footer'
import { ImageUploader } from './pages/imageUploader'

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen">
      
      <Header />

      <main className="flex-1 p-6">
        <ImageUploader />
      </main>

      <Footer />
      
    </div>
    </>
  )
}

export default App
