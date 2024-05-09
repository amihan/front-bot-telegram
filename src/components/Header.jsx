import React from 'react';
import { CustomLink } from './CustomLink';

const Header = () => {
    return (
        <header>
            <CustomLink to="/">Создание обьявления</CustomLink>
            <CustomLink to="/edit">Редактирование обьявления</CustomLink>
        </header>
    );
};

export default Header;