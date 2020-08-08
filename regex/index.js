data = 'Thế giới ghi nhận hơn 400.000 người chết trong hơn 6,9 triệu ca nhiễm, nhiều nơi tiếp tục nới lỏng các biện pháp phong tỏa.\
213 quốc gia và vùng lãnh thổ ghi nhận 6.948.800 ca nhiễm và 401.047 ca tử vong do nCoV, tăng lần lượt 125.523 và 3.723 so với hôm qua. Tổng cộng 3.402.531 người đã bình phục.\
Mỹ, vùng dịch lớn nhất thế giới, ghi nhận 1.986.646 người nhiễm và 112.055 người chết, tăng lần lượt 33.970 và 682.\
Tất cả 50 bang của Mỹ đã nới lỏng phong tỏa ở các cấp độ khác nhau, dân chúng được phép tụ tập tới 10 người nếu duy trì quy tắc cách biệt cộng đồng. Tổng thống Donald Trump nói nền kinh tế sẽ phục hồi nhanh hơn nếu các bang và địa phương chấm dứt lệnh phong tỏa.\
Tuy nhiên, giới chức và cơ quan y tế lo ngại đại dịch sẽ trở nên nghiêm trọng hơn, số ca nhiễm sẽ tăng vọt trở lại khi các cuộc biểu tình phản đối cảnh sát ghì chết người đàn ông da màu George Floyd. Nhiều người biểu tình không đeo khẩu trang và giữ khoảng cách cần thiết.'

reg = /[6-9]/g

test = reg.test(data)
console.log(test)