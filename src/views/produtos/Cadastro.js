import React from 'react'

import NavBar from '../../components/Navbar'
export default class CadastroProduto extends React.Component{
   state={
       nome: '', 
       sku: '',
       descricao: '', 
       preco: 0,
       fornecedor: '',
       }

       onChange = (event) =>{
           const valor = event.target.value
           const nomeCampo = event.target.name
           //colocar a variavel nomeCampo em cochetes para que o valor seja atribuido dinamicamente
           this.setState({ [nomeCampo]: valor })
       }

       onSubmit = (event) =>{
           console.log(this.state)
       }
    render(){
        return(
            <div className="container">
            <NavBar/>
            <div class="card mb-3">
                <div class="card-header">Cadastro de produto</div>
                <div class="card-body">
                   <div className="row">
                       <div className="col-md-6">
                           <div className="form-group">
                                <label>Nome do produto: *</label>
                                <input type="text"
                                onChange={this.onChange}
                                 className="form-control"
                                 value={this.state.nome}
                                 name="nome"/>
                           </div>
                       </div>
                       <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text"
                                onChange={this.onChange}
                                 className="form-control"
                                 value={this.state.sku}
                                 name="sku"/>
                            </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-md-12">
                         <div className="form-group">
                            <label>Descrição: </label>
                            <textarea 
                            onChange={this.onChange}
                            className="form-control"
                            value={this.state.descricao}
                            name="descricao"/>
                        </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-md-6">
                           <label>Preço: *</label>
                           <input className="form-control"
                           onChange={this.onChange}
                           value={this.state.preco}
                           name="preco"/>
                       </div>
                       <div className="col-md-6">
                           <label>Fornecedor: *</label>
                           <input className="form-control"
                           onChange={this.onChange}
                           value={this.state.fornecedor}
                           name="fornecedor"/>
                       </div>

                   </div>
                   <div className="row">
                       <div className="col-md-1">
                           <button 
                           className="btn btn-success mt-2"
                           onClick={this.onSubmit}>Salvar</button>
                       </div>
                       <div className="col-md-1">
                           <button className="btn btn-primary mt-2">Limpar</button>
                       </div>
                   </div>
                </div>
            </div>
            </div>
        )
    }
}