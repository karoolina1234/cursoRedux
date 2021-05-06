const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(errors){
    this.errors = errors;
}

export default class ProdutoService {

    validar = (produto) => {
        const errors = []

        if(!produto.nome){
            errors.push('O campo Nome é obrigatório.')
        }

        if(!produto.sku){
            errors.push('O campo SKU é obrigatório.')
        }

        if( !produto.preco || produto.preco <= 0){
            errors.push('O campo Preço deve ter um valor maior que zero(0).')
        }

        if(!produto.fornecedor){
            errors.push('O campo Fornecedor é obrigatório.')
        }

        if(errors.length > 0){
            throw new ErroValidacao(errors)
        }
    }

 
    obterProdutos = () =>{
        const produtos = localStorage.getItem(PRODUTOS)
        if(!produtos){
            return [];
        }
        return JSON.parse(produtos)
    }
    obterIndex = ( sku ) =>{
        let index = null; // o index inicializa null
        this.obterProdutos().forEach((produto, i) => {
            if(produto.sku === sku){ // se o sku do produto for igual ao produto a ser editado
                index =  i; // o index vai recer o index do produto
            }
            
        });
        return index
    }
    salvar = (produto) => {
        this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos){
            produtos = []
        }else{
            produtos = JSON.parse(produtos)
        }   
       const index =  this.obterIndex(produto.sku) // a variavel index recebe o retorno da função obterIndex
       if(index ===  null){ // se n houver index adiciona o produto normalmente
            produtos.push(produto)
       }else{ // se houver index apenas substitua o produto.
           produtos[index] = produto;
       }
       
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos)  )
    }
}