import React from 'react';
import styled, { useTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';

const ButtonRow = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));

const NavLinkButton = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    padding: '8px 16px',
    fontSize: '18px',
    borderRadius: '4px',
    color: 'var(--tg-theme-button-color)',
    backgroundColor: '#FFF8DC',
    transition: 'background-color 0.3s, color 0.3s',
    '&.active': {
        backgroundColor: '#CD853F',
        color: '#FFFFFF', 
    },
}));


const Header = () => {
    const theme = useTheme(); 

    return (
        <ButtonRow>
            <NavLinkButton to="/" activeClassName="active" theme={theme}>
                Создать 
            </NavLinkButton>
            <NavLinkButton to="/edit" activeClassName="active" theme={theme}>
                Редактировать
            </NavLinkButton>
        </ButtonRow>
    );
};

export default Header;

