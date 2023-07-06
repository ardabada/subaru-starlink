using Microsoft.AspNetCore.Mvc;
using Subaru.Starlink.Services;

namespace Subaru.Starlink.Controllers
{
    [ApiController]
    public class MainController : ControllerBase
    {
        private readonly MapService mapService;

        public MainController(MapService mapService)
        {
            this.mapService = mapService;
        }

        [HttpGet]
        [Route("map/{z:int}/{x:int}/{y:int}")]
        public async Task<IActionResult> Map(
            [FromRoute] int z,
            [FromRoute] int x,
            [FromRoute] int y,
            [FromQuery] string? format,
            CancellationToken cancellationToken)
        {
            var result = await mapService.GetMapTileAsync(z, x, y, cancellationToken);
            return File(result, "application/octet-stream");
        }
    }
}
