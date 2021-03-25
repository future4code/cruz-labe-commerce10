import React from 'react';
import styled from 'styled-components';
import CardProduto from '../CardProduto/CardProduto';



const ItemCart = styled.div`
display: flex;
width: 70%;
flex-direction: column;
>div{display: flex; 
justify-content: space-between;
align-items: center;
}
`
const ContainerCart = styled.div`
margin-top: 10px;
border: 1px solid black;
display: flex;
align-items: center;
flex-direction: column;
height: 60vh;

`
const Excluir = styled.button`
border: 1px solid black;
display: flex;
align-items: center;
height: 30px;
`



const TituloC = styled.div`
   text-align: center;
`

export default class Cart extends React.Component {




    render() {


        const produtoCartOrdem = () => {
            const cartProduct = this.props.cart
            let total = 0;


            const divCart = cartProduct.map((produto) => {
                total = total + produto.preco * produto.quantidade
                return <div>
                    <p>
                        {produto.quantidade}X
                    </p>

                    <p>
                        {produto.nome}
                    </p>

                    
                        <Excluir onClick={() => this.props.removendoDoCart(produto.id)} >Remover</Excluir>
                    
                </div>
            })


            return <ItemCart>{divCart}

                <div>
                    <p>Total</p>
                    <p>{total}</p>

                </div>
            </ItemCart>
        }

        return (
            <div>
                <ContainerCart>

                    <TituloC>Carrinho:</TituloC>


                    
            


        
                    {produtoCartOrdem()}
                </ContainerCart>

            </div>



        );
    }
}

