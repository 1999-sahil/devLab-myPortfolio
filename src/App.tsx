import './App.css'
import { useTheme } from './components/theme-provider';
import ThemeToggle from './components/theme-toggle';

function App() {
  const { setTheme } = useTheme();

  return (
    <>
      <div className='gridLinesBg h-screen w-screen'>
        <div>
          <h2 className='text-xl font-ubuntu font-bold'>Craft digital naratives</h2>
          <h2 className='text-xl font-montserrat font-bold'>Craft digital naratives</h2>
          <h2 className='text-xl font-poppins font-bold'>Craft digital naratives</h2>
          <h2 className='text-xl font-lato font-bold'>Craft digital naratives</h2>
        </div>

        <button onClick={() => setTheme("light")}>
          click light
        </button>
        <button onClick={() => setTheme("dark")}>
          click dark
        </button>

        <ThemeToggle />
      </div>
    </>
  )
}

export default App
