import React from 'react';
import { 
    FooterContainer,
    FooterInformationContainer,
    FooterTitle,
    FooterTitleItem,
    FooterItem
    } from '../Footer.style/Footer.style';


function Footer(props) {
    return (
        <FooterContainer>
            <FooterTitle>
                Shortly
            </FooterTitle>
                <FooterInformationContainer>
                    <FooterTitleItem>
                        Features
                    </FooterTitleItem>
                    <FooterItem>
                        Link Shortening
                    </FooterItem>
                    <FooterItem>
                        Branded Links
                    </FooterItem>
                    <FooterItem>
                        Analytics
                    </FooterItem>
                </FooterInformationContainer>
                <FooterInformationContainer>
                    <FooterTitleItem>
                        Resources
                    </FooterTitleItem>
                    <FooterItem>
                        Blog
                    </FooterItem>
                    <FooterItem>
                        Developers
                    </FooterItem>
                    <FooterItem>
                        Support
                    </FooterItem>
                </FooterInformationContainer>
                <FooterInformationContainer>
                    <FooterTitleItem>
                        Company
                    </FooterTitleItem>
                    <FooterItem>
                        About
                    </FooterItem>
                    <FooterItem>
                        Our Team
                    </FooterItem>
                    <FooterItem>
                        Careers
                    </FooterItem>
                    <FooterItem>
                        Contact
                    </FooterItem>
                </FooterInformationContainer>
                <FooterInformationContainer isSocialMediaContainer>
                    <FooterItem isSocialMediaItem>
                        <i className="fab fa-facebook-square"></i>
                    </FooterItem>
                    <FooterItem isSocialMediaItem>
                        <i className="fab fa-twitter"></i>
                    </FooterItem>
                    <FooterItem isSocialMediaItem>
                        <i className="fab fa-pinterest"></i>
                    </FooterItem>
                    <FooterItem isSocialMediaItem>
                        <i className="fab fa-instagram"></i>
                    </FooterItem>
                </FooterInformationContainer>
        </FooterContainer>
    );
}

export default Footer;