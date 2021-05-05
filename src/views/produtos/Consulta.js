import React from 'react'
import NavBar from '../../components/Navbar'
import ProdutoService from '../../app/produtoService'
export default class ConsultaProdutos extends React.Component{
    state ={
        produtos:[]
    }
    constructor(){
        super()
        this.service = new ProdutoService()
    }
    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({produtos})
    }
    
    render(){
        console.log(this.state.produtos)
        return(
            <>
            <NavBar/>
            <div className="card">
                <div className="card-header">
                   <h4 className="text-center">Listagem de produtos</h4>
                </div>
                <div className="card-body">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome:</th>
                            <th>Sku:</th>
                            <th>Descrição:</th>
                            <th>Preço:</th>
                            <th>Fornecedor:</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.produtos.map( (produto , index)=>{
                            return(
                                <tr key={index}>
                                    <td>{produto.nome}</td>
                                    <td>{produto.sku}</td>
                                    <td>{produto.descricao}</td>
                                    <td>{produto.preco}</td>
                                    <td>{produto.fornecedor}</td>
                                </tr>
                            )
                            }
                    )}
                    </tbody>
                </table>
            </div>
            </div>
            </>
        )
    }
}