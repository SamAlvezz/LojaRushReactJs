import React from 'react';
import Produto from '../../components/Produto/Produto'
import './ListaDeProdutos.css'
import Rush from '../../assets/rushrush.jpg'
import FlyByNight from '../../assets/flybynight.jpg'
import CaressOfStell from '../../assets/cos2.jpg'
import img2112 from '../../assets/cd2112cd.jpeg'
import FarewellToKings from '../../assets/cd ftk.webp'
import Hemispheres from '../../assets/cd hm2.jpg'
import PermanentWaves from '../../assets/perma.jpg'
import MovingPictures from '../../assets/mv2.jpg' 
import Signals from '../../assets/signals.jpg'
import Logo from '../../assets/rushrush.jpg'

export default function ListaDeProdutos() {
    return (
        <div>
            <img src={Logo} alt="Logo" style={{ maxWidth: "200px", display: "block", margin: "10px auto" }}></img>

            <div className='lista'>
            
                <Produto nome="Rush(1974)" Preço="$19,74" image={Rush}></Produto>
                <Produto nome="Fly by Night(1975)" Preço="$19,75" image={FlyByNight}></Produto>
                <Produto nome="Caress of Steel(1975)" Preço="$19,75" image={CaressOfStell}></Produto> 
                <Produto nome="2112(1976)" Preço="$21,12" image={img2112}></Produto>
                <Produto nome="A Farewell to Kings(1977)" Preço="$19,77" image={FarewellToKings}></Produto>
                <Produto nome="Hemispheres(1978)" Preço="$19,78" image={Hemispheres}></Produto>
                <Produto nome="Permanent Waves(1980)" Preço="$19,80" image={PermanentWaves}></Produto>
                <Produto nome="Moving Pictures(1981)" Preço="$19,81" image={MovingPictures}></Produto>
                <Produto nome="Signals(1982)" Preço="$19,82" image={Signals}></Produto>
                
            </div>
        </div>
      
    );
}
