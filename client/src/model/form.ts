export function openForm(){
    const form = document.getElementById('formBtn');

    if(form != null){
            form.style.display = 'block';
    }
}

export function closeForm(){
    const form = document.getElementById('formBtn');

    if(form != null){
            form.style.display = 'none';
    }
}