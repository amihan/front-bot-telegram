import { Button, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTelegram } from '../hooks/useTelegram';
import { useSearchParams } from 'react-router-dom';

const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    max-width: 400px;
    margin: auto;
    margin-top: 16px;
`;

const ChannelInfo = styled.div`
    font-style: italic;
    font-weight: bold;
    margin-bottom: 8px;
`;

const EditAdvertisement = () => {
    // eslint-disable-next-line no-unused-vars
    let [searchParams, setSearchParams] = useSearchParams();

    // Получение параметров
    let channel_name = searchParams.get("channel_name");
    let channel_id = searchParams.get("channel_id");
    let priceParams = searchParams.get("price");
    let currencyParams = searchParams.get("currency");


    const [price, setPrice] = useState(priceParams ? priceParams : '');
    const [currency, setCurrency] = useState(currencyParams ? currencyParams : 'rub');


    const { onClose, queryId } = useTelegram()

    const handleChangePrice = (e) => {
        const value = +e.target.value;

        if (value >= 0) {
            setPrice(e.target.value);
        }
    }

    const handleChange = (e) => {
        setCurrency(e.target.value);
    };


    const handleSendData = () => {
        axios.post('http://localhost:8000/web-data', { price, currency, queryId })
            .then((response) => {
                console.log('Данные успешно отправлены:', response.data);
                onClose();
            })
            .catch((error) => {
                console.error('Ошибка при отправке данных:', error);
            });
    }



    return (
        <RootContainer>
            <ChannelInfo>
                <p>Название канала:{channel_name}</p>
                <p>ID канала: {channel_id}</p>
                <p>Валюта: {currency}</p>
            </ChannelInfo>
            <TextField label="Цена" type="number" value={price} onChange={handleChangePrice} />
            <Select labelId="currency-label" defaultValue={currency} onChange={handleChange}>
                <MenuItem value="rub">RUB</MenuItem>
                <MenuItem value="usdt">USDT</MenuItem>
            </Select>
            <Button variant="contained" color="primary" onClick={handleSendData}>Отправить</Button>
        </RootContainer>
    );
};

export default EditAdvertisement;