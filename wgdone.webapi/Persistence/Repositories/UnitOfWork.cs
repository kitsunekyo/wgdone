using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using wgdone.webapi.Domain.Repositories;
using wgdone.webapi.Persistence.Contexts;

namespace wgdone.webapi.Persistence.Repositories
{
  public class UnitOfWork : IUnitOfWork
  {
    private readonly AppDbContext _context;

    public UnitOfWork(AppDbContext context)
    {
      _context = context;
    }

    public async Task CompleteAsync()
    {
      await _context.SaveChangesAsync();
    }
  }
}
