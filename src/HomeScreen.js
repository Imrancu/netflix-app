import React from 'react';
import Banner from './Banner';
import './HomeScreen.css';
import Navbar from './Navbar';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Navbar />

      <Banner />

      {/* <Row
        title='Netflix Original'
       />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row /> */}
    </div>
  );
};

export default HomeScreen;