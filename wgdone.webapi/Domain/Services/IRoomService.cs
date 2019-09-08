using System.Collections.Generic;
using System.Threading.Tasks;

using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Domain.Services
{
  public interface IRoomService
  {
    Task<IEnumerable<Room>> ListAsync();
  }
}
