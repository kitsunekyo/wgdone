using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using wgdone.webapi.Models;
using wgdone.webapi.Domain.Models;
using System;

namespace wgdone.webapi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ChoreController : ControllerBase
  {
    private readonly WGContext _context;

    public ChoreController(WGContext context)
    {
      _context = context;

      if (_context.Chores.Count() == 0)
      {
        // Create a new Chore if collection is empty,
        // which means you can't delete all Chores.
        _context.Chores.Add(new Chore { Name = "Chore" });
        _context.SaveChanges();
      }
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Chore>>> GetChores()
    {
      return await _context.Chores.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Chore>> GetChore(Guid id)
    {
      var chore = await _context.Chores.FindAsync(id);

      if (chore == null)
      {
        return NotFound();
      }
      return chore;
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutChore(Guid id, Chore chore)
    {
      if (id != chore.Id)
      {
        return BadRequest();
      }

      _context.Entry(chore).State = EntityState.Modified;
      await _context.SaveChangesAsync();

      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteChore(Guid id)
    {
      var chore = await _context.Chores.FindAsync(id);

      if (chore == null)
      {
        return NotFound();
      }

      _context.Chores.Remove(chore);
      await _context.SaveChangesAsync();

      return NoContent();
    }
  }
}
