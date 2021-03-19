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
            <div className = "cart1">
                <h3>Carrinho:</h3>
                <button onClick={this.adicio}>Remover</button>
               <CartImagem>
               <img height='15px' width='15px' src={'https://stock.adobe.com/br/images/id/68512486?as_campaign=Flaticon&as_content=api&as_audience=idp&tduid=b54b541d4c7ca23ff738219c67f35136&as_channel=affiliate&as_campclass=redirect&as_source=arvato'} />
               </CartImagem>

            </div>
        );
    }
}

