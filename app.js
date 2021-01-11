window.onload = () => {
    const calc = document.querySelector(".calc");
    const iValue = document.querySelector("#see");
    const btIgual = document.querySelector("#igual");
    const btBorrar = document.querySelector("#borrar");
    const bts = document.querySelectorAll('input[name="btn"]');

    bts.forEach( (bt) => {
        bt.addEventListener('click', (e) => {
            const newValue = e.target.value;
            iValue.value += newValue;       //total value written
        })  
    })
    const error = () => {
        const div = document.createElement('div');
        div.id = 'error';
        calc.prepend(div);
        div.innerHTML = '<p>Error, introduce una operación</p>';
    }
    //delele error and reset value
    const del = () =>{ 
        iValue.value = ''; 
        const errNested = document.querySelector("#error"); 
        errNested.style.display = 'none';
    }
    btIgual.onclick = () => { 
        iValue.value === ""? error() : iValue.value = eval(iValue.value);
    }
    btBorrar.onclick = del;
}