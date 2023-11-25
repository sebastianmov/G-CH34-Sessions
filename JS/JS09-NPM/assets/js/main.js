console.log("JS09 - NPM");

const url = "https://fakestoreapi.com/users"

const getUsersUsingFetch = async (url) => {
    // realizar la solicitud HTTP get, usando la API FETCH
    try {
        // Realizar la solicitud HTTP GET utilizando Fetch
        const response = await fetch(url);
    
        // Convertir la respuesta a formato JSON
        const users = await response.json();
    
        // Manipular los datos obtenidos de la API
        console.log(users);
      } catch (error) {
        // Capturar y manejar errores
        console.error(error);
      }
}

const getUsersUsingAxios = async (url) => {
    try {
        const users = await axios.get (url);
        console.log(users.data);
    } catch (error) {
        console.log(error);
    }
}

const postUsingAxios = async () => {
    const user = {
        name: "Aldo",
        job: "Developer CH35"
    }

    const response = await axios.post(url,user);
    console.log(response);

}


getUsersUsingFetch( url );
getUsersUsingAxios( url );

postUsingAxios();