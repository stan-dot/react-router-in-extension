import "./index.css";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import Contact from "./routes/contacts";
import Root from "./routes/root";
import Test from "./routes/Test";

export default function App() {

  return <div>
    <MemoryRouter initialEntries={['/', '/contacts', '/test']} initialIndex={0}>
      {/* <MemoryRouter initialEntries={['/']}> */}
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </MemoryRouter>
  </div>
}