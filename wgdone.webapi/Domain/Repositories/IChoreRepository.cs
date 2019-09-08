using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Domain.Repositories
{
  public interface IChoreRepository
  {
    Task<IEnumerable<Chore>> ListAsync(Guid roomId);
    Task AddAsync(Chore chore);
    Task<Chore> FindByIdAsync(Guid id);
    void Update(Chore chore);
    void Remove(Chore chore);
  }
}
