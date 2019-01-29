using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SquareRootApp.Controllers
{
    [Route("api")] // Behövs om man har många metoder, tex api/squareroot orkar an inte skeiva på alla
    public class SquareRootController : Controller
    {
        [HttpGet("SquareRoot")]
        public IActionResult SquareRoot(int? number)
        {
          
                return Ok(Math.Sqrt((int)number));

                //double x = (int)number;
                //var root = Math.Sqrt(x);

                //return Ok(root);
            

        }
      
    }
}
