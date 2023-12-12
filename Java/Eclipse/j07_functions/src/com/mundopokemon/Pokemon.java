package com.mundopokemon;

public class Pokemon {
	// atributos de instancia (de objeto)
	String nombre;
	String tipo;
	String puntosPoder;
	
	// atributos estaticos (de clase)
	static String nombreGenerico = "Pokemon";
	static String fabricante = "CH34";
	
	// metodos de instancia
    void dormir() {
        System.out.println(nombre + " esta duermiendo... zzz");
    }
    
    // Sobrecarda de Metodos (Method Overloading)
    /*
     * Es la capacidad de definir multiples metodos con el
     * mismo nombre en una clase. Esto permite usar el mismo
     * nombre para operaciones similares pero con diferentes
     * tipos de datos o parametros.
     * 
     * Reglas:
     * - El nombre del metodo debe ser el mismo
     * - La lista de parametros o numeros deben ser diferentes
     * - El retorno puede ser diferente
     */
    void comer() {
    	System.out.println(nombre + " esta comiendo... ñam ñam");
    }
    
    /**
     * Alimento y gramaje que comera el pokemon
     * @param alimento para el pokemon
     * @param gramaje del alimento
     * @return
     */
    void comer(String alimento) {
    	System.out.println(nombre + " come " + alimento);
    }
    
    String comer(String alimento, int gramaje) {
    	return nombre + " come " + gramaje + " gr. de " + alimento;
    }
    
    String pelear(Pokemon pokemon) {
    	// TODO confrontar a los pokemons y enviar el mensaje del pokemon
    	// ganador, el ganador es el que tenga mayor puntos de poder
    	
    	return null;
    }
    
    //metodos de clase
    static String nombreGenerico() {
        return nombreGenerico;
    }
    static void gritaPokemon() {
        System.out.println("Gritandooooo " + nombreGenerico);
    }
    static String nombreFabricante() {
    	return "El nombre del fabricante es " + fabricante;
    }
    
}
