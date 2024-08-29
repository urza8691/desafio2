import java.util.Scanner;

public class CalculadoraRanked {

    public static String calcularNivel(int vitorias) {
        if (vitorias < 10) {
            return "Ferro";
        } else if (vitorias <= 20) {
            return "Bronze";
        } else if (vitorias <= 50) {
            return "Prata";
        } else if (vitorias <= 80) {
            return "Ouro";
        } else if (vitorias <= 90) {
            return "Diamante";
        } else if (vitorias <= 100) {
            return "Lendário";
        } else {
            return "Imortal";
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o número de vitórias: ");
        int vitorias = scanner.nextInt();

        System.out.print("Digite o número de derrotas: ");
        int derrotas = scanner.nextInt();

        int saldoVitorias = vitorias - derrotas;
        String nivel = calcularNivel(vitorias);

        System.out.println("O Herói tem um saldo de " + saldoVitorias + " e está no nível " + nivel + ".");
    }
}
