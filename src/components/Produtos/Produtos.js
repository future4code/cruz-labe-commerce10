import React from 'react'
import styled from 'styled-components';
import CardProduto from '../CardProduto/CardProduto';



const FlexDeCima = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 16px;
`

const GridProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
`



export default class Produtos extends React.Component {                   

    render() {               
        const ordem = () => {
            let listaProdutos = [...this.props.produtos]   
            if (this.props.crescente === true) {
                const listaProdutosO = listaProdutos.sort((a,b) => a.preco - b.preco)
                return listaProdutosO
            } else /*if (this.props.ordenacao === 'crescente')*/ {
                const listaProdutosO = listaProdutos.sort((a,b) => b.preco - a.preco)
                return listaProdutosO
            }
        }
        
        const listaProdutosRender = ordem().map(produto => {
                return <CardProduto
                            imagem={produto.imagem}
                            titulo={produto.nome}
                            preco={produto.preco}
                        />
        })
        // onChange = {onChangeSelect()}
        return <div>
            <FlexDeCima>
                <p>Quantidade de Produtos: {this.props.produtos.length}</p>
                <label>Ordenação:&ensp;  
                    <select onChange={this.props.onChangeSelect}>
                        <option value='true'>Crescente</option>
                        <option value='false'>Decrescente</option>
                    </select>
                </label> 
            </FlexDeCima>
            
            <GridProdutos>
                {listaProdutosRender}
            </GridProdutos>
        </div>
    }
}
