
//TEMPLATE
class Carros {
    constructor() {
        this.id = 1;
        this.arrayCarros = [];
        this.editId=null;
    }

    //METODOS OU AÇOES EM FUNÇÕES
    salvar() {
        let carros = this.lerDados();

        if (this.validaCampos(carros)){
            if(this.editId==null){  
            this.adicionar(carros);
        }else{
            this.atualizar(this.editId,carros)
        }
    }
        
        this.listaTabela();
        this.cancelar();
    }   


    listaTabela(){
        let tbody=document.getElementById('tbody');
        tbody.innerText='';

        for(let i=0; i <this.arrayCarros.length;i++){
            let tr=tbody.insertRow();
            
            let td_id=tr.insertCell();
            let td_nome=tr.insertCell();
            let td_valor=tr.insertCell();
            let td_acoes=tr.insertCell();

            td_id.innerHTML=this.arrayCarros[i].id;
            td_nome.innerHTML=this.arrayCarros[i].nomeCarros;
            td_valor.innerHTML=this.arrayCarros[i].preco;
            td_acoes.innerHTML=this.arrayCarros[i].acoes;

            let imgEdit=document.createElement('img');
            imgEdit.src="imagens/edit.png";
            imgEdit.setAttribute('onclick', 'carros.editar('+ JSON.stringify(this.arrayCarros[i])+')');
            

            let imgDelete=document.createElement('img');
            imgDelete.src="imagens/delete.png";
            imgDelete.setAttribute('onclick', 'carros.delete('+this.arrayCarros[i].id+')');

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);

        }
    }
    lerDados() {
        let carros = {}
        carros.id = this.id
        carros.nomeCarros = document.getElementById('carro').value;
        carros.preco= document.getElementById('preco').value;   
        carros.acoes=''
        
        //detro do obj carro, estamos criando a popiedade nomecarros e valor

        return carros;

    }
    adicionar(carros){
        this.arrayCarros.push(carros);
        this.id++;


    }
    
    atualizar(id, carros){
        for(let i=0; i <this.arrayCarros.length;i++){
           if(this.arrayCarros[i].id==id){
            this.arrayCarros[i].nomeCarros=carros.nomeCarros;
            this.arrayCarros[i].preco=carros.preco;
           }
        }
    }
    validaCampos(carros) {
        let msg = '';
        if (carros.nomeCarros == '') {
            msg += '-informe o nome do carro '

        }
        if (carros.preco == '') {
            msg += '-informe o valor do carro '

        }

        if (msg !='') {
            alert(msg);
            return false;
        }
        return true
    }

    cancelar() {
        document.getElementById('carro').value=''
        document.getElementById('preco').value=''  
        
        document.getElementById('btn1').innerText='SALVAR';
        this.editId=null
    }

    delete(id){
        let tbody = document.getElementById ('tbody');
        
        for( let i=0;i < this.arrayCarros.length;i++){
            if(this.arrayCarros[i].id==id){
                this.arrayCarros.splice(i,1);
                tbody.deleteRow(i);
            }
        }
    }
    editar(dados){
        this.editId=dados.id;

        document.getElementById('carro').value=dados.nomeCarros;
        document.getElementById('preco').value=dados.preco;

        document.getElementById('btn1').innerText='Atualizar'

    }
}


//INTACIAS
var carros = new Carros();