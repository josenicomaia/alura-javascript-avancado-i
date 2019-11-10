const R = {
    form: document.querySelector('.form'),
    tbody: document.querySelector('table tbody'),
    incluir: document.querySelector('.form button[type="submit"]'),
    data: document.querySelector('#data'),
    quantidade: document.querySelector('#quantidade'),
    valor: document.querySelector('#valor'),
};

const campos = [
    R.data,
    R.quantidade,
    R.valor
];

const limparCampos = () => {
    R.data.value = '';
    R.quantidade.value = 1;
    R.quantidade.value = 0;
};

R.form.addEventListener('submit', evt => {
    evt.preventDefault();
    const tr = document.createElement('tr');

    campos.forEach(campo => {
        const td = document.createElement('td');
        td.textContent = campo.value;
        tr.append(td);
    });

    const tdVolume = document.createElement('td');
    tdVolume.textContent = R.quantidade.value * R.valor.value;
    tr.append(tdVolume);
    R.tbody.append(tr);
    limparCampos();
    R.data.focus();
});