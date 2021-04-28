import styled from 'styled-components';
import ImgBg from '../ImageSlider/campingbg.jpg';

export const HeroContainer = styled.div`
  background: url(${ImgBg});
  background-size: cover;
  background-position: center;
`;

export const HeroContent = styled.div`
    height: calc(100vh);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) /2);
`

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-text-replace: uppercase;
  line-height: 1;
  font-weight: bold;
  
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`

export const HeroH1 = styled.h1`
  font-family: "Berlin Sans FB";
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  `
export const HeroP = styled.p`
font-size: clamp(2rem, 2.5vw, 3rem);
margin-bottom: 2rem;
`
