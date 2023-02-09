import { createMemoryHistory } from "history";
import "./index.css";

let history = createMemoryHistory();
let location = history.location;

export default function App() {
  return <div>
    <h2>hello world memeory history version</h2>
    <nav style={{ display: 'flex', flexDirection: 'column' }}>
      <a href="/meme">goto meme</a>
      <a href="/">goto home</a>
    </nav>
    <div style={{ display: location.pathname === '/meme' ? 'block' : 'none' }}>
      meme page
    </div>
    <div style={{ display: location.pathname === '/' ? 'block' : 'none' }}>
      home page
    </div>
  </div>
}