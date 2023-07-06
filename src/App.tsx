import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
        <article>
            <header className="flex justify-between items-center p-4 px-10 sticky top-0 z-50 backdrop-blur-md border">
                <div>O</div>
                <ul className="flex ml-24">
                    <a href="#"><li className="px-9">Home</li></a>
                    <a href="#about"><li className="px-9">About</li></a>
                    <a href="#projects"><li className="px-9">Projects</li></a>
                    <a href="#contact"><li className="px-9">Contact</li></a>
                </ul>
                <button className="border p-1 px-3">RESUME</button>
            </header>
            <div className='grid grid-cols-1 place-items-center w-screen'>
              <Home />
              <About />
              <Projects />
              <Contact />
            </div>
        </article>
    );
}

export default App;
