import React from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
display: flex;
flex-direction: column;
padding-left: 10px;
/* padding-right: 50px; */
margin-top: 10px;
/* margin-right: 720px; */
margin-left: 10px;
border: 1px solid black;
align-items: flex-start;  
height: 90vh;
width: 29vh; 
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
//  state = {
//      valorInputMax: "",
//      valorInputMin: "",
//      valorInputNome: ""
//  } 

//  onChangeInputMax = (event) => {
//     this.setState({valorInputMax: this.event.target.value})
//  }

//  onChangeInputMin = (event) => {
//     this.setState({valorInputMin: this.event.target.value})
//  }

//  onChangeInputNome = (event) => {
//      this.setState({valorInputNome: this.event.target.value})
//  }

 render () {
     return ( <FilterContainer>
      <h3>{"Filtros"}</h3>  
      <label>{"Valor máximo:"}</label>
      <input type="number" value={this.props.valorInputMax} onChange={this.props.onChangeInputMax}/> 
      <label>{"Valor mínimo:"}</label>               
      <input type="number"  value={this.props.valorInputMin} onChange={this.props.onChangeInputMin}/>
      <label>{"Busca por nome:"}</label>               
      <input type="text" value={this.props.valorInputNome} onChange={this.props.onChangeInputNome} />
     </FilterContainer>
     )

 }

}