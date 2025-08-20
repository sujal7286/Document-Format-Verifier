
document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let res = await fetch('/upload', { method: 'POST', body: formData });
    let data = await res.json();
    document.getElementById('raw').textContent = JSON.stringify(data, null, 2);

    let metaTable = document.getElementById('metadata');
    metaTable.innerHTML = '';
    for (let key in data.metadata) {
        let row = metaTable.insertRow();
        row.insertCell().textContent = key;
        row.insertCell().textContent = data.metadata[key] || 'Not found';
    }

    let fmtTable = document.getElementById('formatting');
    fmtTable.innerHTML = '';
    for (let key in data.formatting) {
        let row = fmtTable.insertRow();
        row.insertCell().textContent = key;
        row.insertCell().textContent = data.formatting[key];
    }
});
