package org.generation;

import java.util.Scanner;

public class CicloWhile {
	public static void main(String[] args) {
		/*
		 * Ciclo While
		 * Mientras la condición sea verdadera, se realiza un nuevo ciclo.
		 * 
		 * Sintaxis:
		 *     
		 *     while( condicion ) instruccion;
		 *     
		 *     while( condicion ) {
		 *        instrucciones;
		 *     }
		 * 
		 * Ciclo Do While()
		 * 
		 * Sintaxis:
		 *     do{
		 *      instrucciones;
		 *     }while(condicion); 
		 */
		
		/*
		 * Preguntar al usario usando la consola si desea continuar iterando
		 * Si la persona escriba "s" continuamos con nueva iteracion
		 * Caso contrario, finalizamos
		 */
		Scanner scanner = new Scanner(System.in);
		char palabra = 's';
		while(palabra == 's' || palabra == 'S') {
			System.out.println("Desea continuar? (s/n): ");
			palabra = scanner.next().charAt(0);
		}
		
		do {
            // Tu código de iteración aquí

            System.out.println("¿Desea continuar? (s/n): ");
            palabra = scanner.next().charAt(0);

        } while (palabra == 's' || palabra == 'S');
		
		boolean isActive = true;
		char response;
		
		while(isActive) {
			System.out.println("Bienvenido");
			System.out.println("Quieres continuar? (s/n): ");
			response = scanner.nextLine().toLowerCase().charAt(0);
			if(response != 's') isActive = false;
		}
		System.out.println("Hasta pronto, termina while");
		
		
		scanner.close();
	}
}
