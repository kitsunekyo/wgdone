using System.Collections.Generic;
using System.Threading.Tasks;

using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Services.Communication;

namespace wgdone.webapi.Domain.Services
{
  public interface IRoomService
  {
    Task<IEnumerable<Room>> ListAsync();
    Task<SaveRoomResponse> SaveAsync(Room room);
  }
}
