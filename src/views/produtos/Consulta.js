import React from 'react'
import NavBar from '../../components/Navbar'

export default class ConsultaProdutos extends React.Component{
    state ={
        produtos:[]
    }
    render(){
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
                    {this.state.produtos.map( produto =>{
                            return(
                                <tr>
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