using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Domain.Repositories
{
  public interface IActivityRepository
  {
    Task<IEnumerable<Activity>> ListAsync();
    Task AddAsync(Activity activity);
  }
}
