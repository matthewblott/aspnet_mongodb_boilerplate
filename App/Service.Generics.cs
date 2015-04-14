using System;
using System.Linq;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;

public partial class Service<T> where T : IDocument
{
  MongoDatabase db;
  MongoCollection<T> collection;

  public Service()
  {
    var host = "localhost";
    var port = 27017;
    var dbname = "store";
    var client = new MongoClient(string.Format("mongodb://{0}:{1}", host, port));
    var collectionName = typeof(T).Name + 's';

    this.db = client.GetServer().GetDatabase(dbname);
    this.collection = this.db.GetCollection<T>(collectionName.ToLower());

  }

  public IList<T> Get()
  {
    return this.collection.AsQueryable<T>().ToList<T>();
  }

  public T Get(int id)
  {
    return (
      from x in this.collection.AsQueryable<T>()
      where x._id == id
      select x).First();
  }

  public int Post(T document)
  {
    document._id = this.GetId();
    this.collection.Insert(document);
    return document._id;
  }

  public void Put(T document)
  {
    this.collection.Save(document);
  }

  public void Delete(int id)
  {
    var query = Query<T>.EQ(x => x._id, id);
    this.collection.Remove(query);
  }

  public int GetId()
  {
    return Convert.ToInt32(this.db.Eval(new EvalArgs { Code = "getId()" }));
  }

}