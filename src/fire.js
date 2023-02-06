import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Fire.css';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: './images/profile1.jpg',
    caption: 'Slide 1'
  },
  {
    url: './images/back.jpg',
    caption: 'Slide 2'
        },
  {
    url: './images/profile1.jpg',
    caption: 'Slide 3'
  },
];
   
const Fire = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}} className="slida">
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Fire