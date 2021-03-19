import React from 'react';
import styled from 'styled-components';




const DivImgCart = styled.div `
height:15px;
width:15px;
`
const TituloC = styled.div`
   text-align: center;
`

    export default class Cart extends React.Component {

    render() {

        return (
            <div>


            <TituloC>Carrinho:</TituloC>
                
               
                <DivImgCart>
                <img height='15px' width='15px' src={} />
                
                </DivImgCart>

               
              
            </div>
        

            
        );
    }
}

