import React from "react";
import "./style.css"
import Barra from "./Components/Navbar/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Final from "./Components/Footer/footer"
import { useForm } from "react-hook-form";








function App() {

  const { register, handleSubmit, formState:{ errors } } = useForm();
    const onSubmit = data => console.log(data);


    function DadosSalvos(){
      
      alert("Dados salvos com sucesso!!")     

    }   
  
    
  return (
    <div>
      <Barra />
      <form className="formulario" onSubmit={handleSubmit(onSubmit)} >    


        <label for="inputPassword5" class="form-label">Nome completo:</label>  
        <input type="text" required id="nome"  {...register("nome")} class="form-control" aria-describedby="passwordHelpBlock" />              
        <div id="" class="form-text">
          Insira seu nome completo
        </div><br/>
        

        <label for="inputPassword5" class="form-label">Endereço:</label>
        <input type="text" id="inputPassword5" {...register("endereco")} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="endereco"  class="form-text">
          Insira seu endereço
        </div><br/>
        

        <label for="inputPassword5" class="form-label">Email:</label>
        <input type="text" id="inputPassword5" {...register("email")} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="email"  class="form-text">
          Insira seu Email
        </div><br/>

        <label for="inputPassword5" class="form-label">Cidade:</label>
        <input type="text" id="inputPassword5" {...register("cidade")} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="cidade"  class="form-text">
          Insira sua cidade
        </div><br/>

        <label for="inputPassword5" class="form-label">Estado:</label>
        <input type="text" id="inputPassword5" {...register("estado")} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="estado"  class="form-text">
          insira seu estado
        </div><br/>

        <label for="inputPassword5" class="form-label">CEP:</label>
        <input type="text" id="inputPassword5" {...register("cep")} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="cep"  class="form-text">
          insira seu CEP
        </div><br/>

        <label for="inputPassword5" class="form-label">Telefone:</label>
        <input type="text" id="inputPassword5" {...register("telefone")} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="telefone"  class="form-text">
          insira seu Telefone
        </div><br/>

        <label for="inputPassword5" class="form-label">UF:</label>
        <input type="text" required id="inputPassword5" {...register("uf")} class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="uf"  class="form-text">
          UF
        </div><br/>


        <button type="submit" onClick={DadosSalvos} class="btn btn-warning">Warning</button><br/>

        
    </form>
    <Final/>
    

     
    
    </div>

  );
}
export default App