using Microsoft.Extensions.DependencyInjection;
using Subaru.Starlink.Models;
using Subaru.Starlink.Services;

namespace Subaru.Starlink
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        public IConfiguration Configuration { get; set; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<MapService>();
            services.Configure<MapConfiguration>(Configuration.GetSection(nameof(MapConfiguration)));
            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            app.UseCors(builder =>
            {
                builder
                    .AllowAnyHeader()
                    .AllowAnyOrigin()
                    .AllowAnyMethod();
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();

                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Subaru Starlink Backend is running.");
                });
            });
        }
    }
}
