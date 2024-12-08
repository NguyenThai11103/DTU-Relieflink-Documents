# Mapconfig Appsmith Plugin

## 🌟 Giới Thiệu
 
 Mapconfig Appsmith Plugin là một plugin cho nền tảng AppSmith,Tích hợp và tối ưu hóa bản đồ từ các nguồn như OpenStreetMap, Google Maps, hoặc các dữ liệu bản đồ tùy chỉnh.
 
 
 Bạn có thể xem thêm thông tin tại
 -  GITHUB : [Mapconfig Appsmith Plugin](https://github.com/Truongpyeo/DTUAppSmithMap)
 -  NPM : [Mapconfig Appsmith Plugin](https://www.npmjs.com/package/dtuappsmithmap)
### 🏆 Bối Cảnh
Plugin được phát triển như một phần của ứng dụng trong cuộc thi Mã Nguồn Mở năm 2024.

## ✨ Tính Năng
- Tạo và quản lý marker với icon tùy chỉnh từ Font Awesome
- Hiển thị popup thông tin với style DTU
- Vẽ đường đi theo đường phố thực tế
- Tính khoảng cách giữa các điểm
- Vẽ vùng ảnh hưởng với gradient
- Theo dõi vị trí hiện tại

## 📦 Cài đặt

### NPM

```bash
    npm install dtuappsmithmap
```

### CDN

```html
    <script src="https://cdn.jsdelivr.net/npm/dtuappsmithmap@2.2.20/dist/index.umd.js"></script>
```


Nếu bạn dùng AppSmith. Điều hướng đến bảng điều khiển Appsmith và chọn ứng dụng mà bạn muốn sử dụng tài nguyên CDN 

- Vào Cài đặt ở góc dưới bên trái của trình soạn thảo Appsmith.
- Nhấp vào Nâng cao .
- Trong phần Thư viện JS , hãy thêm URL CDN của bạn vào đây. Ví dụ: plaintext
```
    https://cdn.jsdelivr.net/npm/dtuappsmithmap@2.2.20/dist/index.umd.js
```


Bạn có thể sử dụng npm : 
```
    npm i dtuappsmithmap
```



## 🎯 Sử dụng

### Khởi tạo bản đồ

```javascript
const map = new DTUAppsmithMap('map-container', {
    center: [16.0544, 108.2022],
    zoom: 13
});
```

### Tạo địa điểm với marker

```javascript
map.taoDiaDiem(
    16.0544,                    // latitude
    108.2022,                   // longitude
    "Đại học Duy Tân",         // title
    "254 Nguyễn Văn Linh",     // content
    "fas fa-university",        // icon class (Font Awesome)
    "#003C71",                  // icon color
    {                          // options
        marker: {},
        popup: {}
    }
);
```

### Cập nhật vị trí hiện tại

```javascript
map.capNhatViTriHienTai(
    16.0544,
    108.2022,
    "Vị trí của bạn",
    "Current location"
);
```

### Vẽ đường đi

```javascript
// Vẽ đường đi giữa 2 điểm
await map.veDuongDi(
    16.0544, 108.2022,     // điểm bắt đầu
    16.0464, 108.2326,     // điểm kết thúc
    {
        color: '#FF0000',   // màu đường
        weight: 3,          // độ dày
        opacity: 0.8        // độ trong suốt
    }
);

// Vẽ đường đi giữa 2 marker
await map.veDuongDiMarker(marker1, marker2, options);
```

### Tính khoảng cách

```javascript
// Tính khoảng cách giữa 2 điểm
const distance = map.tinhKhoangCach(
    16.0544, 108.2022,     // điểm 1
    16.0464, 108.2326      // điểm 2
);

// Tính khoảng cách từ vị trí hiện tại đến một điểm
const distance = map.tinhKhoangCachDenDiem(16.0464, 108.2326);

// Lấy danh sách khoảng cách đến tất cả các điểm
const distances = map.tinhKhoangCachDenCacDiem();
```

### Vẽ vùng tròn

```javascript
map.veVungTron(
    16.0544,        // latitude
    108.2022,       // longitude
    1000,           // bán kính (mét)
    '#003C71',      // màu
    {               // options
        weight: 2,
        opacity: 1,
        fillOpacity: 0.2
    }
);
```
## 📝 API Reference

### Khởi tạo
- `constructor(containerId, options)`: Khởi tạo bản đồ

### Marker và Địa điểm
- `taoDiaDiem(lat, lng, title, content, iconClass, iconColor, options)`: Tạo marker với popup
- `capNhatViTriHienTai(lat, lng, title, content)`: Cập nhật vị trí hiện tại

### Đường đi
- `veDuongDi(lat1, lng1, lat2, lng2, options)`: Vẽ đường đi giữa 2 điểm
- `veDuongDiMarker(marker1, marker2, options)`: Vẽ đường đi giữa 2 marker
- `xoaDuongDi()`: Xóa tất cả đường đi

### Khoảng cách
- `tinhKhoangCach(lat1, lng1, lat2, lng2)`: Tính khoảng cách giữa 2 điểm
- `tinhKhoangCachMarker(marker1, marker2)`: Tính khoảng cách giữa 2 marker
- `tinhKhoangCachDenDiem(lat, lng)`: Tính khoảng cách từ vị trí hiện tại
- `tinhKhoangCachDenCacDiem()`: Lấy danh sách khoảng cách đến tất cả điểm

### Vùng ảnh hưởng
- `veVungTron(lat, lng, radius, color, options)`: Vẽ vùng tròn với gradient
- `xoaVungTron()`: Xóa tất cả vùng tròn

## 🎨 Tùy chỉnh Style

### Custom Marker Icon

```javascript
const options = {
    marker: {
        draggable: true,
        title: 'Marker title'
    },
    popup: {
        maxWidth: 300,
        className: 'custom-popup'
    }
};
```

### Custom Route Style

```javascript
const routeOptions = {
    color: '#FF0000',
    weight: 3,
    opacity: 0.8,
    dashArray: '10, 10'  // đường nét đứt
};
```

### Custom Circle Style

```javascript
const circleOptions = {
    stroke: true,
    color: '#003C71',
    weight: 2,
    opacity: 1,
    fillOpacity: 0.2
};
```


## 📋 Yêu Cầu Tiên Quyết
- AppSmith version mới nhất
## 👥 Tác Giả
- Lê Thanh Trường       :  thanhtruong23111999@gmail.com 
- Võ Văn Việt           :  vietvo371@gmail.com
- Nguyễn Ngọc Duy Thái  :  kkdn011@gmail.com
## 📄 Giấy Phép
Dự án được phân phối dưới giấy phép [MIT License](https://github.com/Truongpyeo/DTURelifeLink/blob/master/LICENSE)
## 🤝 Đóng Góp
Chúng tôi rất hoan nghênh các đóng góp từ cộng đồng! Vui lòng:

- Tạo issue để báo cáo lỗi
- Gửi pull request để đề xuất cải tiến
- Truy cập GitHub Repository của chúng tôi để biết thêm chi tiết

## 🆘 Hỗ Trợ
Nếu gặp bất kỳ vấn đề nào, vui lòng:

- Mở issue tại GitHub repository
- Liên hệ trực tiếp với nhóm phát triển
## ⚠️ Lưu Ý
- Đảm bảo tương thích với phiên bản AppSmith hiện tại
- Kiểm tra kết nối và cấu hình trước khi sử dụng



*"Được phát triển với ❤️ bởi Nhóm DTU-DZ"*
