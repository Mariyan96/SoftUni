namespace IMDB.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Film
    {
        [Key]
        public int Id { set; get; }
        [Required]
        public string  Name { set; get; }
        [Required]
        public string Director { set; get; }
        [Required]
        public int Year { set; get; }
        [Required]
        public string Genre { set; get; }
    }
}
