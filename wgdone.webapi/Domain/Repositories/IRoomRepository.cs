using System.Collections.Generic;
using System.Threading.Tasks;
using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Domain.Repositories
{
  public interface IRoomRepository
  {
    Task<IEnumerable<Room>> ListAsync();
  }
}
