class NegociacoesView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `;
    }

    adicionarNegociacao(negociacao) {
        this._elemento.querySelector('tbody').append(this._criarLinha(negociacao));
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

    render() {
        this._elemento.innerHTML = this._template();
    }
}