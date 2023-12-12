package com.santander;

public class BranchTest {

	public static void main(String[] args) {
		Branch sucPolanco = new Branch("Polanco 999");
		
		sucPolanco.addATM(new ATM(true));
		sucPolanco.addATM(new ATM(true));
		sucPolanco.addATM(new ATM(true));
		sucPolanco.addATM(new ATM(15_000));
		
		System.out.println(sucPolanco.details());
		
		// Agregar nueva sucursal con 3 cajeros
		Branch sucReforma = new Branch("Reforma 222");
		
		sucReforma.addATM(new ATM(true));
		sucReforma.addATM(new ATM(true));
		sucReforma.addATM(new ATM(true));
		
		System.out.println(sucReforma.details());
	}

}
