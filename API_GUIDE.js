/**
 * HƯỚNG DẪN SỬ DỤNG CÁC HÀM GỌI API
 * ===================================
 */

// ============================================
// 1. SỬ DỤNG DỮ LIỆU MẪU (Mặc định)
// ============================================
// Trang web sẽ tự động tải dữ liệu mẫu từ biến carsData
// Không cần làm gì cả - ứng dụng sẽ chạy ngay

// Dòng code trong file car.js:
// window.addEventListener('DOMContentLoaded', async () => {
//     loadCars(); // Đã được kích hoạt mặc định
// });


// ============================================
// 2. GỌI API TỪ SERVER
// ============================================
// Để gọi API từ một server thực tế, thay đổi dòng này:

// TỪ:
// loadCars();

// THÀNH:
// await fetchCarsFromAPI('https://your-api.com/cars');

// HOẶC nếu API của bạn nằm ở endpoint khác:
// await fetchCarsFromAPI('https://api.example.com/api/v1/vehicles');


// ============================================
// 3. GỌI API VỚI RETRY LOGIC (Thử lại nếu lỗi)
// ============================================
// Hữu ích khi muốn thử lại nếu kết nối thất bại

// await fetchCarsFromAPIWithRetry('https://your-api.com/cars', 3);
// Tham số thứ 2 là số lần thử (mặc định 3 lần)


// ============================================
// 4. TẢI TỪ FILE JSON LOCAL
// ============================================
// Nếu bạn có file JSON cục bộ thay vì API server

// await fetchCarsFromLocalJSON('../data/cars.json');

// File cars.json đã được tạo sẵn trong thư mục data/
// Bạn có thể thay đổi đường dẫn tùy theo cấu trúc thư mục của bạn


// ============================================
// 5. LẤY CHI TIẾT MỘT XE CỤ THỂ
// ============================================
// Gọi API để lấy thông tin chi tiết của một chiếc xe

// const carDetail = await fetchCarDetailFromAPI(1);
// if (carDetail) {
//     console.log('Chi tiết xe:', carDetail);
// }


// ============================================
// 6. TÌM KIẾM XE
// ============================================
// Gọi API để tìm kiếm xe theo từ khóa

// await searchCarsFromAPI('Toyota Camry');
// // Kết quả sẽ được hiển thị trực tiếp trên trang


// ============================================
// 7. LẤY DANH SÁCH HÃNG SẢN XUẤT
// ============================================
// Gọi API để lấy danh sách tất cả hãng sản xuất

// const brands = await fetchBrandsFromAPI('https://your-api.com/brands');
// console.log('Danh sách hãng:', brands);


// ============================================
// ĐỊNH DẠNG DỮ LIỆU API MONG ĐỢI
// ============================================
// API của bạn nên trả về JSON với cấu trúc sau:

/*
{
    "id": 1,
    "name": "Tên xe",
    "brand": "Hãng sản xuất",
    "type": "Loại xe (Sedan/SUV/Hatchback/Coupe)",
    "price": "Giá (dạng text)",
    "priceSort": 1200000000,  // Giá dạng số để lọc
    "year": 2024,
    "engine": "Loại động cơ",
    "fuel": "Loại nhiên liệu",
    "transmission": "Kiểu truyền động",
    "seats": 5,
    "fuelConsumption": "Tiêu thụ",
    "acceleration": "Gia tốc",
    "image": "🚗",  // Emoji hoặc URL hình ảnh
    "description": "Mô tả xe",
    "features": ["Tính năng 1", "Tính năng 2"],
    "dealer": "Tên đại lý",
    "contact": "Số liên hệ"
}
*/


// ============================================
// LỖI THƯỜNG GẶP VÀ CÁCH KHẮC PHỤC
// ============================================

// 1. CORS Error (lỗi khi gọi API từ domain khác)
// Vấn đề: API không cho phép request từ domain khác
// Giải pháp:
//   - Sử dụng CORS proxy: https://cors-anywhere.herokuapp.com/https://your-api.com
//   - Hoặc yêu cầu API owner thêm CORS headers
//   - Hoặc sử dụng backend proxy

// 2. JSON Error (dữ liệu không phải JSON hợp lệ)
// Vấn đề: Response không phải JSON
// Giải pháp:
//   - Kiểm tra response trong DevTools (F12)
//   - Đảm bảo Content-Type header là 'application/json'

// 3. Timeout
// Vấn đề: API mất quá lâu để response
// Giải pháp:
//   - Sử dụng fetchCarsFromAPIWithRetry() để thử lại
//   - Kiểm tra tốc độ kết nối internet

// 4. File không tìm thấy (khi dùng fetchCarsFromLocalJSON)
// Vấn đề: Đường dẫn file JSON sai
// Giải pháp:
//   - Kiểm tra file cars.json có tồn tại ở đường dẫn ../data/cars.json
//   - Sử dụng DevTools Network tab để xem request

// ============================================
// CONSOLE DEBUGGING
// ============================================
// Mở DevTools (F12) -> Console để xem log chi tiết

// Log sẽ hiển thị:
// - 📱 Ứng dụng đang khởi tạo...
// - 🔄 Đang kết nối API...
// - ✅ Lấy dữ liệu thành công...
// - ❌ Lỗi khi gọi API...
// - ✅ Ứng dụng đã sẵn sàng


// ============================================
// VÍ DỤ THỰC HÀNH
// ============================================

// Ví dụ 1: Gọi API từ JSONPlaceholder (test)
// await fetchCarsFromAPI('https://jsonplaceholder.typicode.com/todos');

// Ví dụ 2: Gọi API từ file local
// await fetchCarsFromLocalJSON('../data/cars.json');

// Ví dụ 3: Tìm kiếm xe
// await searchCarsFromAPI('Toyota');

// Ví dụ 4: Lấy chi tiết xe
// const detail = await fetchCarDetailFromAPI(1, 'https://your-api.com/cars/');
