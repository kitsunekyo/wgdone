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

    public async Task<RoomResponse> DeleteAsync(Guid id)
    {
      var existingRoom = await _roomRepository.FindByIdAsync(id);

      if (existingRoom == null)
        return new RoomResponse("Room not found");

      try
      {
        _roomRepository.Remove(existingRoom);
        await _unitOfWork.CompleteAsync();

        return new RoomResponse(existingRoom);
      }
      catch (Exception e)
      {
        return new RoomResponse($"An error occurred when deleting the room: {e.Message}");
      }
    }

    public async Task<IEnumerable<Room>> ListAsync()
    {
      return await _roomRepository.ListAsync();
    }

    public async Task<RoomResponse> SaveAsync(Room room)
    {
      try
      {
        await _roomRepository.AddAsync(room);
        await _unitOfWork.CompleteAsync();

        return new RoomResponse(room);
      }
      catch (Exception e)
      {
        return new RoomResponse($"An error occurred when saving the category: {e.Message}");
      }
    }

    public async Task<RoomResponse> UpdateAsync(Guid id, Room room)
    {
      var existingRoom = await _roomRepository.FindByIdAsync(id);

      if (existingRoom == null)
        return new RoomResponse("Room not found");

      existingRoom.Name = room.Name;

      try
      {
        _roomRepository.Update(existingRoom);
        await _unitOfWork.CompleteAsync();

        return new RoomResponse(existingRoom);
      }
      catch (Exception e)
      {
        return new RoomResponse($"An error occurred when updating the room: {e.Message}");
      }
    }
  }
}
