using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Repositories;
using wgdone.webapi.Persistence.Contexts;

namespace wgdone.webapi.Persistence.Repositories
{
  public class ChoreRepository : BaseRepository, IChoreRepository
  {
    public ChoreRepository(AppDbContext context) : base(context)
    {
    }

    public async Task AddAsync(Chore chore)
    {
      await _context.Chores.AddAsync(chore);
    }

    public async Task<Chore> FindByIdAsync(Guid id)
    {
      return await _context.Chores.FindAsync(id);
    }



    public async Task<IEnumerable<Chore>> ListAsync()
    {
      return await _context.Chores.ToListAsync();
    }

    public void Remove(Chore chore)
    {
      _context.Chores.Remove(chore);
    }

    public void Update(Chore chore)
    {
      _context.Chores.Update(chore);
    }
  }
}
