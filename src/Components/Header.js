import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import { BrowserRouter as Router, Switch, Routes, Route, Link} from "react-router-dom";

export default function Header() {
  return (
    <div className="nav.div" id="navbarSupportedContent">
            <ul >
              <li className="nav-item">
                <img  src="./logo512.png" />



                <a className="nav-list" aria-current="page" href="/About">
                  About Us
                </a>

                <a className="nav-list" aria-current="page" href="/Contact">
                Contact Us
                </a>

                <a className="nav-list" aria-current="page" href="/Team">
                  Our Team
                </a>

                <a className="nav-list" aria-current="page" href="/Technologies">
                Technologies
                </a>

                <a className="nav-list" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        
  )
}
