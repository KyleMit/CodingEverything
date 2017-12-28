using CompiledConfig.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CompiledConfig.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            AppleViewModel model = new AppleViewModel()
            {
                BodyColor = Global.Apple.BodyColor,
                LeafColor = Global.Apple.LeafColor,
                StemColor = Global.Apple.StemColor,
            };

            return View(model);
        }
    }
}