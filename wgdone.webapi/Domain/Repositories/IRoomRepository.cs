using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Domain.Repositories
{
  public interface IRoomRepository
  {
    Task<IEnumerable<Room>> ListAsync();
    Task AddAsync(Room room);
    Task<Room> FindByIdAsync(Guid id);
    void Update(Room room);
    void Remove(Room room);
  }
}
