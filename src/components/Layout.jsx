import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const RootContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    maxWidth: 400,
    margin: 'auto',
    marginTop: '16px',
});


const Layout = () => {
    return (
        <RootContainer>
        <Header/>
        <main className="container">
            <Outlet />
        </main>
        </RootContainer>
    )
}

export {Layout}