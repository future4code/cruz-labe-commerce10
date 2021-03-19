import React from 'react';
import styled from 'styled-components';
import './App.css';
import Cart from './Components/Cart/Cart';

export default class App extends React.Component {


    addProdutoCart = (produtoId) => {
        const produtoCart = this.state.produtoCart.find(produtos => produtoId === produtos.id)

        if (produtosid) {
            const produtoAdicionado = this.state.produtoCart.map(produtos => {
                if (produtoId === produto.id) {
                    return
                    ...produtos,
                quantidade: produto.quantidade + 1
        
                    
    }
    }
       return produtos
        })
        this.setState({produtoCart: produtoAdicionado})
    }else{
        const indoParaCarrinho = produtos.find(produtos => produtosId === produtos.id)
        const produtoAdicionado = 
    }


