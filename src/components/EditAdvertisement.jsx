import { Button, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
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


const EditAdvertisement = () => {

    const [price, setPrice] = useState(0);
    const [currency, setCurrency] = useState();

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleChange = (e) => {
        setCurrency(e.target.value);
    };


    const handleSendData = () => {
        console.log('sendData')
    }


    return (
        <RootContainer>
            <ChannelInfo>
                <p>Название канала:Редактирование обьявления</p>
                <p>ID канала: 123456789</p>
                <p>{currency}</p>
            </ChannelInfo>
            <TextField label="Цена" type="number" value={price} onChange={handleChangePrice} />
            <Select labelId="currency-label" defaultValue="rub" onChange={handleChange}>
                <MenuItem value="rub">RUB</MenuItem>
                <MenuItem value="usdt">USDT</MenuItem>
            </Select>
            <Button variant="contained" color="primary" onClick={handleSendData}>Отправить</Button>
        </RootContainer>
    );
};

export default EditAdvertisement;