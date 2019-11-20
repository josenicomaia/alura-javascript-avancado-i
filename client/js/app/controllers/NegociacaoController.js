class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this.R = {
            form: $('.form'),
            tbody: $('table tbody'),
            incluir: $('.form button[type="submit"]'),
            data: $('#data'),
            quantidade: $('#quantidade'),
            valor: $('#valor'),
        };
    }

    adicionar(event) {
        event.preventDefault();
        this._adicionarNegociacao(this._pegarNegociacao());
        this._limparCampos();
        this.R.data.focus();
    }

    _adicionarNegociacao(negociacao) {
        this.R.tbody.append(this._criarLinha(negociacao));
    }

    _pegarNegociacao() {
        const data = new Date(
            ...this.R.data.value
                .split('-')
                .map((value, index) => parseInt(value) - index % 2));

        return new Negociacao(
            data,
            this.R.quantidade.value,
            this.R.valor.value);
    }

    _limparCampos() {
        this.R.data.value = '';
        this.R.quantidade.value = 1;
        this.R.valor.value = 0;
    }

    _criarLinha(negociacao) {
        const tr = document.createElement('tr');
        tr.append(this._criarCelula(this._pegarTextoData(negociacao.data)));
        tr.append(this._criarCelula(negociacao.quantidade));
        tr.append(this._criarCelula(negociacao.valor));
        tr.append(this._criarCelula(negociacao.volume));

        return tr;
    }

    _pegarTextoData(data) {
        return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    }

    _criarCelula(campo) {
        const td = document.createElement('td');
        td.textContent = campo;

        return td;
    }
}