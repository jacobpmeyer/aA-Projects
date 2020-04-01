import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/error_page.css';

function ErrorPage() {
  
  return (
    <div className="err-page-main">
      <span className="err-page-content">
      <h1>404 - Page Not Found</h1>
      <p> Ooooops!  A dog age this page!</p>
      <br/>
      <Link to='/'>Back to Home Page</Link>
      
      </span>
    </div>
  )
}

export default ErrorPage;