using Microsoft.AspNetCore.Mvc;
using UnitTestDemo.Model;
using UnitTestDemo.Service;

namespace UnitTestDemo.Controllers {
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase {
        private readonly IProductService _service;

        public ProductController(IProductService service) {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_service.GetAll());

        [HttpGet("{id}")]
        public IActionResult GetById(int id) {
            var product = _service.GetById(id);
            return product != null ? Ok(product) : NotFound();
        }

        [HttpPost]
        public IActionResult Add(Product product) {
            _service.Add(product);
            return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Product product) {
            if (id != product.Id) return BadRequest();
            _service.Update(product);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id) {
            _service.Delete(id);
            return NoContent();
        }
    }

}
