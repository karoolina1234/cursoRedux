import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
    return(
        <>
        <div class="jumbotron">
            <h1 class="display-3">Bemv indo!</h1>
            <p class="lead">Use a barra de navegação para acessar as paginas.</p>
            <hr class="my-4"/>
            <p class="lead">
                <Link to="/cadastro" class="btn btn-primary btn-lg" role="button">Cadastrar</Link>
            </p>
        </div>
        </>
    )
}
export default Home