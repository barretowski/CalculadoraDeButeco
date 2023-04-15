import React from 'react';
import Form from './Form';
import Grid from './Grid';
import Header from './Header';
import Footer from './Footer';

class Index extends React.Component
{
    constructor() {

        super();

        this.state = {
            tarefa: "",
            conta: 0,
            qtd: 1,
            gorjeta:0,
            gorjetaFinal: 0,
            contaPorPessoa: 0,
            tarefas: [],
            contaString: "",
            gorjetaFinalString: "",
            contaPorPessoaString: ""
        }
    }
   

    adicionar = () => {

        if (this.state.tarefa != "") {
            let tarefas = this.state.tarefas;

            let conta = parseFloat(this.state.tarefa);
            let gorjeta = parseFloat(this.state.gorjeta);
            
            conta += this.state.conta;
            this.state.contaString = conta.toFixed(2)+" R$";

            let contaPorPessoa = parseFloat(conta/this.state.qtd);
            this.state.contaPorPessoaString = contaPorPessoa.toFixed(2)+" R$";

            let gorjetaFinal = parseFloat((gorjeta*conta)/100);
            this.state.gorjetaFinalString = gorjetaFinal.toFixed(2)+" R$";
            
            tarefas.push(conta);

            this.setState({
                tarefa: "",
                conta: conta,
                gorjetaFinal: gorjetaFinal,
                tarefas: tarefas,
            });

        }
    }

    zerar = () => {

        let tarefas = this.state.tarefas;
        tarefas = [];

        this.setState({
            tarefa: "",
            conta: 0,
            gorjeta:0,
            qtd: 1,
            gorjetaFinal: 0,
            contaPorPessoa: 0,
            tarefas: tarefas,
            contaString: "",
            gorjetaFinalString: "",
            contaPorPessoaString: ""
        });
        
    }

    render = () => {
        
        let saida = 
           <div>
                <Header/>
                <Form pai={this} />
                <Grid pai={this} />
                <Footer/>

           </div>
        return saida;
    }
}

export default Index;