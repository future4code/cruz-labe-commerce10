import React from 'react'
import styled from 'styled-components';

const ContainerCard = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction:column;
`
const DivTextos = styled.div`
    display:flex;
    flex-direction: column;
    padding:16px;
`
const DivImagem = styled.div`
    height:200px;
    width:200px;
`


export default class CardProduto extends React.Component {
    
    
    render () {
        return <ContainerCard>
            <DivImagem>
            <img height='200px' width='200px' src={this.props.imagem} alt={this.props.titulo}/>
            </DivImagem>
            <DivTextos>
                <p className="title">{this.props.titulo}</p>
                <p className="price">R${this.props.preco},00</p>
            </DivTextos>
            <button onClick={()=>this.props.adicionarCarrinho(this.props.id)}>Adicionar ao carrinho</button>
        </ContainerCard>
    }
}