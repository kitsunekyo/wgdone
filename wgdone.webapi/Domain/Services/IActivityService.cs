using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Services.Communication;

namespace wgdone.webapi.Domain.Services
{
  public interface IActivityService
  {
    Task<IEnumerable<Activity>> ListAsync();
    Task<ActivityResponse> SaveAsync(Activity activity);
  }
}
