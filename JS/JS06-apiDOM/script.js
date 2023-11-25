console.log('JS06 apiDOM');
/* 
    Modificar un elemento HTML por su ID
*/
const findElementById = () => {
    // Obtener el objeto (section) del DOM
    const titleRef = document.getElementById('title');
    console.log(titleRef.innerHTML); // <h1>JS06</h1>
                                     // <h2>API DOM</h2>
    
    // Modificando el contenido
    titleRef.innerHTML = `
    <div class="text-center">
        <h1 class="text-danger">Clicka CH34</h1>
        <h2 class="text-warning">En el barrio no hay reglas</h2>
    </div>
    `;
}

findElementById();

/* 
    Encontrar y modificar elementos por su tag
*/
const changeElementByTagName = () => {
    // Obtener una coleccion de elementos 'section'
    const sectionsRef = document.getElementsByTagName('section');
    console.log(sectionsRef); // 3 objetos section

    // agregar estilo personalizado
    const color = 'purple';
    for (let section of sectionsRef){
        section.style.border = `2px solid ${color}`;
    }

}
changeElementByTagName();

/* 
    Modificar elemento utilizando el selector universal
*/

const changeElementByQuerySelector = () => {

    // Nos trae la referencia del primer elemento que cumpla con la condicion en el selector universal
    // const element = document.querySelector('#description'); // Selector por id
    // const element = document.querySelector('.list'); // Selector por clase
    // const element = document.querySelector('p'); // Selector por tag
    const element = document.querySelector('#clickas p'); // Selector por 
    console.log(element);

}
changeElementByQuerySelector();


