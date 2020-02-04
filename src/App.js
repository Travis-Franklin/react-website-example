import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Navbar from './Navbar';

let headerCopy = 'Amazing Full Stack web Developer';

let websiteCopy = `strings and impsum asdf asdf asdf asdf ba ba blacksheep`;

let linkNames = ['home', 'porttolio', 'Contact']

function App() {
  return (
   <div className="container-fluid">
     <Header jeff = {headerCopy}/>
     <Navbar array = {linkNames}/>
      <MainContent content = {websiteCopy}/>
      <Footer/>
   </div>
  );
}

export default App;
