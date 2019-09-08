using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Services.Communication;

namespace wgdone.webapi.Domain.Services
{
  public interface IChoreService
  {
    Task<IEnumerable<Chore>> ListAsync();
    Task<ChoreResponse> SaveAsync(Chore chore);
    Task<ChoreResponse> UpdateAsync(Guid id, Chore chore);
    Task<ChoreResponse> DeleteAsync(Guid id);
  }
}
