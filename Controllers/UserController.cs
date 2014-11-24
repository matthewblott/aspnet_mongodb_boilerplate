using Microsoft.AspNet.Mvc;

public class UserController : Controller
{
  Service<User> service;

  public UserController()
  {
    this.service = new Service<User>();
  }

  public int Post([FromBody] User user)
  {
    return this.service.Post(user);
  }

  public ActionResult Get()
  {
    return Json(this.service.Get());
  }

  public ActionResult Get(int id)
  {
    return Json(this.service.Get(id));
  }

  public void Put([FromBody] User user)
  {
    this.service.Put(user);
  }

  public void Delete(int id)
  {
    this.service.Delete(id);
  }

}