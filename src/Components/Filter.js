import React from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
display: flex;
flex-direction: column;
padding-left: 10px;
margin-top: 10px;
margin-right: 10px;
border: 1px solid black;
align-items: flex-start;  
height: 90vh;  
& > input {        
margin-bottom: 10px;   
 }`


// // const Inputs = styled.div`

// // `

// // const InputMax = styled.input`

// // `
// // const InputMin = styled.input`

// // `
// // const InputNome = styled.input`

// `


export default class Filter extends React.Component {
 state = {
     valorInputMax: "",
     valorInputMin: "",
     valorInputNome: ""

 } 

 onChangeInputMax = (event) => {
    this.setState({valorInputMax: this.event.target.value})

 }

 onChangeInputMin = (event) => {
    this.setState({valorInputMin: this.event.target.value})
 }

 onChangeInputNome = (event) => {
     this.setState({valorInputNome: this.event.target.value})
 }

 render () {
     return ( <FilterContainer>
      <h3>{"Filtros"}</h3>  
      <label>{"Valor máximo:"}</label>
      <input type="number" value={this.state.valorInputMax} onChange={this.onChangeInputMax}/> 
      <label>{"Valor mínimo:"}</label>               
      <input type="number"  value={this.state.valorInputMin} onChange={this.onChangeInputMin}/>
      <label>{"Busca por nome:"}</label>               
      <input type="text" value={this.state.valorInputNome} onChange={this.onChangeInputNome} />
     </FilterContainer>
     )

 }

}