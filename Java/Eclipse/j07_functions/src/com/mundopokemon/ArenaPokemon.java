package com.mundopokemon;

public class ArenaPokemon {

	public static void main(String[] args) {
		Pokemon.gritaPokemon();
		
		// Instanciando la clase Pokemon
		Pokemon pikachu = new Pokemon();
		pikachu.nombre = "Pikachu";
		pikachu.tipo= "Electrico";

		Pokemon charmander = new Pokemon();
		charmander.nombre = "Charmander";
		charmander.tipo= "Fuego";
		
		Pokemon squirtle = new Pokemon();
		squirtle.nombre = "Squirtle";
		squirtle.tipo= "Agua";
		
		// Hacer comer a los pokemons
		// pikachu.comer("bayas"); // imprime dentro del metodo
		System.out.println(pikachu.comer("bayas", 100));
		
		// Poner a dormir a los pokemons
		charmander.dormir();
		
		// Mostrar el nombre del fabricante
		System.out.println(Pokemon.nombreFabricante());
		// System.out.println(charmander.nombreFabricante()); // se puede pero no es una buena practica porque hacemos uso de un objeto no de la clase
	}
	
}
