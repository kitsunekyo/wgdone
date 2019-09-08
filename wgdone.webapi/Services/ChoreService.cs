using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Repositories;
using wgdone.webapi.Domain.Services;
using wgdone.webapi.Domain.Services.Communication;

namespace wgdone.webapi.Services
{
  public class ChoreService : IChoreService
  {
    private readonly IChoreRepository _choreRepository;
    private readonly IUnitOfWork _unitOfWork;

    public ChoreService(IChoreRepository choreReponsitory, IUnitOfWork unitOfWork)
    {
      _choreRepository = choreReponsitory;
      _unitOfWork = unitOfWork;
    }

    public async Task<ChoreResponse> DeleteAsync(Guid id)
    {
      var existingChore = await _choreRepository.FindByIdAsync(id);
      if (existingChore == null)
        return new ChoreResponse("Chore not found");

      try
      {
        _choreRepository.Remove(existingChore);
        await _unitOfWork.CompleteAsync();

        return new ChoreResponse(existingChore);
      }
      catch (Exception e)
      {
        return new ChoreResponse($"An error occurred when deleting the chore: {e.Message}");
      }
    }

    public async Task<IEnumerable<Chore>> ListAsync(Guid roomId)
    {
      return await _choreRepository.ListAsync(roomId);
    }

    public async Task<ChoreResponse> SaveAsync(Chore chore)
    {
      try
      {
        await _choreRepository.AddAsync(chore);
        await _unitOfWork.CompleteAsync();

        return new ChoreResponse(chore);
      }
      catch (Exception e)
      {
        return new ChoreResponse($"An error occurred when saving the chore: {e.Message}");
      }
    }

    public async Task<ChoreResponse> UpdateAsync(Guid id, Chore chore)
    {
      var existingChore = await _choreRepository.FindByIdAsync(id);

      if (existingChore == null) return new ChoreResponse("Chore not found");

      existingChore.Name = chore.Name;

      try
      {
        _choreRepository.Update(existingChore);
        await _unitOfWork.CompleteAsync();

        return new ChoreResponse(existingChore);
      }
      catch (Exception e)
      {
        return new ChoreResponse($"An error occurred when updating the chore: {e.Message}");
      }
    }
  }
}
