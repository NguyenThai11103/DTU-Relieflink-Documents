# 🔧 Hướng dẫn cài đặt và import ứng dụng

## 💻 Yêu cầu hệ thống
- Node.js >= 14
- Docker & Docker Compose 
- Appsmith Server
- Git

## Phương án 1: Import từ Git Repository

Appsmith cho phép import ứng dụng trực tiếp từ Git repository thông qua Deploy Keys. Đây là cách được khuyến nghị để đảm bảo version control và collaboration.

Chi tiết có thể tham khảo tại [Import apps from Git - Appsmith Docs](https://docs.appsmith.com/advanced-concepts/version-control-with-git/import-from-repository)

### Bước 1: Tạo và thiết lập repositories

1. Tạo các repositories mới trên GitHub:
   - Tạo repo cho Admin Portal (ví dụ: your-username/admin-portal)
   - Tạo repo cho Workforce Portal (ví dụ: your-username/workforce-portal)
   - Tạo repo cho User Portal (ví dụ: your-username/user-portal)

2. Fork repositories mẫu:
   - Truy cập các repo mẫu:
     + [DTUDZ2_Admin](https://github.com/Truongpyeo/DTUDZ2_Admin)
     + [DTUDZ2_NhanLuc](https://github.com/Truongpyeo/DTUDZ2_NhanLuc)
     + [DTUDZ2_NguoiDung](https://github.com/Truongpyeo/DTUDZ2_NguoiDung)
   - Click nút "Fork" ở góc phải trên của mỗi repo
   - Chọn tài khoản của bạn để fork về

Lưu ý: 
- Đảm bảo các repo được fork là Public để Appsmith có thể truy cập
- Ghi nhớ SSH URL của các repo đã fork để sử dụng trong bước tiếp theo

### Bước 2: Import vào Appsmith

1. Truy cập Appsmith workspace
   - Mở Appsmith workspace
   - Click nút **Create New** ở góc phải trên
   - Chọn **Import** > **Import from Git repository**

2. Cấu hình Git cho từng ứng dụng:
   - Chọn GitHub làm service provider
   - Click **Configure Git**
   - Copy SSH URL của repository của bạn (ví dụ: git@github.com:your-username/admin-portal.git)
   - Paste URL và click **Generate SSH Keys**
   - Copy key được tạo (ECDSA 256 hoặc RSA 4096)
   - Thêm Deploy key vào repository:
     + Vào Repository Settings > Deploy keys
     + Click "Add deploy key"
     + Paste key và đặt title
     + Check "Allow write access"
     + Click "Add key"
   - Quay lại Appsmith, click **Connect Git**

3. Cấu hình Datasource
   - Trong modal Reconnect Datasources
   - Cập nhật thông tin kết nối cho từng datasource
   - Kiểm tra kết nối và lưu cấu hình

### Bước 3: Kiểm tra hoạt động
- Kiểm tra các trang và chức năng cơ bản
- Xác nhận kết nối database
- Test các API endpoints

## Phương án 2: Import trực tiếp từ file

Nếu bạn không muốn sử dụng Git, bạn có thể import trực tiếp file JSON của ứng dụng:

1. Download các file JSON từ thư mục src:
    - [Admin Portal](../src/DTUDZ2_Admin.json)
    - [Workforce Portal](../src/DTUDZ2_NhanLuc.json) 
    - [User Portal](../src/DTUDZ2_NguoiDung.json)

2. Import vào Appsmith:
   - Click **Create New** > **Import**
   - Chọn **Import from file**
   - Upload file JSON tương ứng
   - Cấu hình lại datasources:
     + Kết nối MongoDB với URI có sẵn:
     ```
     mongodb+srv://admin:admin@cluster0.gw0vs.mongodb.net/rescue_alert
     ```

## ⚠️ Xử lý lỗi thường gặp

### Lỗi import do trùng tên datasource
Nếu workspace đích đã có datasource trùng tên nhưng khác loại với datasource trong git repository, việc import sẽ thất bại. Giải pháp:
- Đổi tên datasource hiện có trong workspace đích
- Hoặc sửa tên datasource trong repository trước khi import

### Lỗi kết nối Git
- Kiểm tra lại SSH key đã được thêm đúng cách
- Xác nhận quyền truy cập repository
- Kiểm tra định dạng URL git clone

## Tài liệu tham khảo
- [Import apps from Git - Appsmith Docs](https://docs.appsmith.com/advanced-concepts/version-control-with-git/import-from-repository)
- [Hướng dẫn sử dụng Deploy Keys](https://docs.github.com/en/developers/overview/managing-deploy-keys)

## 🗄️ Cấu hình MongoDB Atlas

### Cách 1: Kết nối bằng URI (Khuyến nghị)

1. Trong Appsmith Workspace:
   - Vào phần Datasources
   - Click "New Datasource" > "MongoDB"
   - Chọn "Use mongo connection string URI" = "Yes"
   - Paste connection string sau:
   ```
   mongodb+srv://admin:admin@cluster0.gw0vs.mongodb.net/rescue_alert
   ```
   - Click "Test Connection" để kiểm tra
   - Sau khi test thành công, click "Save" để lưu

Lưu ý:
- URI này đã được cấu hình sẵn cho dự án
- Database được sử dụng là "rescue_alert"
- Không cần thay đổi username/password

### Cách 2: Kết nối thủ công

Nếu bạn muốn sử dụng MongoDB Atlas riêng:

1. Truy cập [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Tạo tài khoản và cluster mới
3. Lấy connection string từ cluster của bạn
4. Trong Appsmith:
   - Chọn "Use mongo connection string URI" = "Yes" 
   - Paste connection string của bạn
   - Thay thế `<username>`, `<password>` và tên database

📚  Tài liệu tham khảo:
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [Appsmith MongoDB Integration](https://docs.appsmith.com/reference/datasources/mongodb)

## 💡Nhà phát triển

📧 Email: thanhtruong23111999@gmail.com

📱 Hotline: +84 376 659 652

*" 🏫 DTU_DZ - DUY TAN UNIVERSITY - SCS ✨"*
### 📝 License
Dự án này được cấp phép theo các điều khoản của giấy phép [GPL V3 License](https://github.com/olp-dtu-2024/DTU-GreenHope/blob/main/LICENCE)
