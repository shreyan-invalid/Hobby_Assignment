import React from 'react';
import './Components/Title/Title';
import './App.css';
import Title from './Components/Title/Title';
import CarouselContainer from './Components/myCarousel/myCarousel';
import CardShowcase from './Components/CardShowcase/CardShowcase';
import UploadHobby from './Components/UploadHobby/UploadHobby';

function App() {
  return (
    <div className="app">
      <CarouselContainer/>
      <Title title={"HOBBIES AND PROJECTS"}/>
      <UploadHobby/>
      <CardShowcase/>
    </div>
  );
}

export default App;
