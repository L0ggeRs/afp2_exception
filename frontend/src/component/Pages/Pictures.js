import React from 'react';
import ImageSlider from './ImageSlider/ImageSlider';
import { SliderData } from './ImageSlider/SliderData';
import './Pictures.css';

class Pictures extends React.Component{
    render(){
        return <ImageSlider slides={SliderData} />;
    }
}
export default Pictures;