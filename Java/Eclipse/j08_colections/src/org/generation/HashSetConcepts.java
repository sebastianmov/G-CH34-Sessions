package org.generation;

import java.util.HashSet;

public class HashSetConcepts {

	public static void main(String[] args) {
		/**
		 * Una colección de tipo SET es una colección NO ORDENADA.
		 * No se permite elementos duplicados
		 * Cualquier elemento duplicado no se insertará en la colección.
		 * 
		 * Sintaxis:
		 *  HashSet<Object> varName;
		 */

		// Definimos una colección HashSet
		HashSet<String> paises = new HashSet<>();
		
		// Agregar valores con add()
		paises.add("Genovia");
		paises.add("Spain");
		paises.add("England");
		paises.add("Mexico");
		paises.add("France");
		
		System.out.println(paises);
		
		// Agregar valores duplicados
		paises.add("Genovia");
		paises.add("Mexico");
		
		System.out.println(paises); // No se pueden agregar valores duplicados
		
		// Desplegar el tamanio de la coleccion usando size()
		System.out.println("Numero de paises: " + paises.size());
		
		// Verificar si existe el pais "Wakanda", "Mexico"
		System.out.println("Esta Wakanda? " + paises.contains("Wakanda"));
		System.out.println("Esta Mexico? " + paises.contains("Mexico"));
		
		// Remover un elemento con remove()
		// Se indica el elemento a remover con el objeto
		System.out.println("Eliminados: " + paises.remove("Mexico"));
		System.out.println(paises);
		
		// Iteramos la coleccion con for each
		for (String pais : paises) {
			System.out.println(pais);
		}
		
		// Iteramos la coleccion con for each y lambda expressions
		paises.forEach(pais -> System.out.println(pais));
		
		
		
	}

}
