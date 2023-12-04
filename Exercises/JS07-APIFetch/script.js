  // Funcion para buscar informacion de usuario desde la API
  const fetchData = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?delay=3');
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Funcion que actualiza el DOM con la informacion de usuario
  const updateDOM = (userData) => {
    const userDataBody = document.getElementById('userDataBody');
    userDataBody.innerHTML = '';

    userData.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td><img src="${user.avatar}" alt="Avatar" class="avatar"></td>
        <td>${user.first_name} ${user.last_name}</td>
        <td>${user.email}</td>
      `;
      userDataBody.appendChild(row);
    });
  };

  // Funcion para revisr si la informacion almacenada sigue siendo valida (dentro de un minuto)
  const isDataValid = () => {
    const storedTime = localStorage.getItem('fetchTime');
    if (!storedTime) return false;

    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - parseInt(storedTime);

    return elapsedTime < 60000; // 1 minuto en milisegundos
  };

  // Funcion para manejar el proceso
  const handleData = async () => {

    const spinnerContainer = document.getElementById('spinnerContainer');
    const searchButton = document.getElementById('searchButton');

    spinnerContainer.style.display = 'flex';
    searchButton.disabled = true;

    if (isDataValid()) {
      // Si la información sigue siendo valida mostrar desde almacenamiento local
      const storedData = JSON.parse(localStorage.getItem('userData'));
      updateDOM(storedData);
    } else {
      // Si la información no es válida, hacer una nueva petición y actualizar el almacenamiento local
      const newData = await fetchData();
      updateDOM(newData);

      localStorage.setItem('userData', JSON.stringify(newData));
      localStorage.setItem('fetchTime', new Date().getTime().toString());
    }

    spinnerContainer.style.display = 'none';
    searchButton.disabled = false;

  };

const searchUsers = () => {
    handleData();
};
