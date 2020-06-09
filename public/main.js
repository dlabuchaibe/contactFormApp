const newEntry = () => {
    const form = {
        name: document.getElementById('Nombre').value,
        email: document.getElementById('Correo').value,
        phone: document.getElementById('Telefono').value,
        country: document.getElementById('Pais').value,
        messages: document.getElementById('Mensaje').value
    }
    console.log(form)
    if(form.name !== '' && form.email !== '' && form.messages !== '') {
        const url = '/api/messages';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(res => res.json())
        .catch(err => console.error('Error:', err))
        .then(response => {
            alert('Su mensaje a sido enviado!')
            document.getElementById('Nombre').value = ''
            document.getElementById('Correo').value = ''
            document.getElementById('Telefono').value = ''
            document.getElementById('Pais').value = ''
            document.getElementById('Mensaje').value = ''
        })
    }
}