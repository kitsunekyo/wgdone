using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;

using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Services;
using AutoMapper;
using wgdone.webapi.Resources;
using wgdone.webapi.Extensions;

namespace wgdone.webapi.Controllers
{
  [Route("/api/[controller]")]
  public class ActivitiesController : Controller
  {
    private readonly IActivityService _activityService;
    private readonly IMapper _mapper;

    public ActivitiesController(IActivityService activityService, IMapper mapper)
    {
      _activityService = activityService;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<IEnumerable<ActivityResource>> GetAllAsync()
    {
      var activities = await _activityService.ListAsync();
      var resources = _mapper.Map<IEnumerable<Activity>, IEnumerable<ActivityResource>>(activities);

      return resources;
    }

    [HttpPost]
    public async Task<IActionResult> PostAsync([FromBody] SaveActivityResource resource)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState.GetErrorMessages());

      var activity = _mapper.Map<SaveActivityResource, Activity>(resource);
      var result = await _activityService.SaveAsync(activity);

      if (!result.Success)
        return BadRequest(result.Message);

      return Ok(activity);
    }
  }
}
