using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Services.Communication;

namespace wgdone.webapi.Domain.Services
{
  public interface IRoomService
  {
    Task<IEnumerable<Room>> ListAsync();
    Task<RoomResponse> SaveAsync(Room room);
    Task<RoomResponse> UpdateAsync(Guid id, Room room);
    Task<RoomResponse> DeleteAsync(Guid id);
  }
}
