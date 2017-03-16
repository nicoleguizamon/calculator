using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Calculator.Models;

namespace Calculator.Controllers
{
    public class CalculatorController : ApiController
    {
        // POST: api/Calculator
        /// <summary>
        /// This method perfomrs a calculation based on 4 numbers provided.
        /// </summary>
        /// <param name="model">this model have 4 numbers</param>
        /// <returns>returns an HttpResponseMessage with an anonymous type contaning the result.</returns>
        public HttpResponseMessage Post(CalculatorModel model)
        {
            try
            {
                var result = ((model.Value1 * model.Value2) + model.Value3) / model.Value4;
                return Request.CreateResponse(HttpStatusCode.OK, new { Status = "Success", Value = result });
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.OK, new { Status = "Error", Value = ex.Message });
            }
        }
        
    }
}
