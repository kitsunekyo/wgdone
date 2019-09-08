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

    public async Task<IEnumerable<Room>> ListAsync()
    {
      return await _context.Rooms.ToListAsync();
    }
  }
}
