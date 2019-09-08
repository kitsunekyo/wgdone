using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Repositories;
using wgdone.webapi.Domain.Services;
using wgdone.webapi.Domain.Services.Communication;

namespace wgdone.webapi.Services
{
  public class ActivityService : IActivityService
  {
    private readonly IActivityRepository _activityRepository;
    private readonly IUnitOfWork _unitOfWork;

    public ActivityService(IActivityRepository activityRepository, IUnitOfWork unitOfWork)
    {
      _activityRepository = activityRepository;
      _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<Activity>> ListAsync()
    {
      return await _activityRepository.ListAsync();
    }

    public async Task<ActivityResponse> SaveAsync(Activity activity)
    {
      try
      {
        await _activityRepository.AddAsync(activity);
        await _unitOfWork.CompleteAsync();

        return new ActivityResponse(activity);
      }
      catch (Exception e)
      {
        return new ActivityResponse($"An error occurred when saving the category: {e.Message}");
      }
    }
  }
}
