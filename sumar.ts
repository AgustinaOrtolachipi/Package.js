import fs from 'fs';

// Leer el archivo de datos
fs.readFile('datos.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Convertir los datos en un arreglo de números
  const numeros = data.split('\n').map(Number);

  // Sumar los elementos del arreglo
  const suma = numeros.reduce((total, numero) => total + numero, 0);

  console.log('Resultado de la suma:', suma);
});
