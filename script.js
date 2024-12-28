document.querySelectorAll('.category').forEach(category => {
    // Drag & Drop
    category.addEventListener('dragover', event => {
        event.preventDefault();
        category.classList.add('dragover');
    });

    category.addEventListener('dragleave', () => {
        category.classList.remove('dragover');
    });

    category.addEventListener('drop', event => {
        event.preventDefault();
        category.classList.remove('dragover');
        const file = event.dataTransfer.files[0];
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
            displayImage(category, file);
        } else {
            alert('Por favor, selecciona una imagen en formato PNG o JPG.');
        }
    });

    // File Input
    category.addEventListener('click', () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
        fileInput.onchange = () => {
            const file = fileInput.files[0];
            if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
                displayImage(category, file);
            } else {
                alert('Por favor, selecciona una imagen en formato PNG o JPG.');
            }
        };
    });
});

function displayImage(category, file) {
    const reader = new FileReader();
    reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        category.innerHTML = '';
        category.appendChild(img);
    };
    reader.readAsDataURL(file);
}
