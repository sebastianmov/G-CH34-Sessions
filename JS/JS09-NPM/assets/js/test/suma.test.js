// importamos la funcion suma
const {suma} = require('../suma');

/* test('Prueba de suma', () => {}); */

test('Prueba de suma', () => {
    expect(suma(5,3)).toBe(8);
    expect(suma(0,0)).toBe(0);
    expect(suma(5_000,2_000)).toBe(7_000);
});

// Prueba de numeros negativos

test('Prueba de numeros negativos', () => {
    expect(suma(-5,-3)).toBe(-8);
    expect(suma(-10,3)).toBe(-7);
    expect(suma(5_000,-2_000)).toBe(3_000);
});

// Prueba de numeros decimales

test('Prueba de numeros decimales', () => {
    expect(suma(5.5,3.5)).toBe(9);
    expect(suma(0.3,0.4)).toBe(0.7);
    expect(suma(0.1,0.2)).toBe(0.3); // imprecision de decimales por la limitacion de memoria no puede representar todos los numeros con lenguaje binario
    expect(suma(0.1,0.4)).toBe(0.5);
    expect(suma(0.1,0.5)).toBe(0.6);
    expect(suma(0.1,0.6)).toBe(0.7);
    expect(suma(0.1,0.7)).toBe(0.8);
    expect(suma(0.1,0.8)).toBe(0.9);
    expect(suma(0.1,0.9)).toBe(1.0);
});