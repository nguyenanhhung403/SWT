using Xunit;
using Moq;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using UnitTestDemo.Controllers;
using UnitTestDemo.Service;
using UnitTestDemo.Model;

namespace UnitTestDemo.Tests {
    public class ProductControllerTests {
        private readonly ProductController _controller;
        private readonly Mock<IProductService> _mockService;

        public ProductControllerTests() {
            // Tạo mock cho IProductService
            _mockService = new Mock<IProductService>();
            // Truyền mock vào Controller
            _controller = new ProductController(_mockService.Object);
        }

        [Fact]
        public void GetAll_ShouldReturnOk() {
            // Arrange
            var mockProducts = new List<Product>
            {
                new Product { Id = 1, Name = "Product A", Price = 100 },
                new Product { Id = 2, Name = "Product B", Price = 200 }
            };
            _mockService.Setup(svc => svc.GetAll()).Returns(mockProducts);

            // Act
            // Vì Controller trả về IActionResult, ta gọi trực tiếp:
            var result = _controller.GetAll();

            // Assert
            // Kiểm tra kết quả là OkObjectResult
            var okResult = Assert.IsType<OkObjectResult>(result);
            // Ép kiểu giá trị trả về bên trong OkObjectResult
            var products = Assert.IsType<List<Product>>(okResult.Value);
            // Kiểm tra danh sách có 2 sản phẩm
            Assert.Equal(2, products.Count);
        }

        [Fact]
        public void GetById_ShouldReturnNotFound_WhenProductDoesNotExist() {
            // Arrange
            _mockService.Setup(svc => svc.GetById(It.IsAny<int>()))
                        .Returns((Product)null);

            // Act
            var result = _controller.GetById(10);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public void GetById_ShouldReturnOk_WhenProductExists() {
            // Arrange
            var product = new Product { Id = 1, Name = "Test Product", Price = 100 };
            _mockService.Setup(svc => svc.GetById(1)).Returns(product);

            // Act
            var result = _controller.GetById(1);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<Product>(okResult.Value);
            Assert.Equal("Test Product", returnValue.Name);
        }
    }
}
