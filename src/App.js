import LogoInstagram from "./instagram.jpg"
import "./belajar.css";

function Belajar() {
  return (
    <div className="home">
      <h1>element h1</h1>
      <h2>element h2</h2>
      <p>
       paragraf<br></br> body
  
      </p>
      <div>
        custom
      </div>
      <div>
        ads
      </div>
      <a href="https://www.youtube.com/">youtube</a><button></button>
      <ol>
        Heading
        <li></li>
        <li></li>
      <li></li>
      </ol>
      <input id="home" type="text" />
      <input type="password" />
      <input type="number" />
      <input type="tel" />
      <input type="checkbox" />
      <input type="radio" />
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <img src={LogoInstagram}></img>
    </div>
  )
}

export default Belajar;
