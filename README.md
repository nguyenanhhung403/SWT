# UnitTestDemo

#LinkVideo https://drive.google.com/file/d/18kOJ3UEXGDVpJVCJsu3LBAcBxv16483u/view?usp=drive_link

Dự án **UnitTestDemo** là một ví dụ về **ASP.NET Core Web API** kèm theo **Unit Tests**.  
Dự án cung cấp các chức năng CRUD cho **Product** (sản phẩm) và sử dụng **Swagger** để thử nghiệm API trực quan.

## Mục lục
- [Giới thiệu](#giới-thiệu)
- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Hướng dẫn cài đặt và chạy](#hướng-dẫn-cài-đặt-và-chạy)
  - [1. Khôi phục và build](#1-khôi-phục-và-build)
  - [2. Chạy ứng dụng](#2-chạy-ứng-dụng)
  - [3. Truy cập Swagger UI](#3-truy-cập-swagger-ui)
  - [4. Chạy Unit Tests](#4-chạy-unit-tests)
---

## Giới thiệu

- **Mục tiêu**:  
  - Cung cấp ví dụ thực tế về xây dựng Web API với ASP.NET Core.
  - Triển khai các thao tác CRUD cho đối tượng **Product**.
  - Tích hợp Swagger để hỗ trợ việc kiểm thử và tài liệu API.
  - Minh họa cách viết và chạy Unit Tests cho các chức năng của ứng dụng.

- **Công nghệ sử dụng**:  
  - **.NET 6** hoặc **.NET 7**  
  - **ASP.NET Core Web API**  
  - **Unit Testing** với xUnit / MSTest / NUnit  
  - **Swagger** (Swashbuckle.AspNetCore)
---

## Yêu cầu hệ thống

- **.NET SDK**: 6.0+ hoặc 7.0+ (tùy theo cấu hình dự án)
- **IDE**: Visual Studio 2022, Visual Studio Code (với C# extension) hoặc JetBrains Rider
- **Hệ điều hành**: Windows, macOS, hoặc Linux

---

## Cấu trúc dự án

```plaintext
SWT
├── UnitTestDemo
│   ├── Controllers
│   │   └── ProductsController.cs    // Xử lý các request liên quan đến sản phẩm (/api/products)
│   ├── Models
│   │   └── Product.cs               // Định nghĩa model Product
│   ├── Program.cs                   // Điểm khởi động của Web API, cấu hình services, routing, Swagger, v.v.
│   ├── Properties
│   │   └── launchSettings.json      // Cấu hình cổng, launchUrl, môi trường chạy (Development/Production)
│   └── UnitTestDemo.csproj          // File dự án chính của Web API
├── UnitTestDemo.Tests
│   ├── ProductTests.cs              // Ví dụ về các Unit Tests cho Product
│   └── UnitTestDemo.Tests.csproj    // File dự án Unit Tests
├── README.md                        // Tài liệu hướng dẫn dự án
└── ...
```


## Hướng dẫn cài đặt và chạy
#1. Khôi phục và build
---
Mở terminal (hoặc PowerShell) tại thư mục gốc của dự án và chạy các lệnh sau:
Di chuyển vào thư mục dự án (nếu cần)
cd SWT

Khôi phục các package cần thiết
dotnet restore

Build dự án
dotnet build


#2. Chạy ứng dụng
---
Di chuyển vào thư mục UnitTestDemo và chạy:
dotnet run 

Khi ứng dụng khởi động thành công, bạn sẽ thấy log hiển thị dòng:
Now listening on: http://localhost:5229

#3. Truy cập Swagger UI
---
Mở trình duyệt và truy cập: (Tại đây, có thể xem tài liệu API và thực hiện các thử nghiệm các endpoint như GET, POST, PUT, DELETE cho Product. hoặc api POSTMAN ) 
http://localhost:5229/swagger/index.html

#4. Chạy Unit Tests
---
Để chạy các Unit Tests, thực hiện: ( cd .. (out ra terminal gốc) -->  SWT\ --> cd UnitTestDemo.Test --> dotnet test
Lệnh này sẽ tự động tìm và chạy tất cả các bài test trong dự án UnitTestDemo.Tests và hiển thị kết quả trên terminal.

Endpoints chính
Product API
GET /api/products
Mô tả: Lấy danh sách tất cả các sản phẩm.
GET /api/products/{id}
Mô tả: Lấy thông tin chi tiết của sản phẩm theo ID.
POST /api/products
Mô tả: Thêm sản phẩm mới.
Body: JSON chứa thông tin sản phẩm.
PUT /api/products/{id}
Mô tả: Cập nhật thông tin của sản phẩm đã có.
DELETE /api/products/{id}
Mô tả: Xóa sản phẩm theo ID.

---

#Hy vọng file README.md này sẽ giúp cô và các bạn hiểu rõ hơn về phần Backend về LAB 2 này của nhóm mình, xin chân thành cám ơn 😎💕
---


