package org.generation;

import java.util.Scanner;

public class ConditionalSwitch {
	public static void main(String[]args) {
		/*
		 * Sintaxis:
		 * 
		 *  switch( expresión ){ 
		 *    case valor1 : expresión; 
		 *                  break; 
		 *    case valor2 : expresión;
		 *                  break; 
		 *    default: expresión; 
		 *             break; 
		 *   }
		 * 
		 * La expresión a evaluar debe ser un tipo entero, string o enum. La condicional
		 * Switch usa el método equals para comparar los Strings.
		 */
		
		/*
		 * Leer usando la clase Scanner un mes (1 - 12) e indicar el mes en texto.
		 * ej:entrada-> "Escribe tu mes de nacimiento: " 12 
		 * salida-> Naciste en diciembre.
		 */
		
		System.out.println("Introduce tu numero de mes: ");
        Scanner myScan = new Scanner(System.in);
        if (myScan.hasNextInt()) { // Verifica si existe un valor numerico
            int numeroMes = myScan.nextInt();
            String nombreMes;
            switch (numeroMes) {
            case 1: 
                nombreMes = "ENERO";
                break;
            case 2:
                nombreMes = "FEBRERO";
                break;
            case 3:
                nombreMes = "MARZO";
                break;
            case 4:
                nombreMes = "ABRIL";
                break;
            case 5:
                nombreMes = "MAYO";
                break;
            case 6:
                nombreMes = "JUNIO";
                break;
            case 7:
                nombreMes = "JULIO";
                break;
            case 8:
                nombreMes = "AGOSTO";
                break;
            case 9:
                nombreMes = "SEPTIEMBRE";
                break;
            case 10:
                nombreMes = "OCTUBRE";
                break;
            case 11:
                nombreMes = "NOVIEMBRE";
                break;
            case 12:
                nombreMes = "DICIEMBRE";
                break;
            default:
                nombreMes = "NO EXISTE ESE MES";
                break;
            }
            System.out.println("Tu mes de nacimiento es: " + nombreMes);
            myScan.nextLine(); // limpiar la terminal
            
            // Verificar la estacion del mes.
            // ej: La estacion es invierno.
            // 12, 1, 2: invierno
            // 3, 4, 5: primavera
            // 6, 7, 8: verano
            // 9, 10, 11: otoño
            String nombreEstacion;
            switch (numeroMes) {
            case 1, 2, 12: 
                nombreEstacion = "INVIERNO";
                break;
            case 3, 4, 5:
                nombreEstacion = "PRIMAVERA";
                break;
            case 6, 7, 8:
                nombreEstacion = "VERANO";
                break;
            case 9, 10, 11:
                nombreEstacion = "OTONIO";
                break;
            default:
                nombreEstacion = "NO HAY MAS ESTACIONES";
                break;
            }
            System.out.println("La estacion es: " + nombreEstacion);
            myScan.nextLine(); // limpiar la terminal
            
        } else {
            System.out.println("No introdujiste un numero entero ");
            myScan.nextLine(); // limpiar la terminal
        }
        myScan.close();
		
	}
	
}