import './App.css'

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow">
        <h1 className="text-2xl font-bold">My Image Grid App</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6">
        <p className="text-gray-700">Upload your images here...</p>
        {/* your grid component will go here */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-center p-4">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
    </>
  )
}

export default App
