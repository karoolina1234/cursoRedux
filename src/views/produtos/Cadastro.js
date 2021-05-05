import React from 'react'
import ProdutoService from '../../app/produtoService'
import NavBar from '../../components/Navbar'

const estadoInicial  = {
       nome: '', 
       sku: '',
       descricao: '', 
       preco: 0,
       fornecedor: '',
       sucesso: false,}

export default class CadastroProduto extends React.Component{
   state={estadoInicial}

       constructor(){
           super()
           this.service  = new ProdutoService(); // instancia de produtoService
       }

       onChange = (event) =>{
           const valor = event.target.value
           const nomeCampo = event.target.name
           this.setState({ [nomeCampo]: valor })
       }

       onSubmit = (event) =>{
          const produto = {
              nome : this.state.nome, 
              sku : this.state.sku,
              descricao : this.state.descricao,
              preco: this.state.preco
          }
          this.service.salvar(produto)
          this.limparCampos()
          this.setState({sucesso:true})
       }
       limparCampos = () =>{
           this.setState(estadoInicial)
       }
    render(){
        return(
            <div className="container">
            <NavBar/>
            <div class="card mb-3">
                <div class="card-header">Cadastro de produto</div>
                <div class="card-body">
                    
                {this.state.sucesso &&
                 <div class="alert alert-dismissible alert-success">
                 <button type="button" class="close" data-dismiss="alert">&times;</button>
                 <p class="mb-0">Cadastro realizado com sucesso.</p>
                 </div>}
               

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
                           <button className="btn btn-primary mt-2" onClick={this.limparCampos}>Limpar</button>
                       </div>
                   </div>
                </div>
            </div>
            </div>
        )
    }
}