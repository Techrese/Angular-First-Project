using Angular_FirstProject.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Angular_FirstProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private ApplicationDbContext _context;

        public RecipeController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Recipe> GetRecipes()
        {
            return _context.Recipes.ToList();
        }

        [HttpPost]
        public void AddRecipe(Recipe recipe)
        {
            _context.Recipes.Add(recipe);
            _context.SaveChanges();
        }

        [HttpPut]
        public void EditRecipe(Recipe recipe)
        {
            _context.Entry(recipe).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
        }



    }
}
