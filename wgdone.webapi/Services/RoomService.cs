using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Repositories;
using wgdone.webapi.Domain.Services;
using wgdone.webapi.Domain.Services.Communication;

namespace wgdone.webapi.Services
{
  public class RoomService : IRoomService
  {
    private readonly IRoomRepository _roomRepository;
    private readonly IUnitOfWork _unitOfWork;

    public RoomService(IRoomRepository roomRepository, IUnitOfWork unitOfWork)
    {
      _roomRepository = roomRepository;
      _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<Room>> ListAsync()
    {
      return await _roomRepository.ListAsync();
    }

    public async Task<SaveRoomResponse> SaveAsync(Room room)
    {
      try
      {
        await _roomRepository.AddAsync(room);
        await _unitOfWork.CompleteAsync();

        return new SaveRoomResponse(room);
      } catch (Exception e)
      {
        return new SaveRoomResponse($"An error occurred when saving the category: {e.Message}");
      }
    }
  }
}
