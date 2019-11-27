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

        this._negociacaoRepository = new NegociacaoRepository();
    }

    adicionar(event) {
        event.preventDefault();
        const negociacao = this._negociacaoRepository.adicionar(this._pegarNegociacao());
        this._adicionarNegociacao(negociacao);
        this._limparFormulario();
    }

    _adicionarNegociacao(negociacao) {
        this.R.tbody.append(this._criarLinha(negociacao));
    }

    _pegarNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this.R.data.value),
            this.R.quantidade.value,
            this.R.valor.value);
    }

    _limparFormulario() {
        this.R.data.value = '';
        this.R.quantidade.value = 1;
        this.R.valor.value = 0;
        this.R.data.focus();
    }

    _criarLinha(negociacao) {
        const tr = document.createElement('tr');
        tr.append(this._criarCelula(DateHelper.dataParaTexto(negociacao.data)));
        tr.append(this._criarCelula(negociacao.quantidade));
        tr.append(this._criarCelula(negociacao.valor));
        tr.append(this._criarCelula(negociacao.volume));

        return tr;
    }

    _criarCelula(campo) {
        const td = document.createElement('td');
        td.textContent = campo;

        return td;
    }
}