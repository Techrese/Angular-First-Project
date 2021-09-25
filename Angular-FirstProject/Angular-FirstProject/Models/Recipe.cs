using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Angular_FirstProject.Models
{
    public class Recipe
    {
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string ImagePath { get; set; }

        public List<Ingredient> Ingredients { get; set; }
    }
}
