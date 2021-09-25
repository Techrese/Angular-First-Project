using Angular_FirstProject.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        public async Task<ActionResult<List<Recipe>>> GetRecipes()
        {
            return _context.Recipes.ToList();
        }

        [HttpPost]
        public async Task<ActionResult> AddRecipe(List<Recipe> recipes)
        {
            foreach (var recipe in recipes)
            {
                recipe.Id = Guid.NewGuid();
                _context.Recipes.Add(recipe);
            }
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> EditRecipe(List<Recipe> recipe)
        {
            _context.Entry(recipe).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return Ok();
        }
    }
}
