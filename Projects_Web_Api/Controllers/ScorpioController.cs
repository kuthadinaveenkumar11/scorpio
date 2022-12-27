using Projects_Web_Api.Repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Projects_Web_Api.Controllers
{
    public class ScorpioController : ApiController
    {
        public readonly InterfaceOfDis Local;
        public ScorpioController(InterfaceOfDis localvar)
        {
            this.Local = localvar;
        }
        [Route("api/Scorpio/GetOfDisProfile/{PAN}")]
        [HttpGet]
        public IHttpActionResult Get_Of_Drisributer_Profile(String PAN)
        {
            var em = Local.Get_Of_Drisributer_Profile(PAN);
            return Ok(em);
        }
    }
}
