class NegociacoesView extends View {
    constructor(elemento) {
        super(elemento);
    }

    template(negociacaoRepository) {
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
                    ${negociacaoRepository.negociacoes.map(negociacao => {
                        return `
                            <tr>
                                <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
                
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>${negociacaoRepository.negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0.0)}</td>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}