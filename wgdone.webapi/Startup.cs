using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;

using wgdone.webapi.Persistence.Repositories;
using wgdone.webapi.Persistence.Contexts;
using wgdone.webapi.Domain.Repositories;
using wgdone.webapi.Domain.Services;
using wgdone.webapi.Services;
using AutoMapper;
using wgdone.webapi.Mapping;

namespace wgdone.webapi
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

      services.AddDbContext<AppDbContext>(opt => opt.UseInMemoryDatabase("wgdone-in-memory-db"));

      services.AddSwaggerGen(c =>
        {
          c.SwaggerDoc("v1", new OpenApiInfo { Title = "WGDone Api", Version = "v1" });
        });

      services.AddScoped<IRoomRepository, RoomRepository>();
      services.AddScoped<IRoomService, RoomService>();

      services.AddAutoMapper(typeof(ModelToResourceProfile));
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
          c.SwaggerEndpoint("/swagger/v1/swagger.json", "WGDone Api");
        });
        app.UseDeveloperExceptionPage();
      }
      else
      {
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }
      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseHttpsRedirection();
      app.UseMvc();
    }
  }
}
