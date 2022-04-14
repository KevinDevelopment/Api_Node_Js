import React, { useState } from "react";
import "./style.css"
import Barra from "./Components/Navbar/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Final from "./Components/Footer/footer"










function App() {

  
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [email, setEmail] =useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [cep, setCep] = useState('')
  const [telefone, setTelefone] = useState('')
  const [uf, setUf] = useState('')

  

    

    

  return (
    <div>
      <Barra />
      <form className="formulario" method="POST" action="http://localhost:8081/rotas/add">


        <label for="inputPassword5" class="form-label">Nome completo:</label>
        <input type="text" required id="nome" name="nome" value={nome} onChange={(e)=> setNome(e.target.value)} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="" class="form-text">
          Insira seu nome completo
        </div><br />


        <label for="inputPassword5" class="form-label">Endereço:</label>
        <input type="text" required id="inputPassword5" name="endereco" value={endereco} onChange={(e)=> setEndereco(e.target.value)} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="endereco" class="form-text">
          Insira seu endereço
        </div><br />


        <label for="inputPassword5" class="form-label">Email:</label>
        <input type="text" required id="inputPassword5" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="email" class="form-text">
          Insira seu Email
        </div><br />

        <label for="inputPassword5" class="form-label">Cidade:</label>
        <input type="text" required id="inputPassword5" name="cidade" value={cidade} onChange={(e)=> setCidade(e.target.value)} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="cidade" class="form-text">
          Insira sua cidade
        </div><br />

        <label for="inputPassword5" class="form-label">Estado:</label>
        <input type="text" required id="inputPassword5" name="estado" value={estado} onChange={(e)=> setEstado(e.target.value)} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="estado" class="form-text">
          insira seu estado
        </div><br />

        <label for="inputPassword5" class="form-label">CEP:</label>
        <input type="text" required id="inputPassword5" name="cep" value={cep} onChange={(e)=> setCep(e.target.value)} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="cep" class="form-text">
          insira seu CEP
        </div><br />

        <label for="inputPassword5" class="form-label">Telefone:</label>
        <input type="text" required id="inputPassword5" name="telefone" value={telefone} onChange={(e)=> setTelefone(e.target.value)} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="telefone" class="form-text">
          insira seu Telefone
        </div><br />

        <label for="inputPassword5" class="form-label">UF:</label>
        <input type="text" required id="inputPassword5" name="uf" value={uf} onChange={(e)=> setUf(e.target.value)} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="uf" class="form-text">
          UF
        </div><br />


        <button type="submit"  class="btn btn-warning">Salvar</button><br />


      </form>
      <Final />




    </div>

  );
}
export default App