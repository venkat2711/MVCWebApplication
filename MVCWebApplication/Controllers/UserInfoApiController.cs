using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EntityLayer;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MVCWebApplication.Controllers
{
    [Route("api/[controller]")]
    public class UserInfoApiController : Controller
    {
        [Route("GetUserDetails")]
        [HttpGet]
        public List<UserDetails> GetUserDetails()
        {
            List<UserDetails> lstuserDetails = new List<UserDetails>();
            UserDetails objuserDetails = new UserDetails();
            objuserDetails.UserId = 1;
            objuserDetails.UserName = "Venkatgiri";
            objuserDetails.EmailId = "venkatgiri.sridharan1@wipro.com";
            objuserDetails.MobileNumber = "9884443626";
            lstuserDetails.Add(objuserDetails);
            objuserDetails = new UserDetails();
            objuserDetails.UserId = 2;
            objuserDetails.UserName = "Bagyaraj";
            objuserDetails.EmailId = "bagyaraj.s09@wipro.com";
            objuserDetails.MobileNumber = "9962533456";
            lstuserDetails.Add(objuserDetails);
            objuserDetails = new UserDetails();
            objuserDetails.UserId = 3;
            objuserDetails.UserName = "Shivam Srivastava";
            objuserDetails.EmailId = "shivam.srivastava4@wipro.com";
            objuserDetails.MobileNumber = "8510888769";
            lstuserDetails.Add(objuserDetails);
            return lstuserDetails;

        }
    }
}
