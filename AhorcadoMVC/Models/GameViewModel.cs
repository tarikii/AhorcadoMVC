namespace AhorcadoMVC.Models
{
    public class GameViewModel
    {
        public string Title { get; set; } = "Hangman Game";
        public string RandomWord { get; set; }
        public int Attempts { get; set; }
        public List<string> Words { get; set; } = new List<string> 
        { "Manzana", "Programacion", "Picaporte", "Helado", "Musica" };
        public List<char> WordLetters { get; set; }
        public List<string> Alphabet { get; set; } = new List<string>
    {
        "A", "B", "C", "D", "E", "F", "G", "H", "I",
        "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"
    };

    }
}
