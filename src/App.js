import React from 'react';
import Produtos from './components/Produtos/Produtos';
import './App.css';
import styled from 'styled-components';

const GridPrincipal = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding: 16px;
    gap: 8px;
`

const DivProdutos = styled.div`
  grid-column:2;
`

export default class App extends React.Component  {
  state = {
    produtos: [
      {
          id: 1,
          nome: 'Produto 1',
          preco: 100,
          imagem:'https://img.lojasrenner.com.br/item/550584434/zoom/5.jpg'
      },
      {
          id: 2,
          nome: 'Produto 2',
          preco: 10,
          imagem:'https://produtos.fotos-riachuelo.com.br/media/catalog/product/cache/3541e153ef6ead3044d72626c3847968/c/a/camiseta-nasa-astronauta---preto-13749137_foto5_still.jpg'
      },
      {
          id: 3,
          nome: 'Produto 3',
          preco: 150,
          imagem:'https://img.lojasrenner.com.br/item/552723522/zoom/10.jpg'
      },
      {
          id: 4,
          nome: 'Produto 4',
          preco: 300,
          imagem:'https://img.lojasrenner.com.br/item/557912218/zoom/10.jpg'
      }
  ],
    crescente: true
  }
  
  onChangeSelect = (event) => {
    debugger
    if (event.target.value === 'true') {
      this.setState({ crescente: true  })
    } else {
      this.setState({ crescente: false  })
    }
  }

  render() {
    return (<GridPrincipal>
      <DivProdutos>
        <Produtos estado = {this.state} produtos={this.state.produtos} crescente={this.state.crescente} onChangeSelect={this.onChangeSelect}/>
      </DivProdutos>
    </GridPrincipal>
    );
  }
  }

