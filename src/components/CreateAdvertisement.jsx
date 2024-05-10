import { Button, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
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

const ChannelInfo = styled('div')({
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: '8px',
});

const CreateAdvertisement = () => {
    return (
        <RootContainer>
            <ChannelInfo>
                <p>Название канала: Создание обьявления</p>
                <p>ID канала: 123456789</p>
            </ChannelInfo>
            <TextField label="Цена" type="number" />
          
            <Select labelId="currency-label" defaultValue="rub">
                <MenuItem value="rub">RUB</MenuItem>
                <MenuItem value="usdt">USDT</MenuItem>
            </Select>

            <Button variant="contained" color="primary">Отправить</Button>
        </RootContainer>
    );
};

export default CreateAdvertisement;