import './App.css'
import { Header } from './pages/header'
import { Footer } from './pages/Footer'
import { ImageUploader } from './pages/imageUploader'
import Grid from './pages/Grid'

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen">
      
      <Header />

      <main className="flex-1 p-6">
        <Grid />
        <div style={{marginBottom: 100}}></div>
        <ImageUploader />
      </main>

      <Footer />
      
    </div>
    </>
  )
}

export default App
