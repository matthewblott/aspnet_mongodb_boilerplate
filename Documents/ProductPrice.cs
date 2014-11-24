public class ProductPrice : IDocument
{
  public int _id { get; set; }
  public int productId {get ;set; }
  public int quantity { get; set; }
  public double price { get; set; }
}