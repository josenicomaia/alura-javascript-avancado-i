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
            negociacoesView: $('#negociacoesView'),
        };

        this._negociacaoRepository = new NegociacaoRepository();
        this._negociacoesView = new NegociacoesView(this.R.negociacoesView);
        this._negociacoesView.render(this._negociacaoRepository);
    }

    adicionar(event) {
        event.preventDefault();
        this._negociacaoRepository.adicionar(this._pegarNegociacao());
        this._negociacoesView.render(this._negociacaoRepository);
        this._limparFormulario();
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
}