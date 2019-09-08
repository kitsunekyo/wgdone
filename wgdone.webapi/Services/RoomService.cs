using System.Collections.Generic;
using System.Threading.Tasks;
using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Repositories;
using wgdone.webapi.Domain.Services;

namespace wgdone.webapi.Services
{
  public class RoomService : IRoomService
  {
    private readonly IRoomRepository _roomRepository;

    public RoomService(IRoomRepository roomRepository)
    {
      _roomRepository = roomRepository;
    }

    public async Task<IEnumerable<Room>> ListAsync()
    {
      return await _roomRepository.ListAsync();
    }
  }
}
