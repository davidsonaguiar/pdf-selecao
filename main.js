const ejs = require("ejs");
const pdf = require("html-pdf");

const candidatos = [
    {
        nome: "João Silva",
        dataNascimento: "2000-05-15",
        cpf: "123.456.789-00",
        gee: "GEE123456",
        escola: "Escola Estadual ABC",
    },
];

function gerarPDF(html, cpf) {
    pdf.create(html, {  }).toFile(`./pdfs/${cpf}.pdf`, (err, res) => {
        if (err) console.log(err);
        else console.log(res);
    });
}

function gerarHTML(candidatos) {
    candidatos.forEach((candidato) => {
        ejs.renderFile("cartao-resposta.ejs", {candidato}, (err, html) => {
            if (err) {
                console.log('Erro ao renderizar o EJS:', err);
            } else {
                gerarPDF(html, candidato.cpf);
            }
        });
    });
}

gerarHTML(candidatos);
