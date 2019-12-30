import React from 'react'
import {navigateToUrl} from 'single-spa'
const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" onClick={navigateToUrl} className="brand-logo">News</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href="/world" onClick={navigateToUrl, () => window.location.reload()}>Home</a></li>
      <li><a href="/trending" onClick={navigateToUrl, () => window.location.reload()}>Trending</a></li>
        <li><a href="/india" onClick={navigateToUrl, () => window.location.reload()}>India</a></li>
        <li><a href="/sports" onClick={navigateToUrl, () => window.location.reload()}>Sports</a></li>
        <li><a href="/Finance" onClick={navigateToUrl, () => window.location.reload()}>Finance</a></li>
        <li><a href="/Technology" onClick={navigateToUrl, () => window.location.reload()}>Tech</a></li>
        <li ><a href="/Education" onClick={navigateToUrl, () => window.location.reload()}>Education</a></li>
        <li style={{backgroundColor:"black"}}><a href="/angularJS" onClick={navigateToUrl}>AngularJS</a></li>
      </ul>
    </div>
  </nav>
)


export default NavBar