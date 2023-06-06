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
                    <li className="px-9">Home</li>
                    <li className="px-9">About</li>
                    <li className="px-9">Projects</li>
                    <li className="px-9">Contact</li>
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
