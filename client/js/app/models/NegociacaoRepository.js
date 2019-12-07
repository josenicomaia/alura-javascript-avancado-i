class NegociacaoRepository {
    constructor() {
        this._negociacoes = [];
    }

    adicionar(negociacao) {
        this._negociacoes.push(negociacao);

        return negociacao;
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvaziar() {
        this._negociacoes = [];
    }
}