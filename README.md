# Programa de Sensoriamento de uma Bancada de Desempenho

## Screenshots
![](/src/assets/tela2.png)

## Gráficos
- [ ] Tração estática/Empuxo em função do tempo de ensaio
- [ ] Torque em função do tempo de ensaio
- [ ] Rotação em função do tempo de ensaio
- [ ] Potência em função do tempo de ensaio
## Valores
- [ ] Tração média 
- [ ] Torque médio
- [ ] Rotação média
- [ ] Potência média
### Requisitos
- [ ] Escolher Tempo do ensaio
- [ ] Adicionar várias hélices
- [ ] Exportar os valores obtidos em um arquivo com o nome do programa e hélice
## Adicionais
- [ ] Adicionar várias hélices no mesmo save
## Dúvidas
- [ ] Executar o ensaio e gerar o gráfico em tempo real, ou gerar o gráfico após execução
# Erros para corrigir
- [ ] Mudar o icone de minimizar quando está maximizado

# Estrutura de funcionamento do programa
1. Salvamento de dados
- [ ] Criar meu tipo de arquivo, na tela da primeira opção devo adicionar para escolher onde salvar
na tela dos gráficos adicionar opção de salvar.
- [ ] Salvar apenas em json e fazer o mesmo do feito acima
2. Estrutura do recebimento de dados dos sensores
- [ ] Verificar as portas que possa está
``` js

/* Realizando a conexão */
function connect() {
    /*  
    Verifica as portas
    Se conectar prossegue
    E retorna a port e parser

    Assim que começar a conectar muda um estado para conectando
    Mostrando na tela e sem iniciar a contagem
    */
    return { port, parser }
}

const { port, parser } = connect()

port.on('open', () => (/* Muda o estado para conexão iniciada, inicia o cronometro, e seta o timeout*/))

parser.on('data', (line) => {
    /* Atualizar o valor do data com o line */
})

```
