export function dropdown() {
    const dd = document.getElementById('dropdown-menu');
    const btn = document.getElementById('btn');

    if(dd != null && btn != null){
        if(dd.style.display === 'block'){
            dd.style.display = 'none';
        }else{
            dd.style.display = 'block';
        }
    }
}