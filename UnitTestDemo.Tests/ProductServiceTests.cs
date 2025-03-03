using Xunit;
using Moq;
using System.Collections.Generic;
using System.Linq;
using UnitTestDemo.Service;
using UnitTestDemo.Repositories;
using UnitTestDemo.Model; // Sửa lại namespace Model nếu khác
// Namespace TestProject
namespace UnitTestDemo.Tests {
    public class ProductServiceTests {
        private readonly ProductService _service;
        private readonly Mock<IProductRepository> _mockRepo;

        public ProductServiceTests() {
            // Tạo Mock cho Repository
            _mockRepo = new Mock<IProductRepository>();
            // Truyền mockRepo vào service
            _service = new ProductService(_mockRepo.Object);
        }

        [Fact]
        public void GetAll_ShouldReturnAllProducts() {
            // Arrange
            var products = new List<Product> {
                new Product { Id = 1, Name = "Product A", Price = 100 },
                new Product { Id = 2, Name = "Product B", Price = 200 }
            };
            _mockRepo.Setup(repo => repo.GetAll()).Returns(products);

            // Act
            var result = _service.GetAll();

            // Assert
            Assert.Equal(2, result.Count());
            Assert.Contains(result, p => p.Name == "Product A");
        }

        [Fact]
        public void GetById_ShouldReturnNull_IfProductNotFound() {
            // Arrange
            _mockRepo.Setup(repo => repo.GetById(It.IsAny<int>())).Returns((Product)null);

            // Act
            var result = _service.GetById(999);

            // Assert
            Assert.Null(result);
        }
    }
}
