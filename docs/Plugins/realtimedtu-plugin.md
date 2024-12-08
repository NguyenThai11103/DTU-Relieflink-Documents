# DTU Appsmith Realtime Plugin

## 🌟 Giới Thiệu
 
 DTU Appsmith Realtime Plugin là thư viện realtime Socket.IO cho Appsmith với các chức năng của DTU. Hỗ trợ kết nối realtime, quản lý phòng chat, và xử lý các sự kiện tùy chỉnh.
 
 Bạn có thể xem thêm thông tin tại
 -  GITHUB : [Mapconfig Appsmith Plugin](https://github.com/Truongpyeo/DTUAppSmithMap)
 -  NPM : [Mapconfig Appsmith Plugin](https://www.npmjs.com/package/dtuappsmithmap)
### 🏆 Bối Cảnh
Plugin được phát triển như một phần của ứng dụng trong cuộc thi Mã Nguồn Mở năm 2024.

## ✨ Tính Năng
- Kết nối realtime qua WebSocket/Socket.IO
- Tự động kết nối lại khi mất kết nối
- Hỗ trợ các sự kiện: message, notification, sos
- Quản lý phòng chat (rooms)
- Lắng nghe sự kiện động
- Xử lý lỗi và retry tự động

## 📦 Cài đặt

### NPM

```bash
    npm install dtuappsmithrealtime
```

### CDN

```html
    <script src="https://cdn.jsdelivr.net/npm/dtuappsmithrealtime@1.1.5/dist/index.umd.js"></script>
```

### Appsmith
Thêm URL sau vào Resource của Appsmith:
```
    https://cdn.jsdelivr.net/npm/dtuappsmithrealtime@1.1.14/dist/index.umd.js
```

### Appsmith Setup
1. Thêm socket.io-client vào Resources của Appsmith:
```
    https://cdn.jsdelivr.net/npm/socket.io-client@4.7.2/dist/socket.io.min.js
```

2. Thêm DTUAppsmithRealtime:
```
    https://cdn.jsdelivr.net/npm/dtuappsmithrealtime@1.1.14/dist/index.esm.js
```





## 🎯 Sử dụng

### Khởi tạo kết nối

```javascript
const client = new DTUAppsmithRealtime({
    url: 'your_socket_url',
    socketType: 'socketio'  // hoặc 'websocket'
});

await client.connect();
```

### Lắng nghe sự kiện

```javascript
// Lắng nghe sự kiện cơ bản
client.on('message', (data) => {
    console.log('Received message:', data);
});

// Lắng nghe sự kiện tùy chỉnh
client.listenToEvent('custom_event', (data) => {
    console.log('Received custom event:', data);
});
```

### Gửi sự kiện
```javascript
// Gửi message
client.emit('message', {
    text: 'Hello world'
});

// Gửi SOS
client.sendSOS('Emergency message');
```

### Quản lý phòng

```javascript
// Tham gia phòng
const room = client.joinRoom('room1');

// Gửi tin nhắn trong phòng
room.broadcast('message', {
    text: 'Hello room'
});

// Rời phòng
room.leave();
```


## 📝 API Reference

### Khởi tạo
* `constructor(options)`: Khởi tạo client
* `connect()`: Kết nối tới server
* `disconnect()`: Ngắt kết nối


### Sự kiện
* `on(event, callback)`: Đăng ký lắng nghe sự kiện
* `off(event, callback)`: Hủy đăng ký sự kiện
* `emit(event, data)`: Gửi sự kiện
* `listenToEvent(eventName, callback)`: Lắng nghe sự kiện động
* `stopListening(eventName)`: Dừng lắng nghe sự kiện


### Phòng
* `joinRoom(roomId)`: Tham gia phòng
* `leaveRoom(roomId)`: Rời phòng
* `broadcast(roomId, event, data)`: Gửi tin nhắn trong phòng

### Tiện ích
* `getState()`: Lấy trạng thái kết nối
* `getAllEvents()`: Lấy danh sách sự kiện
* `fetchAvailableEvents()`: Lấy sự kiện từ server



## 📋 Yêu Cầu Tiên Quyết
- AppSmith version mới nhất
## 👥 Tác Giả
- Lê Thanh Trường       :  thanhtruong23111999@gmail.com 
- Võ Văn Việt           :  vietvo371@gmail.com
- Nguyễn Ngọc Duy Thái  :  kkdn011@gmail.com
## 💡Nhà phát triển
- 📧 Email: thanhtruong23111999@gmail.com
- 📱 Hotline: +84 376 659 652

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

## Repository

[github.com/Truongpyeo/dtuappsmithrealtime](https://github.com/Truongpyeo/dtuappsmithrealtime)

*"Được phát triển với ❤️ bởi Nhóm DTU-DZ"*
