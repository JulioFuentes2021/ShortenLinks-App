import styled from 'styled-components';

//Mobiles Navbar Styles
export const NavbarContainer = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const Logo = styled.h1`
    font-weight: bolder;
    font-size: 2.3rem;
    color: #444;
    padding: 0 1rem;
`;

export const NavMobileIcon = styled.div`
    font-size: 2rem;
    padding: 0 1rem;
    color: #777;
`;

//Pc Navbar
export const Header = styled.header`
    display: none;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`

export const PcOptionsContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 1rem;

    a {
        color: #555;
        text-decoration: none;
        font-weight: bolder;
        font-size: 1.3rem;
    }
    a:hover {
        color: #000;
    }
`

export const LinkButton = styled.button`
    width: ${props => props.width};
    height: 2.9rem;
    font-size:${props => props.textSize};
    border-radius: 2rem;
    background: #13DED6;
    outline: none;
    border: none;
    color: #fff;
    font-weight: bolder;
    cursor: pointer;
    margin: ${props => props.padding};

    &:hover {
        opacity: .7;
    }
`

export const CambiarEsto = styled.a`
    margin: 0 1rem;
`