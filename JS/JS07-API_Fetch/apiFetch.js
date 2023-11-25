console.log('JS07 - apiFetch');

/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.

 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (GET, POST, PUT, DELETE).
 
 Sintaxis:
    fetch(resource, options);

La API fetch en JavaScript proporciona una interfaz para realizar solicitudes de red, como solicitudes HTTP, de manera asincrona.
Es una forma moderna y mas poderosa de realizar solicitudes HTTP en comparacion con metodos mas antiguos, como XMLHTTPRequest.
*/

const urlFakeStore = 'https://fakestoreapi.com/products';

const getProducts = (url) => {
    // Realizando solicitud GET
    // .then() consume la promesa cuando sea resuelta
    // .catch() se ejecuta en caso de que la promesa sea rechazada.
    fetch(url)
    .then((response) => {
        console.log('Status code: ' + response.status);
        return response.json()
            /* .then(products => console.log(products))
            .catch(error => console.log('Error en la conversion' + error));*/ // Para evitar usar esta linea de codigo hacemos un return para retornar un objeto tipo promesa y completar con un .then haciendo una promesa anidada.
    })
    .then(products => {
        // console.log(products);
        imprimirEnDOM(products);
    })
    .catch((error) => {
        console.log('Error en la solicitud: ');
        console.warn(error);
    });
};
 /*        return response.json(); // conversion de JSON a OBJECT
    })
    .then((products) => {
        console.log(products);
    }) */
// }
// getProducts(urlFakeStore); // comentado para evitar que se aplique, descomentar para utilizar

const getProductsUsingAsyncAwait = async (url) => {
    try{
        const response = await fetch(url);
        const products = await response.json();
        imprimirEnDOM(products);
    } catch (error){
        console.log(error);
    }
}
getProductsUsingAsyncAwait(urlFakeStore);

// Insertar los productos en DOM
function imprimirEnDOM(products){
    const productsContainer = document.getElementById('products-container');

    /* const myArrayOfTitle = [];
    products.forEach((element, index, array) => {myArrayOfTitle.push(`<p>${element.title}</p>`)});
    console.log(myArrayOfTitle);*/ // Utilizar forEach o map pero map ya te esta generando un nuevo array, en cambio con forEach necesitamos hacer un push

    const productsTitle = products.map((product, index, array) => `
    <article class="col-md-6 col-lg-3">
        <div class="card mx-auto" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-primary">${product.price}</a>
            </div>
        </div>
    </article>
    `
    );
    console.log(productsTitle);

    productsContainer.innerHTML = productsTitle.join('');
    // productsContainer.innerHTML = myArrayOfTitle.join('');
}
