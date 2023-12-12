package animales.zoologico;

public class Zoologico {
	public static void main(String[] args) {
		Felino cat = new Felino(3, "persian", "white");
		Felino tiger = new Felino(8, "siberian", "white");
		
		cat.ronrronear();
		tiger.dormir();
		
		Felino.imprimirCantidadFelinos();
		
		Felino lion = new Felino();
		
		Felino.imprimirCantidadFelinos();
	}
}
