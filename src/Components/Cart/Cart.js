import React from 'react';
import styled from 'styled-components';



const Cart1 = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction:column;
`

    export default class Cart extends React.Component {

    render() {

        return (
            <div className = "Cart1">
                <h3>Carrinho:</h3>
                <button onClick={this.adicio}>Remover</button>
               <CartImagem>
               <img height='15px' width='15px' src={} />
               </CartImagem>

            </div>
        );
    }
}

