import { useState } from "react";
import "./all.min.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* header part start */}
      <header>
        <nav className="navBar bg-green-600 text-center">
          <ul className="flex justify-center text-white">
            <li className="w-30 m-3.5 p-3.5 active">
              <a href="#" className="">
                <i class="fa-solid fa-house mr-2"></i>
                Home
              </a>
            </li>
            <li className="w-30 m-3.5 p-3.5">
              <a href="#" className="">
                <i class="fa-solid fa-address-card mr-2"></i>
                About us
              </a>
              <div className="subMenuOne hidden">
                <ul>
                  <li><a href="#">Mission</a></li>
                  <li><a href="#">Vision</a></li>
                  <li><a href="#">Team</a></li>
                </ul>
              </div>
            </li>
            <li className="w-30 m-3.5 p-3.5">
              <a href="#" className="">
                <i class="fa-solid fa-clone mr-2"></i>
                Services
              </a>
            </li>
            <li className="w-30 m-3.5 p-3.5">
              <a href="#" className="">
                <i class="fa-brands fa-angellist mr-2"></i>
                Investore
              </a>
            </li>
            <li className="w-30 m-3.5 p-3.5">
              <a href="#" className="">
                <i class="fa-solid fa-user mr-2"></i>
                Clients
              </a>
            </li>
            <li className="w-30 m-3.5 p-3.5">
              <a href="#">
                <i class="fa-solid fa-dollar-sign mr-2"></i>
                Pricing
              </a>
            </li>
            <li className="w-30 m-3.5 p-3.5">
              <a href="#" className="">
                <i class="fa-solid fa-pen-to-square mr-2"></i>
                Training
              </a>
            </li>
            <li className="w-30 m-3.5 p-3.5">
              <a href="#" className="">
                <i class="fa-solid fa-phone mr-2"></i>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* header part end */}
    </>
  );
}

export default App;
