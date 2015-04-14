using Microsoft.AspNet.Mvc;

public class AppController<T> : Controller where T : IDocument
{
  Service<T> service;

  public AppController()
  {
    this.service = new Service<T>();
  }

  public int Post([FromBody] T document)
  {
    return this.service.Post(document);
  }

  public ActionResult Get()
  {
    return Json(this.service.Get());
  }

  public ActionResult Get(int id)
  {
    return Json(this.service.Get(id));
  }

  public void Put([FromBody] T document)
  {
    this.service.Put(document);
  }

  public void Delete(int id)
  {
    this.service.Delete(id);
  }

}