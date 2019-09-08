using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Repositories;
using wgdone.webapi.Persistence.Contexts;

namespace wgdone.webapi.Persistence.Repositories
{
  public class ActivityRepository : BaseRepository, IActivityRepository
  {
    public ActivityRepository(AppDbContext context) : base(context)
    {
    }

    public async Task AddAsync(Activity activity)
    {
      activity.Timestamp = DateTime.Now;
      await _context.Activities.AddAsync(activity);
    }

    public async Task<IEnumerable<Activity>> ListAsync()
    {
      return await _context.Activities.Include(p => p.Chore).Include(p => p.Room).ToListAsync();
    }
  }
}
