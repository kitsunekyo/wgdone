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
  public class RoomController : ControllerBase
  {
    private readonly WGContext _context;

    public RoomController(WGContext context)
    {
      _context = context;

      if (_context.Rooms.Count() == 0)
      {
        // Create a new Room if collection is empty,
        // which means you can't delete all Rooms.
        _context.Rooms.Add(new Room { Name = "Room" });
        _context.SaveChanges();
      }
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Room>>> GetRooms()
    {
      return await _context.Rooms.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Room>> GetRoom(Guid id)
    {
      var room = await _context.Rooms.FindAsync(id);

      if (room == null)
      {
        return NotFound();
      }
      return room;
    }

    [HttpPost("{id}/chore")]
    public async Task<ActionResult<Chore>> AddChore(Guid id, Chore chore)
    {
      var room = await _context.Rooms.Include(b => b.Chores).FirstAsync();
      room.Chores.Add(chore);
      await _context.SaveChangesAsync();
      return chore;
    }

    [HttpGet("{id}/chore")]
    public async Task<ActionResult<IList<Chore>>> GetTasks(Guid id)
    {
      var room = await _context.Rooms.Include(b => b.Chores).SingleAsync(b => b.Id == id);

      if (room == null)
      {
        return NotFound();
      }

      var chores = room.Chores.ToList();

      return chores;
    }

    [HttpPost]
    public async Task<ActionResult<Room>> PostRoom(Room room)
    {
      _context.Rooms.Add(room);
      await _context.SaveChangesAsync();

      return CreatedAtAction(nameof(GetRoom), new { id = room.Id }, room);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutRoom(Guid id, Room room)
    {
      if (id != room.Id)
      {
        return BadRequest();
      }

      _context.Entry(room).State = EntityState.Modified;
      await _context.SaveChangesAsync();

      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRoom(long id)
    {
      var room = await _context.Rooms.FindAsync(id);

      if (room == null)
      {
        return NotFound();
      }

      _context.Rooms.Remove(room);
      await _context.SaveChangesAsync();

      return NoContent();
    }

  }
}
