
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/Textform'
function App() {
  const[darkMode, setDarkMode]=useState(false);
  return (
    <>

<Navbar title="TitleUtils" mode={darkMode}/>
<div className="container my-3">
<TextForm heading="Enter the text to analyze below"/>
{/*<About />*/}
</div>
</>
);
}

export default App;
