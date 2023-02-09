import { createBrowserHistory } from "history";
import "./index.css";

export default function App() {
  let history = createBrowserHistory();
  let location = history.location;

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