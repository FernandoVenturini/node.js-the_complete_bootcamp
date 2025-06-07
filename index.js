/*
// Importando o módulo fs(fileSystem), que fornece métodos para interagir com o sistema de arquivos (ler, escrever, criar, excluir arquivos e diretórios, etc.). 
const fs = require('fs');

// stream/consumers(fornece utilitários para consumir dados de streams (fluxos de dados)). Exporta um objeto, e então ela extrai a propriedade chamada text desse objeto e a atribui a uma constante text.
const { text } = require('stream/consumers');

// BLOCKING SYNCHRONOUS WAY
// fs.readFileSync(): Este é um método do módulo fs que lê o conteúdo de um arquivo de forma síncrona. "Síncrona" significa que o Node.js vai parar de executar qualquer outra coisa no seu código até que a leitura do arquivo seja concluída.
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8'); // especifica o caminho do arquivo a ser lido.
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/input.txt', textOut);
console.log('File written!');

// NON-BLOCKING ASYNCHRONOUS WAY
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('ERROR! 💥');

    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
                console.log('Your file has been written 😃');
            });

        });
    });
});
console.log('Will read file!');
*/

/********************************SERVER********************************** */
const { createServer } = require('node:http');
const hostName = '127.0.0.1';
const PORT = 8000;

const server = createServer((req, res) => {
    res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}.`);
});