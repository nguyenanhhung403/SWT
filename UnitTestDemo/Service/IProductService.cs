using UnitTestDemo.Model;

namespace UnitTestDemo.Service {
    public interface IProductService {
        IEnumerable<Product> GetAll();
        Product GetById(int id);
        void Add(Product product);
        void Update(Product product);
        void Delete(int id);
    }
}
