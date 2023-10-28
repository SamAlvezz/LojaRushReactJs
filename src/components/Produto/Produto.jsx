//1° Parte (Imports)
import React from 'react';
import './Produto.css'
import BotaoComprar from '../BotaoComprar/BotaoComprar';

export default function Produto({ nome, Preço, image }) {
    //2° Parte (Lógica)
    return (
        <div className='produto'>
            <div className='headerProduto'>
                <img src={image}></img>
            </div>
            <div className='description'>
                <h2>Albúm: {nome}</h2>
                <h2>Preço: {Preço}</h2>
                
            </div>
            <div className='cartButton'>
                <BotaoComprar></BotaoComprar>
            </div>
        </div>
    );
}
