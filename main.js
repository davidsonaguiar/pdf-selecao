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
    // {
    //     nome: "Maria Oliveira",
    //     dataNascimento: "1998-07-20",
    //     cpf: "987.654.321-00",
    //     gee: "GEE654321",
    //     escola: "Escola Municipal XYZ"
    // },
    // {
    //     nome: "Carlos Pereira",
    //     dataNascimento: "2001-11-10",
    //     cpf: "456.123.789-00",
    //     gee: "GEE789123",
    //     escola: "Escola Técnica QRS"
    // },
    // {
    //     nome: "Ana Costa",
    //     dataNascimento: "1999-03-30",
    //     cpf: "321.654.987-00",
    //     gee: "GEE321654",
    //     escola: "Escola de Ensino Fundamental LMP"
    // }
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
