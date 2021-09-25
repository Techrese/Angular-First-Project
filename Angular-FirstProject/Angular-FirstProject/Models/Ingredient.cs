using System;
using System.ComponentModel.DataAnnotations;

namespace Angular_FirstProject.Models
{
    public class Ingredient
    {
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Amount { get; set; }
    }
}
