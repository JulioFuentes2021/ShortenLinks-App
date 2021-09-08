import React from 'react';
import MobileNavbar from '../components/MobileNavbar';
import PcNavbar from '../components/PcNavbar';
import HeaderPresentation from '../components/HeaderPresentation';
import ShortenLink from '../components/ShortenLink';
import Cards from '../components/Cards';
import Line from '../components/Line';
import AdvancedStatics from '../components/AdvancedStatics';
import Boost from '../components/Boost';
import Footer from '../components/Footer';
import { CardsPosition, CardsContainer } from '../Cards.style/Cards.style'
import Image1 from '../images/image1.svg'
import Image2 from '../images/image2.svg'
import Image3 from '../images/image3.svg'

function App(props) {
    return (
        <>
            <PcNavbar/>
            <MobileNavbar/>
            <HeaderPresentation/>
            <ShortenLink/>
            <AdvancedStatics/>
            <CardsPosition>
                <CardsContainer>
                    <Cards
                        image={Image1}
                        alt={'Brand Recognition Image'}
                        title={'Brand Recognition'}
                        contentCard={'Boost your brang recognition with each click. Generic links don´t mean a thing. Branded links help instil confidence in your content.'}
                    />
                    <Cards
                        image={Image2}
                        alt={'Detailed Records Image'}
                        title={'Detailed Records'}
                        contentCard={'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'}
                    />
                    <Cards
                        image={Image3}
                        alt={'Fully Customizable Image'}
                        title={'Fully Customizable'}
                        contentCard={'Improve brand awareness and content discoberability through customizable links. Supercharging audience engagement.'}
                    />
                    <Line/>
                </CardsContainer>
            </CardsPosition>
            <Boost/>
            <Footer/>
        </>
    );
}

export default App;