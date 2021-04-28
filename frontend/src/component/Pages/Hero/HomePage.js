import React from 'react';
import {HeroContainer, HeroContent,HeroItems,HeroH1,HeroP} from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>A VILÁG LEGJOBB KEMPINGJE</HeroH1>
                    <HeroP>Foglalj időpontot MOST, akár kedvezményes áron!</HeroP>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;