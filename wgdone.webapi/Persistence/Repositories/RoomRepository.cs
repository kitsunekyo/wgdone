using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Repositories;
using wgdone.webapi.Persistence.Contexts;

namespace wgdone.webapi.Persistence.Repositories
{
  public class RoomRepository : BaseRepository, IRoomRepository
  {
    public RoomRepository(AppDbContext context) : base(context)
    {
    }

    public async Task AddAsync(Room room)
    {
      await _context.Rooms.AddAsync(room);
    }

    public async Task<Room> FindByIdAsync(Guid id)
    {
      return await _context.Rooms.FindAsync(id);
    }

    public async Task<IEnumerable<Room>> ListAsync()
    {
      return await _context.Rooms.ToListAsync();
    }

    public void Remove(Room room)
    {
      _context.Rooms.Remove(room);
    }

    public void Update(Room room)
    {
      _context.Rooms.Update(room);
    }
  }
}
