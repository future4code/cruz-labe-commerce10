import React from 'react';
import styled from 'styled-components';



const DivImgCart = styled.div `
height:15px;
width:15px;
`
const Cart1 = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction:column;
`

    export default class Cart extends React.Component {

    render() {

        return (
            <div>
            <Cart1>
                <h3>Carrinho:</h3>
                <button onClick={this.produto}>Remover</button>
                
                </Cart1>
                <DivImgCart>
                <img height='15px' width='15px' src={} />
                
                </DivImgCart>

               
              
            </div>
        

            
        );
    }
}

