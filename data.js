/*========================================
  data.js
  Giáo trình Tiếng Việt A0 - 完整版修复
  每条词汇包含两组例句
========================================*/
//==============================
// 课程总列表 LESSONS
//==============================
const LESSONS = [
{id:1,level:"A0",title:"Bảng chữ cái - 字母表",description:"Học 29 chữ cái tiếng Việt"},
{id:2,level:"A0",title:"Chào hỏi - 问候",description:"Những câu chào hỏi cơ bản"},
{id:3,level:"A0",title:"Gia đình - 家庭",description:"Các thành viên trong gia đình"},
{id:4,level:"A0",title:"Số đếm - 数字",description:"Số đếm từ 0 đến 100"},
{id:5,level:"A0",title:"Thời gian - 时间",description:"Ngày, tháng, năm và giờ"},
{id:6,level:"A0",title:"Màu sắc - 颜色",description:"Các màu sắc thông dụng"},
{id:7,level:"A0",title:"Thức ăn - 食物",description:"Từ vựng về món ăn"},
{id:8,level:"A0",title:"Đồ uống - 饮料",description:"Các loại đồ uống"},
{id:9,level:"A0",title:"Mua sắm - 购物",description:"Giao tiếp khi mua hàng"},
{id:10,level:"A0",title:"Giao thông - 交通",description:"Các phương tiện giao thông"},
{id:11,level:"A0",title:"Nghề nghiệp - 职业",description:"Tên các nghề nghiệp"},
{id:12,level:"A0",title:"Cơ thể - 身体",description:"Các bộ phận cơ thể"},
{id:13,level:"A0",title:"Quần áo - 衣服",description:"Trang phục hằng ngày"},
{id:14,level:"A0",title:"Thời tiết - 天气",description:"Miêu tả thời tiết"},
{id:15,level:"A0",title:"Nhà cửa - 房子",description:"Các đồ vật trong nhà"},
{id:16,level:"A0",title:"Thành phố - 城市",description:"Địa điểm trong thành phố"},
{id:17,level:"A0",title:"Nhà hàng - 餐厅",description:"Gọi món và ăn uống"},
{id:18,level:"A0",title:"Bệnh viện - 医院",description:"Khám bệnh và sức khỏe"},
{id:19,level:"A0",title:"Khách sạn - 酒店",description:"Đặt phòng và lưu trú"},
{id:20,level:"A0",title:"Ngân hàng - 银行",description:"Giao dịch ngân hàng"},
{id:21,level:"A0",title:"Bưu điện - 邮局",description:"Dịch vụ bưu chính"},
{id:22,level:"A0",title:"Công việc - 工作",description:"Môi trường làm việc"},
{id:23,level:"A0",title:"Máy tính và Internet - 电脑和互联网",description:"Thiết bị và Internet"},
{id:24,level:"A0",title:"Ngân hàng điện tử - 网上银行",description:"Thanh toán trực tuyến"},
{id:25,level:"A0",title:"Thể thao - 运动",description:"Các môn thể thao"},
{id:26,level:"A0",title:"Sở thích - 爱好",description:"Các hoạt động yêu thích"},
{id:27,level:"A0",title:"Giáo dục - 教育",description:"Trường học và học tập"},
{id:28,level:"A0",title:"Du lịch - 旅游",description:"Du lịch và tham quan"},
{id:29,level:"A0",title:"Văn hóa Việt Nam - 越南文化",description:"Phong tục và văn hóa"},
{id:30,level:"A0",title:"Môi trường - 环境",description:"Bảo vệ môi trường"}
];

//==============================
// 词汇库 VOCABULARY（每条2个例句，exampleVN/exampleCN用逗号分隔两句）
//==============================
const VOCABULARY = [
/*========================================
Bài 1 - Bảng chữ cái 字母表
========================================*/
{id:1,lesson:1,vn:"Chữ A",cn:"字母 A",pinyin:"Zìmǔ A",exampleVN:"Đây là chữ A, Chữ A đứng đầu bảng chữ cái",exampleCN:"这是字母A，字母A排在字母表第一位"},
{id:2,lesson:1,vn:"Chữ Ă",cn:"字母 Ă",pinyin:"Zìmǔ Ă",exampleVN:"Tôi viết chữ Ă, Chữ Ă có dấu ngã",exampleCN:"我写字母Ă，字母Ă带有抑符号"},
{id:3,lesson:1,vn:"Chữ Â",cn:"字母 Â",pinyin:"Zìmǔ Â",exampleVN:"Học chữ Â, Chữ Â khác chữ A thường",exampleCN:"学习字母Â，Â和普通A不一样"},
{id:4,lesson:1,vn:"Chữ B",cn:"字母 B",pinyin:"Zìmǔ B",exampleVN:"Đây là chữ B, B là chữ thứ hai",exampleCN:"这是字母B，B是第二个字母"},
{id:5,lesson:1,vn:"Chữ C",cn:"字母 C",pinyin:"Zìmǔ C",exampleVN:"Tô màu chữ C, Từ chữ C bắt đầu chữ cái",exampleCN:"给字母C涂色，单词以C开头"},
{id:6,lesson:1,vn:"Chữ D",cn:"字母 D",pinyin:"Zìmǔ D",exampleVN:"Chữ D to, D dễ nhớ cho học sinh",exampleCN:"大写字母D，学生很容易记住D"},
{id:7,lesson:1,vn:"Chữ Đ",cn:"字母 Đ",pinyin:"Zìmǔ Đ",exampleVN:"Đây là chữ Đ phân biệt D thường, Chữ Đ rất đặc trưng tiếng Việt",exampleCN:"这是区分普通D的Đ，Đ是越南特有字母"},
{id:8,lesson:1,vn:"Chữ E",cn:"字母 E",pinyin:"Zìmǔ E",exampleVN:"Tôi đọc chữ E, E đọc ngắn",exampleCN:"我读字母E，E发音短促"},
{id:9,lesson:1,vn:"Chữ Ê",cn:"字母 Ê",pinyin:"Zìmǔ Ê",exampleVN:"Chữ ß và chữ ß khác nhau, Học thuộc chữ Ê hôm nay",exampleCN:"Ê和E不一样，今天熟记字母Ê"},
{id:10,lesson:1,vn:"Chữ G",cn:"字母 G",pinyin:"Zìmǔ G",exampleVN:"Viết chữ G, Từ ga bắt đầu chữ G",exampleCN:"书写字母G，ga以G开头"},
{id:11,lesson:1,vn:"Chữ H",cn:"字母 H",pinyin:"Zìmǔ H",exampleVN:"Chữ H không thanh, H đứng giữa bảng chữ cái",exampleCN:"H没有声调，H在字母表中间"},
{id:12,lesson:1,vn:"Chữ I",cn:"字母 I",pinyin:"Zìmǔ I",exampleVN:"Đây là chữ I, I nhỏ trên đầu",exampleCN:"这是字母I，上面有小竖点"},
{id:13,lesson:1,vn:"Chữ K",cn:"字母 K",pinyin:"Zìmǔ K",exampleVN:"Chữ K to, Từ kẹo dùng chữ K",exampleCN:"大写K，糖果kẹo用到K"},
{id:14,lesson:1,vn:"Chữ L",cn:"字母 L",pinyin:"Zìmǔ L",exampleVN:"Viết nét chữ L, L đọc nhẹ",exampleCN:"写L的笔画，L发音轻柔"},
{id:15,lesson:1,vn:"Chữ M",cn:"字母 M",pinyin:"Zìmǔ M",exampleVN:"Ba nét chữ M, Mẹ bắt đầu M",exampleCN:"M三笔写成，妈妈mẹ以M开头"},
{id:16,lesson:1,vn:"Chữ N",cn:"字母 N",pinyin:"Zìmǔ N",exampleVN:"Chữ N ngăn ngắn, Nước dùng chữ N",exampleCN:"N笔画短，水nước用N"},
{id:17,lesson:1,vn:"Chữ O",cn:"字母 O",pinyin:"Zìmǔ O",exampleVN:"Vòng tròn chữ O, O đơn giản nhất",exampleCN:"O是圆圈，最简单的字母"},
{id:18,lesson:1,vn:"Chữ Ô",cn:"字母 Ô",pinyin:"Zìmǔ Ô",exampleVN:"Chữ Ô có dấu mũ, Phân biệt O thường",exampleCN:"Ô带帽子符号，区分普通O"},
{id:19,lesson:1,vn:"Chữ Ơ",cn:"字母 Ơ",pinyin:"Zìmǔ Ơ",exampleVN:"Ơ là chữ riêng Việt Nam, Học đọc chữ Ơ",exampleCN:"Ơ是越南独有字母，学习读Ơ"},
{id:20,lesson:1,vn:"Chữ P",cn:"字母 P",pinyin:"Zìmǔ P",exampleVN:"Chữ P nửa vòng, Phở dùng chữ P",exampleCN:"P半个圆圈，河粉phở用P"},
{id:21,vn:"Chữ Q",lesson:1,cn:"字母 Q",pinyin:"Zìmǔ Q",exampleVN:"Q nối với u, Quả bắt đầu Q",exampleCN:"Q永远搭配u，果子quả以Q开头"},
{id:22,lesson:1,vn:"Chữ R",cn:"字母 R",pinyin:"Zìmǔ R",exampleVN:"Chữ R uốn lượn, Rất dùng chữ R",exampleCN:"R笔画弯曲，rất用到R"},
{id:23,lesson:1,vn:"Chữ S",cn:"字母 S",pinyin:"Zìmǔ S",exampleVN:"S hai nét cong, Sách dùng chữ S",exampleCN:"S两道曲线，书sách用S"},
{id:24,lesson:1,vn:"Chữ T",cn:"字母 T",pinyin:"Zìmǔ T",exampleVN:"Nét ngang chữ T, Tên bắt đầu T",exampleCN:"T有横笔，名字tên以T开头"},
{id:25,lesson:1,vn:"Chữ U",cn:"字母 U",pinyin:"Zìmǔ U",exampleVN:"Chữ U tròn dưới, Uống dùng chữ U",exampleCN:"U下方圆弧，喝uống用U"},
{id:26,lesson:1,vn:"Chữ Ư",cn:"字母 Ư",pinyin:"Zìmǔ Ư",exampleVN:"Ư khác U, Từ ước dùng chữ Ư",exampleCN:"Ư和U不同，ước用到Ư"},
{id:27,lesson:1,vn:"Chữ V",cn:"字母 V",pinyin:"Zìmǔ V",exampleVN:"V hình tam giác, Vàng dùng chữ V",exampleCN:"V三角形形状，金色vàng用V"},
{id:28,lesson:1,vn:"Chữ X",cn:"字母 X",pinyin:"Zìmǔ X",exampleVN:"X cắt chéo, Xăng dùng chữ X",exampleCN:"X交叉笔画，汽油xăng用X"},
{id:29,lesson:1,vn:"Chữ Y",cn:"字母 Y",pinyin:"Zìmǔ Y",exampleVN:"Y chia nhánh, Yêu dùng chữ Y",exampleCN:"Y分叉笔画，爱yêu用Y"},
/*========================================
Bài 2 - Chào hỏi 问候
========================================*/
{id:30,lesson:2,vn:"Xin chào",cn:"你好",pinyin:"Nǐ hǎo",exampleVN:"Xin chào bạn, Xin chào cô giáo",exampleCN:"你好朋友，老师您好"},
{id:31,lesson:2,vn:"Chào buổi sáng",cn:"早上好",pinyin:"Zǎoshang hǎo",exampleVN:"Chào buổi sáng mẹ, Chào buổi sáng mọi người",exampleCN:"妈妈早上好，大家早上好"},
{id:32,lesson:2,vn:"Chào buổi chiều",cn:"下午好",pinyin:"Xiàwǔ hǎo",exampleVN:"Chào buổi chiều anh, Chào buổi chiều bạn học",exampleCN:"哥哥下午好，同学下午好"},
{id:33,lesson:2,vn:"Chào buổi tối",cn:"晚上好",pinyin:"Wǎnshang hǎo",exampleVN:"Chào buổi tối bố, Chào buổi tối hàng xóm",exampleCN:"爸爸晚上好，邻居晚上好"},
{id:34,lesson:vn:"Tạm biệt",cn:"再见",pinyin:"Zàijiàn",exampleVN:"Tạm biệt bạn, Tạm biệt cô giáo",exampleCN:"再见朋友，再见老师"},
{id:35,lesson:2,vn:"Hẹn gặp lại",cn:"回头见",pinyin:"Huítóu jiàn",exampleVN:"Hẹn gặp lại mai, Hẹn gặp lại sau giờ học",exampleCN:"明天见，下课后见"},
{id:36,lesson:2,vn:"Cảm ơn",cn:"谢谢",pinyin:"Xièxie",exampleVN:"Cảm ơn giúp tôi, Cảm ơn quà tặng",exampleCN:"谢谢你帮我，谢谢你的礼物"},
{id:37,lesson:2,vn:"Không có gì",cn:"不客气",pinyin:"Bú kèqi",exampleVN:"Không có gì nhé, Không có gì đâu",exampleCN:"不用客气啦，没事儿的"},
{id:38,lesson:2,vn:"Xin lỗi",cn:"对不起",pinyin:"Duìbuqǐ",exampleVN:"Xin lỗi trễ giờ, Xin lỗi làm phiền",exampleCN:"对不起迟到了，不好意思打扰你"},
{id:39,lesson:2,vn:"Không sao",cn:"没关系",pinyin:"Méi guānxi",exampleVN:"Không sao đừng lo, Không sao chút nào",exampleCN:"没关系别担心，一点事儿没有"},
{id:40,lesson:2,vn:"Tên",cn:"名字",pinyin:"Míngzi",exampleVN:"Tên tôi là Lan, Tên bạn là gì",exampleCN:"我叫兰，你叫什么名字"},
{id:41,lesson:2,vn:"Tôi",cn:"我",pinyin:"Wǒ",exampleVN:"Tôi đi học, Tôi thích tiếng Việt",exampleCN:"我去上学，我喜欢越南语"},
{id:42,lesson:2,vn:"Bạn",cn:"你",pinyin:"Nǐ",exampleVN:"Bạn khỏe không, Bạn đến từ đâu",exampleCN:"你还好吗，你来自哪里"},
{id:43,lesson:2,vn:"Là",cn:"是",pinyin:"Shì",exampleVN:"Đây là sách, Tôi là sinh viên",exampleCN:"这是书本，我是学生"},
{id:44,lesson:2,vn:"Rất vui được gặp",cn:"很高兴认识你",pinyin:"Hěn gāoxìng rènshi nǐ",exampleVN:"Rất vui được gặp anh, Rất vui gặp cả lớp",exampleCN:"很高兴认识你，很高兴认识全班同学"},
{id:45,lesson:2,vn:"Khỏe",cn:"好",pinyin:"Hǎo",exampleVN:"Tôi khỏe lắm, Mẹ cũng khỏe",exampleCN:"我身体很好，妈妈也健康"},
{id:46,lesson:2,vn:"Hôm nay",cn:"今天",pinyin:"Jīntiān",exampleVN:"Hôm nay trời đẹp, Hôm nay học bài mới",exampleCN:"今天天气很好，今天学新课"},
{id:47,lesson:2,vn:"Vâng",cn:"是",pinyin:"Shì",exampleVN:"Vâng tôi hiểu, Vâng đúng rồi",exampleCN:"是的我明白，没错就是这样"},
{id:48,lesson:2,vn:"Không",cn:"不",pinyin:"Bù",exampleVN:"Không muốn ăn, Không có thời gian",exampleCN:"不想吃东西，没有时间"},
{id:49,lesson:vn:"Mời",cn:"请",pinyin:"Qǐng",exampleVN:"Mời ngồi xuống, Mời uống nước",exampleCN:"请坐下，请喝水"},
/*========================================
Bài 3 - Gia đình 家庭
========================================*/
{id:50,lesson:3,vn:"Gia đình",cn:"家庭",pinyin:"jiā tíng",exampleVN:"Gia đình tôi 4 người, Gia đình rất hạnh phúc",exampleCN:"我家四口人，家庭很幸福"},
{id:51,lesson:3,vn:"Ba",cn:"爸爸",pinyin:"bà ba",exampleVN:"Ba đi làm mỗi sáng, Ba thích xem tin",exampleCN:"爸爸每天上班，爸爸爱看新闻"},
{id:52,lesson:3,vn:"Mẹ",cn:"妈妈",pinyin:"mā ma",exampleVN:"Mẹ nấu ăn ngon, Mẹ chăm con",exampleCN:"妈妈做饭好吃，妈妈照顾孩子"},
{id:53,lesson:3,vn:"Ông",cn:"爷爷",pinyin:"yé ye",exampleVN:"Ông thích trồng cây, Ông kể chuyện",exampleCN:"爷爷喜欢种树，爷爷讲故事"},
{id:54,lesson:3,vn:"Bà",cn:"奶奶",pinyin:"nǎi nai",exampleVN:"Bà đan khăn, Bà hay cho kẹo",exampleCN:"奶奶织围巾，奶奶常给糖果"},
{id:55,lesson:3,vn:"Anh",cn:"哥哥",pinyin:"gē ge",exampleVN:"Anh chơi bóng, Anh giúp em học",exampleCN:"哥哥踢球，哥哥辅导我学习"},
{id:56,lesson:3,vn:"Chị",cn:"姐姐",pinyin:"jiě jie",exampleVN:"Chị hát hay, Chị mua quà cho tôi",exampleCN:"姐姐唱歌好听，姐姐给我买礼物"},
{id:57,lesson:3,vn:"Em",cn:"弟弟/妹妹",pinyin:"dì di / mèi mei",exampleVN:"Em thích vẽ, Em đi chơi với tôi",exampleCN:"妹妹喜欢画画，妹妹和我出去玩"},
{id:58,lesson:vn:"Con",cn:"孩子",pinyin:"hái zi",exampleVN:"Con ngoan ngoãn, Con học chăm chỉ",exampleCN:"孩子很乖巧，孩子认真学习"},
{id:59,lesson:3,vn:"Chồng",cn:"丈夫",pinyin:"zhàng fu",exampleVN:"Chồng đi công tác, Chồng về tối muộn",exampleCN:"丈夫出差，丈夫很晚回家"},
{id:60,lesson:3,vn:"Vợ",cn:"妻子",pinyin:"qī zi",exampleVN:"Vợ làm văn phòng, Vợ nấu cơm tối",exampleCN:"妻子坐办公室，妻子做晚饭"},
{id:61,lesson:3,vn:"Con trai",cn:"儿子",pinyin:"ér zi",exampleVN:"Con trai thích xe, Con trai học toán",exampleCN:"儿子喜欢小车，儿子学数学"},
{id:62,lesson:3,vn:"Con gái",cn:"女儿",pinyin:"nǚ ér",exampleVN:"Con gái thích hoa, Con gái học nhạc",exampleCN:"女儿喜欢花，女儿学音乐"},
{id:63,lesson:3,vn:"Anh em",cn:"兄弟",pinyin:"xiōng dì",exampleVN:"Chúng tôi là anh em, Anh em cùng chơi",exampleCN:"我们是兄弟，兄弟们一起玩"},
{id:64,lesson:3,vn:"Chị em",cn:"姐妹",pinyin:"jiě mèi",exampleVN:"Hai chị em đi chợ, Chị em nói chuyện",exampleCN:"两姐妹去市场，姐妹聊天"},
/*========================================
Bài 4 - Số đếm 数字
========================================*/
{id:65,lesson:4,vn:"Không",cn:"零",pinyin:"líng",exampleVN:"Tiền không đồng, Số không đứng đầu",exampleCN:"零块钱，数字零开头"},
{id:66,lesson:4,vn:"Một",cn:"一",pinyin:"yī",exampleVN:"Một quả táo, Một quyển vở",exampleCN:"一个苹果，一本本子"},
{id:67,lesson:4,vn:"Hai",cn:"二",pinyin:"èr",exampleVN:"Hai cây bút, Hai người bạn",exampleCN:"两支笔，两个朋友"},
{id:68,lesson:4,vn:"Ba",cn:"三",pinyin:"sān",exampleVN:"Ba cái ghế, Ba ngày nghỉ",exampleCN:"三把椅子，三天假期"},
{id:69,lesson:4,vn:"Bốn",cn:"四",pinyin:"sì",exampleVN:"Bốn bát cơm, Bốn mùa trong năm",exampleCN:"四碗米饭，一年四季"},
{id:70,lesson:4,vn:"Năm",cn:"五",pinyin:"wǔ",exampleVN:"Năm quyển sách, Năm phút đi bộ",exampleCN:"五本书，五分钟步行"},
{id:71,lesson:4,vn:"Sáu",cn:"六",pinyin:"liù",exampleVN:"Sáu quả cam, Sáu học sinh",exampleCN:"六个橙子，六名学生"},
{id:72,lesson:vn:"Bảy",cn:"七",pinyin:"qī",exampleVN:"Bảy con chim, Bảy giờ sáng",exampleCN:"七只小鸟，早上七点"},
{id:73,lesson:4,vn:"Tám",cn:"八",pinyin:"bā",exampleVN:"Tám cái ly, Tám tuổi em",exampleCN:"八个杯子，弟弟八岁"},
{id:74,lesson:4,vn:"Chín",cn:"九",pinyin:"Chín cái bóng, Chín giờ tối",exampleCN:"九个皮球，晚上九点"},
{id:75,lesson:4,vn:"Mười",cn:"十",pinyin:"shí",exampleVN:"Mười cái bánh, Mười câu hỏi",exampleCN:"十个面包，十个问题"},
{id:76,lesson:4,vn:"Mười một",cn:"十一",pinyin:"shí yī",exampleVN:"Mười một bông hoa, Mười một bạn cùng lớp",exampleCN:"十一朵花，十一位同班同学"},
{id:77,lesson:4,vn:"Hai mươi",cn:"二十",pinyin:"èr shí",exampleVN:"Hai mươi nghìn đồng, Hai mươi tuổi anh",exampleCN:"两万越南盾，哥哥二十岁"},
{id:78,lesson:4,vn:"Một trăm",cn:"一百",pinyin:"yì bǎi",exampleVN:"Một trăm trang sách, Một trăm người xem",exampleCN:"一百页书，一百位观众"},
{id:79,lesson:4,vn:"Số",cn:"数字",pinyin:"shù zì",exampleVN:"Đọc các số, Viết số ra giấy",exampleCN:"朗读数字，把数字写在纸上"},
/*========================================
Bài 5 - Thời gian 时间
========================================*/
{id:80,lesson:5,vn:"Hôm nay",cn:"今天",pinyin:"jīn tiān",exampleVN:"Hôm nay đi công viên, Hôm nay học ngữ pháp",exampleCN:"今天去公园，今天学语法"},
{id:81,lesson:5,vn:"Hôm qua",cn:"昨天",pinyin:"zuó tiān",exampleVN:"Hôm qua mưa to, Hôm qua xem phim",exampleCN:"昨天下大雨，昨天看电影"},
{id:82,lesson:5,vn:"Ngày mai",cn:"明天",pinyin:"míng tiān",exampleVN:"Ngày mai đi chợ, Ngày mai gặp bạn cũ",exampleCN:"明天去市场，明天见老朋友"},
{id:83,lesson:5,vn:"Buổi sáng",cn:"早上",pinyin:"zǎo shang",exampleVN:"Buổi sáng uống trà, Buổi sáng tập thể dục",exampleCN:"早上喝茶，早上锻炼身体"},
{id:84,lesson:5,vn:"Buổi trưa",cn:"中午",pinyin:"zhōng wǔ",exampleVN:"Buổi trưa ăn phở, Buổi trưa nghỉ ngơi",exampleCN:"中午吃河，中午休息"},
{id:85,lesson:5,vn:"Buổi chiều",cn:"下午",pinyin:"xià wǔ",exampleVN:"Buổi chiều đi chơi, Buổi chiều học từ vựng",exampleCN:"下午出去玩，下午背单词"},
{id:86,lesson:vn:"Buổi tối",cn:"晚上",pinyin:"wǎn shang",exampleVN:"Buổi tối xem tivi, Buổi tối làm bài tập",exampleCN:"晚上看电视，晚上写作业"},
{id:87,lesson:5,vn:"Đêm",cn:"夜晚",pinyin:"yè wǎn",exampleVN:"Đêm yên tĩnh, Đêm ngủ sớm",exampleCN:"夜晚安静，夜晚早睡"},
{id:88,lesson:5,vn:"Thứ hai",cn:"星期一",pinyin:"xīng qī yī",exampleVN:"Thứ hai đi làm, Thứ hai học bài mới",exampleCN:"周一上班，周一学新课"},
{id:89,lesson:5,vn:"Thứ ba",cn:"星期二",pinyin:"xīng qī èr",exampleVN:"Thứ ba mua đồ, Thứ ba gặp đồng nghiệp",exampleCN:"周二采购，周二见同事"},
{id:90,lesson:5,vn:"Thứ tư",cn:"星期三",pinyin:"xīng qī sān",exampleVN:"Thứ tư đọc sách, Thứ tư uống cà phê",exampleCN:"周三看书，周三喝咖啡"},
{id:91,lesson:5,vn:"Thứ năm",cn:"星期四",pinyin:"xīng qī sì",exampleVN:"Thứ năm tập thể thao, Thứ năm gọi bạn",exampleCN:"周四运动，周四约朋友"},
{id:92,lesson:5,vn:"Thứ sáu",cn:"星期五",pinyin:"xīng qī wǔ",exampleVN:"Thứ sáu về quê, Thứ sáu ăn tối ngoài",exampleCN:"周五回乡，周五在外吃饭"},
{id:93,lesson:5,vn:"Thứ bảy",cn:"星期六",pinyin:"xīng qī liù",exampleVN:"Thứ bảy đi chơi xa, Thứ bảy dọn nhà",exampleCN:"周六远足，周六打扫屋子"},
{id:94,lesson:5,vn:"Chủ nhật",cn:"星期天",pinyin:"xīng qī tiān",exampleVN:"Chủ nhật nghỉ hoàn toàn, Chủ nhật đoàn tụ gia đình",exampleCN:"周日全天休息，周日全家团聚"},
/*========================================
Bài 6 - Màu sắc 颜色
========================================*/
{id:95,lesson:6,vn:"Màu đỏ",cn:"红色",pinyin:"hóng sè",exampleVN:"Áo màu đỏ, Hoa màu đỏ rất đẹp",exampleCN:"红色上衣，红花很好看"},
{id:96,lesson:6,vn:"Màu xanh dương",cn:"蓝色",pinyin:"lán sè",exampleVN:"Bầu trời xanh dương, Quần xanh dương",exampleCN:"蓝天，蓝色裤子"},
{id:97,lesson:6,vn:"Màu xanh lá",cn:"绿色",pinyin:"lǜ sè",exampleVN:"Lá cây xanh lá, Cỏ xanh lá",exampleCN:"绿叶，青草"},
{id:98,lesson:vn:"Màu vàng",cn:"黄色",pinyin:"huáng sè",exampleVN:"Hoa vàng, Màu vàng nắng",exampleCN:"黄花，阳光黄色"},
{id:99,lesson:6,vn:"Màu trắng",cn:"白色",pinyin:"bái sè",exampleVN:"Mèo trắng, Giày trắng sạch",exampleCN:"白猫，干净白鞋"},
{id:100,lesson:6,vn:"Màu đen",cn:"黑色",pinyin:"hēi sè",exampleVN:"Xe đen, Quần jean đen",exampleCN:"黑色汽车，黑牛仔裤"},
{id:101,lesson:6,vn:"Màu hồng",cn:"粉色",pinyin:"fěn sè",exampleVN:"Váy hồng, Hoa hồng nhỏ",exampleCN:"粉色裙子，小粉花"},
{id:102,lesson:6,vn:"Màu tím",cn:"紫色",pinyin:"zǐ sè",exampleVN:"Hoa tím, Túi xách tím",exampleCN:"紫花，紫色包包"},
{id:103,lesson:6,vn:"Màu cam",cn:"橙色",pinyin:"chéng sè",exampleVN:"Trái cam, Áo màu cam",exampleCN:"橙子，橙色T恤"},
{id:104,lesson:vn:"Màu nâu",cn:"棕色",pinyin:"zōng sè",exampleVN:"Bàn gỗ nâu, Tóc nâu",exampleCN:"木棕桌子，棕色头发"},
{id:105,lesson:6,vn:"Màu xám",cn:"灰色",pinyin:"huī sè",exampleVN:"Voi xám, Áo khoác xám",exampleCN:"灰色大象，灰色外套"},
{id:106,lesson:6,vn:"Nhiều màu",cn:"彩色",pinyin:"cǎi sè",exampleVN:"Bức tranh nhiều màu, Bóng nhiều màu",exampleCN:"彩色图画，彩色皮球"},
{id:107,lesson:6,vn:"Đậm",cn:"深",pinyin:"shēn",exampleVN:"Xanh đậm, Đỏ đậm tối",exampleCN:"深蓝，深红暗色"},
{id:108,lesson:6,vn:"Nhạt",cn:"浅",pinyin:"qiǎn",exampleVN:"Hồng nhạt, Xanh nhạt mát",exampleCN:"浅粉，清爽浅蓝"},
{id:109,lesson:6,vn:"Màu",cn:"颜色",pinyin:"yán sè",exampleVN:"Bạn thích màu nào, Màu nào đẹp nhất",exampleCN:"你喜欢什么颜色，哪个最好看"},
/*========================================
Bài 7 - Thức ăn 食物（已删除重复块）
========================================*/
{id:110,lesson:7,vn:"Cơm",cn:"米饭",pinyin:"mǐ fàn",exampleVN:"Tôi ăn cơm trưa, Cơm trắng ngon",exampleCN:"我中午吃米饭，白米饭很香"},
{id:111,lesson:7,vn:"Phở",cn:"河粉",pinyin:"hé fěn",exampleVN:"Sáng ăn phở bò, Phở nổi tiếng Việt Nam",exampleCN:"早上吃牛肉河粉，越南知名河粉"},
{id:112,lesson:7,vn:"Bánh mì",cn:"法棍面包",pinyin:"fǎ gùn miàn bāo",exampleVN:"Bánh mì thịt, Bánh mì sáng nhanh",exampleCN:"肉夹面包，早餐速食面包"},
{id:113,lesson:7,vn:"Bún",cn:"米线",pinyin:"mǐ xiàn",exampleVN:"Bún chả Hà Nội, Bún nước ngọt",exampleCN:"河内烤肉米线，清汤米线"},
{id:114,lesson:7,vn:"Mì",cn:"面条",pinyin:"miàn tiáo",exampleVN:"Mì gà, Mì nấu đơn giản",exampleCN:"鸡肉面，简易煮面"},
{id:115,lesson:vn:"Thịt",cn:"肉",pinyin:"ròu",exampleVN:"Thịt lợn, Thịt bò kho",exampleCN:"猪肉，炖牛肉"},
{id:116,lesson:7,vn:"Cá",cn:"鱼",pinyin:"yú",exampleVN:"Cá hấp, Cá chiên giòn",exampleCN:"蒸鱼，酥脆炸鱼"},
{id:117,lesson:7,vn:"Trứng",cn:"鸡蛋",pinyin:"jī dàn",exampleVN:"Trứng luộc, Trứng chiên sáng",exampleCN:"水煮蛋，早餐煎蛋"},
{id:118,lesson:7,vn:"Rau",cn:"蔬菜",pinyin:"shū cài",exampleVN:"Rau muống, Rau luộc thanh mát",exampleCN:"空心菜，清煮蔬菜"},
{id:119,lesson:7,vn:"Hoa quả",cn:"水果",pinyin:"shuǐ guǒ",exampleVN:"Ăn hoa quả trưa, Hoa quả tươi ngọt",exampleCN:"中午吃水果，新鲜甜水果"},
{id:120,lesson:7,vn:"Táo",cn:"苹果",pinyin:"píng guǒ",exampleVN:"Táo đỏ ngọt, Ăn một quả mỗi ngày",exampleCN:"红苹果很甜，每天吃一个"},
{id:121,lesson:7,vn:"Chuối",cn:"香蕉",pinyin:"xiāng jiāo",exampleVN:"Chuối chín mềm, Chuối cho bé ăn",exampleCN:"熟香蕉软糯，给小孩吃香蕉"},
{id:122,lesson:7,vn:"Cam",cn:"橙子",pinyin:"chéng zi",exampleVN:"Nước cam tươi, Quả cam nhiều nước",exampleCN:"鲜橙汁，多汁橙子"},
{id:123,lesson:7,vn:"Canh",cn:"汤",pinyin:"tāng",exampleVN:"Canh rau, Canh cá nấu tối",exampleCN:"蔬菜汤，晚餐鱼汤"},
{id:124,lesson:7,vn:"Món ăn",cn:"菜",pinyin:"cài",exampleVN:"Món ăn truyền thống, Món ăn gia đình",exampleCN:"传统菜肴，家常菜"},
/*========================================
Bài 8 - Đồ uống 饮料
========================================*/
{id:125,lesson:8,vn:"Nước lọc",cn:"白开水",pinyin:"bái kāi shuǐ",exampleVN:"Uống nước mỗi sáng, Nước giải khát tốt",exampleCN:"每天早上喝水，白开水解渴"},
{id:126,lesson:8,vn:"Trà",cn:"茶",pinyin:"chá",exampleVN:"Trà xanh, Trà nóng buổi sáng",exampleCN:"绿茶，早热茶"},
{id:127,lesson:vn:"Cà phê",cn:"咖啡",pinyin:"kā fēi",exampleVN:"Cà phê sữa, Cà phê đá mát",exampleCN:"牛奶咖啡，冰咖啡凉爽"},
{id:128,lesson:8,vn:"Nước cam",cn:"橙汁",pinyin:"chéng zhī",exampleVN:"Nước cam tươi, Uống trưa giải khát",exampleCN:"鲜橙汁，中午解渴喝"},
{id:129,lesson:8,vn:"Sữa",cn:"牛奶",pinyin:"niú nǎi",exampleVN:"Sữa cho trẻ, Sữa buổi tối",exampleCN:"给孩子牛奶，睡前牛奶"},
{id:130,lesson:8,vn:"Nước ngọt",cn:"汽水",pinyin:"qì shuǐ",exampleVN:"Nước ngọt có ga, Không uống nhiều",exampleCN:"碳酸汽水，不要多喝"},
{id:131,lesson:8,vn:"Nước ép táo",cn:"苹果汁",pinyin:"píng guǒ zhī",exampleVN:"Nước ép táo ngọt, Không đường thêm",exampleCN:"甜苹果汁，不加糖"},
{id:132,lesson:8,vn:"Trà sữa",cn:"奶茶",pinyin:"nǎi chá",exampleVN:"Trà sữa trân châu, Trà sữa chiều",exampleCN:"珍珠奶茶，午后奶茶"},
{id:133,lesson:8,vn:"Nước dừa",cn:"椰子水",pinyin:"yē zi shuǐ",exampleVN:"Nước dừa tươi, Giải nhiệt mùa hè",exampleCN:"新鲜椰汁，夏天解暑"},
{id:134,lesson:8,vn:"Rượu trái cây",cn:"果酒",pinyin:"guǒ jiǔ",exampleVN:"Không uống trẻ em, Rượu nhẹ cho người lớn",exampleCN:"小孩不能喝，成人低度果酒"},
{id:135,lesson:8,vn:"Nước chanh",cn:"柠檬水",pinyin:"níng méng shuǐ",exampleVN:"Nước chanh mát, Thêm ít đường",exampleCN:"清爽柠檬水，加少许糖"},
{id:136,lesson:8,vn:"Cacao",cn:"可可",pinyin:"kě kě",exampleVN:"Cacao nóng buổi tối, Cacao ngọt bé",exampleCN:"晚间热可可，小孩甜可可"},
{id:137,lesson:8,vn:"Đồ uống",cn:"饮品",pinyin:"yǐn pǐn",exampleVN:"Chọn đồ uống lành mạnh, Đồ uống mát ngày nắng",exampleCN:"选择健康饮品，晴天清凉饮料"},
/*========================================
Bài 9 - Mua sắm 购物
========================================*/
{id:140,lesson:9,vn:"Cửa hàng",cn:"商店",pinyin:"shāng diàn",exampleVN:"Cửa hàng quần áo, Cửa hàng tạp hóa",exampleCN:"服装店，杂货铺"},
{id:141,lesson:9,vn:"Siêu thị",cn:"超市",pinyin:"chāo shì",exampleVN:"Siêu thị lớn cuối tuần, Mua nhiều thứ ở siêu thị",exampleCN:"周末大型超市，超市采购多商品"},
{id:142,lesson:9,vn:"Chợ",cn:"市场",pinyin:"shì chǎng",exampleVN:"Chợ sáng rau tươi, Chợ đông người mỗi ngày",exampleCN:"早市新鲜蔬菜，市场每日人多"},
{id:143,lesson:9,vn:"Mua",cn:"买",pinyin:"mǎi",exampleVN:"Mua áo mới, Mua hoa cho mẹ",exampleCN:"买新衣服，给妈妈买花"},
{id:144,lesson:9,vn:"Bán",cn:"卖",pinyin:"mài",exampleVN:"Cửa hàng bán trái cây, Bán giá hợp lý",exampleCN:"店铺卖水果，售价合理"},
{id:145,lesson:9,vn:"Tiền",cn:"钱",pinyin:"qián",exampleVN:"Tiền mặt trong túi, Đếm tiền thanh toán",exampleCN:"口袋现金，数钱付款"},
{id:146,lesson:9,vn:"Giá",cn:"价格",pinyin:"jià gé",exampleVN:"Giá rẻ hàng chợ, Giá cao hàng hiệu",exampleCN:"市场低价，品牌高价"},
{id:147,lesson:9,vn:"Bao nhiêu tiền?",cn:"多少钱？",pinyin:"duō shǎo qián",exampleVN:"Áo này bao nhiêu, Cam bao nhiêu tiền một cân",exampleCN:"这件衣服多少钱，橙子一斤多少钱"},
{id:148,lesson:9,vn:"Đắt",cn:"贵",pinyin:"guì",exampleVN:"Điện thoại rất đắt, Váy hiệu đắt tiền",exampleCN:"手机很贵，品牌裙子昂贵"},
{id:149,lesson:9,vn:"Rẻ",cn:"便宜",pinyin:"pián yi",exampleVN:"Bút rẻ tiền, Rau ở chợ rất rẻ",exampleCN:"笔很便宜，市场蔬菜廉价"},
{id:150,lesson:9,vn:"Hóa đơn",cn:"发票",pinyin:"fā piào",exampleVN:"Xin hóa đơn mua đồ, Lưu hóa đơn bảo hành",exampleCN:"购物要发票，留存发票保修"},
{id:151,lesson:9,vn:"Tiền mặt",cn:"现金",pinyin:"xiàn jīn",exampleVN:"Trả tiền mặt, Không mang thẻ hôm nay",exampleCN:"付现金，今天没带卡"},
{id:152,lesson:9,vn:"Thẻ ngân hàng",cn:"银行卡",pinyin:"yín háng kǎ",exampleVN:"Thanh toán thẻ, Thẻ an toàn hơn tiền",exampleCN:"刷卡支付，卡比现金安全"},
{id:153,lesson:9,vn:"Thanh toán",cn:"付款",pinyin:"fù kuǎn",exampleVN:"Đến quầy thanh toán, Thanh toán xong rời",exampleCN:"到收银台付款，付完离开"},
{id:154,lesson:9,vn:"Khách hàng",cn:"顾客",pinyin:"gù kè",exampleVN:"Khách hàng chọn hàng, Nhân viên hỗ trợ khách",exampleCN:"顾客挑选商品，店员协助顾客"},
/*========================================
Bài 10 - Giao thông 交通
========================================*/
{id:155,lesson:10,vn:"Xe đạp",cn:"自行车",pinyin:"zì xíng chē",exampleVN:"Đi xe đạp đi học, Xe đạp tiết kiệm",exampleCN:"骑车上学，自行车省钱"},
{id:156,lesson:10,vn:"Xe máy",cn:"摩托车",pinyin:"mó tuō chē",exampleVN:"Người Việt hay đi xe máy, Xe máy nhanh phố",exampleCN:"越南人常骑摩托，街道摩托快捷"},
{id:157,lesson:10,vn:"Ô tô",cn:"汽车",pinyin:"qì chē",exampleVN:"Ô tô gia đình, Ô tô đi xa mưa",exampleCN:"家用轿车，雨天远行汽车"},
{id:158,lesson:10,vn:"Xe buýt",cn:"公交车",pinyin:"gōng jiāo chē",exampleVN:"Xe buýt giá rẻ, Đi buýt mỗi sáng",exampleCN:"公交票价便宜，每天坐公交"},
{id:159,lesson:10,vn:"Tàu hỏa",cn:"火车",pinyin:"huǒ chē",exampleVN:"Tàu hỏa đi tỉnh, Ngồi tàu xem phong cảnh",exampleCN:"坐火车出省，火车看风景"},
{id:160,lesson:10,vn:"Máy bay",cn:"飞机",pinyin:"fēi jī",exampleVN:"Máy bay ra nước ngoài, Bay nhanh nhất",exampleCN:"飞机出国，速度最快"},
{id:161,lesson:vn:"Tàu thủy",cn:"轮船",pinyin:"lún chuán",exampleVN:"Tàu thủy sông, Đi tàu du lịch sông nước",exampleCN:"内河轮船，水上游船"},
{id:162,lesson:10,vn:"Taxi",cn:"出租车",pinyin:"chū zū chē",exampleVN:"Gọi taxi sân bay, Taxi tiện nhanh",exampleCN:"机场打车，出租便捷"},
{id:163,lesson:10,vn:"Đường",cn:"路",pinyin:"lù",exampleVN:"Đường rộng thành phố, Đường nhỏ làng",exampleCN:"城市大路，乡村小路"},
{id:164,lesson:10,vn:"Ngã tư",cn:"十字路口",pinyin:"shí zì lù kǒu",exampleVN:"Dừng ngã tư đèn đỏ, Rẽ phải ngã tư",exampleCN:"红灯路口停下，十字路口右转"},
{id:165,lesson:10,vn:"Đèn giao thông",cn:"红绿灯",pinyin:"hóng lǜ dēng",exampleVN:"Đèn đỏ dừng, Đèn xanh đi tiếp",exampleCN:"红灯停，绿灯行"},
{id:166,lesson:10,vn:"Bến xe",cn:"车站",pinyin:"chē zhàn",exampleVN:"Chờ xe tại bến xe, Bến xe đông giờ cao điểm",exampleCN:"车站等车，高峰车站人多"},
{id:167,lesson:10,vn:"Nhà ga",cn:"火车站",pinyin:"huǒ chē zhàn",exampleVN:"Nhà ga lớn trung tâm, Mua vé tại nhà ga",exampleCN:"市中心大火车站，车站买票"},
{id:168,lesson:10,vn:"Đi bộ",cn:"步行",pinyin:"bù xíng",exampleVN:"Đi bộ công viên gần, Đi bộ thư giãn",exampleCN:"近公园步行，散步放松"},
{id:169,lesson:10,vn:"Đi bằng",cn:"乘坐",pinyin:"chéng zuò",exampleVN:"Đi bằng xe buýt, Đi bằng máy bay ra nước ngoài",exampleCN:"坐公交，坐飞机出国"},
/*========================================
Bài 11 - Nghề nghiệp 职业
========================================*/
{id:170,lesson:11,vn:"Nghề nghiệp",cn:"职业",pinyin:"zhí yè",exampleVN:"Mỗi người có nghề, Nghề mình yêu thích",exampleCN:"每个人有工作，自己热爱的职业"},
{id:171,lesson:11,vn:"Giáo viên",cn:"老师",pinyin:"lǎo shī",exampleVN:"Giáo viên dạy tiếng Việt, Giáo viên nhiệt tình",exampleCN:"越南语老师，热情教师"},
{id:172,lesson:vn:"Học sinh",cn:"学生",pinyin:"xué sheng",exampleVN:"Học sinh chăm chỉ, Học sinh hỏi bài thầy",exampleCN:"勤奋学生，学生问老师问题"},
{id:173,lesson:11,vn:"Sinh viên",cn:"大学生",pinyin:"dà xué shēng",exampleVN:"Sinh viên đại học, Sinh viên thư viện học",exampleCN:"大学生，图书馆学习"},
{id:174,lesson:11,vn:"Bác sĩ",cn:"医生",pinyin:"yī shēng",exampleVN:"Bác sĩ khám bệnh, Bác sĩ chăm người bệnh",exampleCN:"医生问诊，医生照顾病人"},
{id:175,lesson:11,vn:"Y tá",cn:"护士",pinyin:"hù shi",exampleVN:"Y tá cho thuốc, Y tá đo nhiệt độ",exampleCN:"护士发药，护士量体温"},
{id:176,lesson:11,vn:"Kỹ sư",cn:"工程师",pinyin:"gōng chéng shī",exampleVN:"Kỹ sư xây dựng, Kỹ sư máy tính",exampleCN:"建筑工程师，计算机工程师"},
{id:177,lesson:11,vn:"Công nhân",cn:"工人",pinyin:"gōng rén",exampleVN:"Công nhân nhà máy, Công nhân làm ca",exampleCN:"工厂工人，轮班工人"},
{id:178,lesson:11,vn:"Nhân viên",cn:"职员",pinyin:"zhí yuán",exampleVN:"Nhân viên văn phòng, Nhân viên ngân hàng",exampleCN:"办公室职员，银行职员"},
{id:179,lesson:11,vn:"Đầu bếp",cn:"厨师",pinyin:"chú shī",exampleVN:"Đầu bếp nhà hàng, Đầu bếp nấu ngon",exampleCN:"餐厅厨师，厨艺好的厨师"},
{id:180,lesson:11,vn:"Nông dân",cn:"农民",pinyin:"nóng mín",exampleVN:"Nông dân trồng lúa, Nông dân chăn nuôi",exampleCN:"农民种稻，农民养殖"},
{id:181,lesson:vn:"Cảnh sát",cn:"警察",pinyin:"jǐng chá",exampleVN:"Cảnh sát giữ trật tự, Cảnh sát giúp dân",exampleCN:"警察维持秩序，警察帮助民众"},
{id:182,lesson:11,vn:"Lái xe",cn:"司机",pinyin:"sī jī",exampleVN:"Lái xe taxi, Lái xe buýt tuyến",exampleCN:"出租车司机，公交司机"},
{id:183,lesson:11,vn:"Doanh nhân",cn:"商人",pinyin:"shāng rén",exampleVN:"Doanh nhân mở cửa hàng, Doanh nhân giao dịch",exampleCN:"开店商人，商务商人"},
{id:184,lesson:11,vn:"Làm việc",cn:"工作",pinyin:"gōng zuò",exampleVN:"Tôi làm việc tám giờ, Làm việc vui vẻ",exampleCN:"我工作八小时，愉快工作"},
/*========================================
Bài 12 - Cơ thể 身体
========================================*/
{id:185,lesson:12,vn:"Đầu",cn:"头",pinyin:"tóu",exampleVN:"Đau đầu hôm nay, Đầu tôi to tròn",exampleCN:"今天头疼，我的头圆圆的"},
{id:186,lesson:12,vn:"Tóc",cn:"头发",pinyin:"tóu fa",exampleVN:"Tóc đen dài, Cắt tóc tháng này",exampleCN:"乌黑长发，本月剪发"},
{id:187,lesson:12,vn:"Mắt",cn:"眼睛",pinyin:"yǎn jing",exampleVN:"Mắt to sáng, Nhìn bằng hai mắt",exampleCN:"大眼睛明亮，用双眼看"},
{id:188,lesson:vn:"Tai",cn:"耳朵",pinyin:"ěr duo",exampleVN:"Tai nghe nhạc, Tai nghe lời thầy",exampleCN:"耳朵听歌，耳朵听老师讲课"},
{id:189,lesson:12,vn:"Mũi",cn:"鼻子",pinyin:"bí zi",exampleVN:"Mũi ngửi hoa, Mũi hơi nghẹt",exampleCN:"鼻子闻花香，鼻子有点堵"},
{id:190,lesson:12,vn:"Miệng",cn:"嘴巴",pinyin:"zuǐ ba",exampleVN:"Miệng ăn cơm, Miệng nói chuyện",exampleCN:"嘴巴吃饭，嘴巴聊天"},
{id:191,lesson:12,vn:"Răng",cn:"牙齿",pinyin:"yá chǐ",exampleVN:"Đánh răng sáng tối, Răng trắng sạch",exampleCN:"早晚刷牙，牙齿洁白"},
{id:192,lesson:12,vn:"Lưỡi",cn:"舌头",pinyin:"shé tou",exampleVN:"Lưỡi nếm vị ngọt, Lưỡi phát âm",exampleCN:"舌头尝甜味，舌头发音"},
{id:193,lesson:12,vn:"Cổ",cn:"脖子",pinyin:"bó zi",exampleVN:"Cổ đeo khăn, Cổ hơi mỏi ngồi lâu",exampleCN:"脖子戴围巾，久坐脖子酸"},
{id:194,lesson:12,vn:"Vai",cn:"肩膀",pinyin:"jiān bǎng",exampleVN:"Vai nặng ba lô, Vai khỏe mạnh",exampleCN:"书包压肩，肩膀结实"},
{id:195,lesson:12,vn:"Tay",cn:"手",pinyin:"shǒu",exampleVN:"Tay viết chữ, Rửa tay ăn cơm",exampleCN:"手写文字，饭前洗手"},
{id:196,lesson:12,vn:"Ngón tay",cn:"手指",pinyin:"shǒu zhǐ",exampleVN:"Ngón tay đeo nhẫn, Ngón tay chạm màn hình",exampleCN:"手指戴戒指，手指触屏"},
{id:197,lesson:12,vn:"Chân",cn:"脚",pinyin:"jiǎo",exampleVN:"Chân đi bộ, Chân mỏi chạy",exampleCN:"脚走路，跑步脚累"},
{id:198,lesson:12,vn:"Đầu gối",cn:"膝盖",pinyin:"xī gài",exampleVN:"Đầu gối ngồi lâu đau, Đầu gối trầy xước",exampleCN:"久坐膝盖疼，膝盖擦伤"},
{id:199,lesson:12,vn:"Cơ thể",cn:"身体",pinyin:"shēn tǐ",exampleVN:"Giữ gìn cơ thể khỏe, Tập thể dục cơ thể",exampleCN:"保持身体健康，锻炼身体"},
/*========================================
Bài 13 - Quần áo 衣服
========================================*/
{id:200,lesson:13,vn:"Quần áo",cn:"衣服",pinyin:"yī fu",exampleVN:"Mua quần áo mùa mới, Giặt quần áo bẩn",exampleCN:"买新款衣服，洗脏衣服"},
{id:201,lesson:13,vn:"Áo",cn:"上衣",pinyin:"shàng yī",exampleVN:"Áo mát mùa hè, Áo dày mùa đông",exampleCN:"夏季薄上衣，冬季厚上衣"},
{id:202,lesson:13,vn:"Quần",cn:"裤子",pinyin:"kù zi",exampleVN:"Quần jean đi chơi, Quần kaki làm việc",exampleCN:"休闲牛仔裤，工作卡其裤"},
{id:203,lesson:13,vn:"Váy",cn:"裙子",pinyin:"qún zi",exampleVN:"Váy ngắn mùa hè, Váy dài dự tiệc",exampleCN:"夏季短裙，宴会长裙"},
{id:204,lesson:vn:"Áo sơ mi",cn:"衬衫",pinyin:"chèn shan",exampleVN:"Áo sơ mi trắng đi làm, Áo sơ mi tay dài",exampleCN:"上班白衬衫，长袖衬衫"},
{id:205,lesson:13,vn:"Áo thun",cn:"T恤",pinyin:"T xù",exampleVN:"Áo thun in hình, Áo thun đơn giản",exampleCN:"印花T恤，简约T恤"},
{id:206,lesson:13,vn:"Áo khoác",cn:"外套",pinyin:"wài tào",exampleVN:"Áo khoác gió, Áo khoác len lạnh",exampleCN:"防风外套，冷天毛衣外套"},
{id:207,lesson:13,vn:"Giày",cn:"鞋子",pinyin:"xié zi",exampleVN:"Giày thể thao chạy, Giày da dự lễ",exampleCN:"跑鞋，正装皮鞋"},
{id:208,lesson:13,vn:"Dép",cn:"拖鞋",pinyin:"tuō xié",exampleVN:"Dép ở nhà, Dép nhựa mưa",exampleCN:"居家拖鞋，雨天塑料拖"},
{id:209,lesson:13,vn:"Mũ",cn:"帽子",pinyin:"mào zi",exampleVN:"Mũ nắng ngoài trời, Mũ len đông",exampleCN:"户外遮阳帽，冬天毛线帽"},
{id:210,lesson:13,vn:"Tất",cn:"袜子",pinyin:"wà zi",exampleVN:"Tất trắng với giày, Tất dày lạnh",exampleCN:"配鞋白袜，冷天厚袜"},
{id:211,lesson:13,vn:"Túi xách",cn:"包",pinyin:"bāo",exampleVN:"Túi xách nữ, Túi đeo chéo đi chơi",exampleCN:"女包，休闲斜挎包"},
{id:212,lesson:13,vn:"Thắt lưng",cn:"皮带",pinyin:"pí dài",exampleVN:"Thắt lưng nâu với quần, Thắt lưng da đen",exampleCN:"配裤子棕皮带，黑皮腰带"},
{id:213,lesson:13,vn:"Mặc",cn:"穿",pinyin:"chuān",exampleVN:"Mặc áo mới hôm nay, Mặc dép ở nhà",exampleCN:"今天穿新衣，在家穿拖鞋"},
{id:214,lesson:13,vn:"Thử",cn:"试",pinyin:"shì",exampleVN:"Thử váy trong cửa hàng, Thử giày trước mua",exampleCN:"店内试裙子，买前试鞋"},
/*========================================
Bài 14 - Thời tiết 天气
========================================*/
{id:215,lesson:14,vn:"Thời tiết",cn:"天气",pinyin:"tiān qì",exampleVN:"Xem dự báo thời tiết, Thời tiết ảnh hưởng đi chơi",exampleCN:"看天气预报，天气影响出行"},
{id:216,lesson:14,vn:"Nắng",cn:"晴天",pinyin:"qíng tiān",exampleVN:"Trời nắng đi công viên, Nắng cần ô che",exampleCN:"晴天逛公园，晴天要遮阳伞"},
{id:217,lesson:14,vn:"Mưa",cn:"下雨",pinyin:"xià yǔ",exampleVN:"Mưa to mang ô, Mưa nhỏ không cần áo mưa",exampleCN:"大雨带伞，小雨不用雨衣"},
{id:218,lesson:14,vn:"Gió",cn:"风",pinyin:"fēng",exampleVN:"Gió nhẹ dễ chịu, Gió lớn đóng cửa sổ",exampleCN:"微风舒适，大风关窗"},
{id:219,lesson:14,vn:"Mây",cn:"云",pinyin:"yún",exampleVN:"Mây trắng bầu trời, Mây đen sắp mưa",exampleCN:"天上白云，乌云要下雨"},
{id:220,lesson:14,vn:"Nóng",cn:"热",pinyin:"rè",exampleVN:"Mùa hè rất nóng, Nóng uống nhiều nước",exampleCN:"夏天很热，热要多喝水"},
{id:221,lesson:14,vn:"Lạnh",cn:"冷",pinyin:"lěng",exampleVN:"Sáng sớm lạnh, Lạnh mặc áo khoác",exampleCN:"清晨寒冷，冷穿外套"},
{id:222,lesson:vn:"Mát",cn:"凉快",pinyin:"liáng kuai",exampleVN:"Buổi tối mát mẻ, Mát đi dạo ngoài",exampleCN:"傍晚凉爽，凉快外出散步"},
{id:223,lesson:14,vn:"Ấm",cn:"暖和",pinyin:"nuǎn huo",exampleVN:"Mùa xuân thời tiết ấm, Ấm không cần áo dày",exampleCN:"春天暖和，不用厚外套"},
{id:224,lesson:14,vn:"Bão",cn:"台风",pinyin:"tái fēng",exampleVN:"Khi có bão ở nhà, Bão đóng chặt cửa",exampleCN:"台风居家，紧闭门窗"},
{id:225,lesson:14,vn:"Sấm",cn:"打雷",pinyin:"dǎ léi",exampleVN:"Trời sấm tối, Sấm không ra ngoài",exampleCN:"夜晚打雷，打雷别出门"},
{id:226,lesson:14,vn:"Chớp",cn:"闪电",pinyin:"shǎn diàn",exampleVN:"Chớp sáng trời, Chớp cắm điện tắt",exampleCN:"天空闪电，闪电断电"},
{id:227,lesson:14,vn:"Ô",cn:"雨伞",pinyin:"yǔ sǎn",exampleVN:"Mang ô đi chợ, Ô chống nắng cũng được",exampleCN:"带伞去市场，伞也遮阳"},
{id:228,lesson:14,vn:"Dự báo thời tiết",cn:"天气预报",pinyin:"tiān qì yù bào",exampleVN:"Xem dự báo mỗi sáng, Dự báo biết đi chơi hay không",exampleCN:"每天看预报，预报判断出行"},
{id:229,lesson:14,vn:"Nhiệt độ",cn:"气温",pinyin:"qì wēn",exampleVN:"Nhiệt độ 30 độ nóng, Nhiệt độ 18 độ mát",exampleCN:"三十度炎热，十八度凉爽"},
/*========================================
Bài 15 - Nhà cửa 房子
========================================*/
{id:230,lesson:15,vn:"Nhà",cn:"房子",pinyin:"fáng zi",exampleVN:"Nhà nhỏ gia đình, Nhà cao thành phố",exampleCN:"家庭小屋，城市高楼"},
{id:231,lesson:15,vn:"Căn hộ",cn:"公寓",pinyin:"gōng yù",exampleVN:"Căn hộ tầng năm, Căn hộ đầy đủ đồ đạc",exampleCN:"五楼公寓，家具齐全公寓"},
{id:232,lesson:15,vn:"Phòng khách",cn:"客厅",pinyin:"kè tī",exampleVN:"Khách ngồi phòng khách, Phòng khách rộng rãi",exampleCN:"客人坐客厅，客厅宽敞"},
{id:233,lesson:15,vn:"Phòng ngủ",cn:"卧室",pinyin:"wò shì",exampleVN:"Ngủ phòng ngủ, Phòng ngủ yên tĩnh",exampleCN:"卧室睡觉，卧室安静"},
{id:234,lesson:15,vn:"Nhà bếp",cn:"厨房",pinyin:"chú fáng",exampleVN:"Nấu ăn nhà bếp, Nhà bếp sạch sẽ",exampleCN:"厨房做饭，厨房干净"},
{id:235,lesson:15,vn:"Phòng tắm",cn:"浴室",pinyin:"yù shì",exampleVN:"Tắm phòng tắm, Phòng tắm có nước nóng",exampleCN:"浴室洗澡，浴室有热水"},
{id:236,lesson:15,vn:"Cửa",cn:"门",pinyin:"mén",exampleVN:"Đóng cửa ra ngoài, Mở cửa đón khách",exampleCN:"出门关门，开门迎客"},
{id:237,lesson:15,vn:"Cửa sổ",cn:"窗户",pinyin:"chuāng hu",exampleVN:"Mở cửa sổ gió mát, Đóng cửa sổ mưa",exampleCN:"开窗通风，下雨关窗"},
{id:238,lesson:15,vn:"Bàn",cn:"桌子",pinyin:"zhuō zi",exampleVN:"Bàn ăn nhà bếp, Bàn học phòng ngủ",exampleCN:"厨房餐桌，卧室书桌"},
{id:239,lesson:15,vn:"Ghế",cn:"椅子",pinyin:"yǐ zi",exampleVN:"Ghế sofa phòng khách, Ghế gỗ ăn cơm",exampleCN:"客厅沙发椅，木餐椅"},
{id:240,lesson:15,vn:"Giường",cn:"床",pinyin:"chuáng",exampleVN:"Giường lớn đôi, Giường nhỏ trẻ em",exampleCN:"双人床，儿童小床"},
{id:241,lesson:15,vn:"Tủ",cn:"柜子",pinyin:"guì zi",exampleVN:"Tủ quần áo, Tủ sách phòng khách",exampleCN:"衣柜，客厅书柜"},
{id:242,lesson:15,vn:"Tivi",cn:"电视",pinyin:"diàn shì",exampleVN:"Xem tivi tối, Tivi màn hình rộng",exampleCN:"晚上看电视，大屏电视"},
{id:243,lesson:15,vn:"Quạt",cn:"风扇",pinyin:"fēng shàn",exampleVN:"Bật quây trời nóng, Tắt quây ngủ",exampleCN:"热开风扇，睡觉关风扇"},
{id:244,lesson:15,vn:"Điều hòa",cn:"空调",pinyin:"kōng tiáo",exampleVN:"Điều hòa mát mùa hè, Điều hòa ấm đông",exampleCN:"夏季制冷，冬季制热"},
/*========================================
Bài 16 - Thành phố 城市
========================================*/
{id:245,lesson:16,vn:"Thành phố",cn:"城市",pinyin:"chéng shì",exampleVN:"Thành phố đông người, Thành phố nhiều cửa hàng",exampleCN:"城市人多，城市商铺多"},
{id:246,lesson:16,vn:"Làng",cn:"村庄",pinyin:"cūn zhuāng",exampleVN:"Làng yên tĩnh, Làng trồng rau nhiều",exampleCN:"村庄安静，村庄种菜多"},
{id:247,lesson:16,vn:"Đường",cn:"马路",pinyin:"mǎ lù",exampleVN:"Đường lớn trung tâm, Đường nhỏ trong làng",exampleCN:"市中心大道，村内小路"},
{id:248,lesson:16,vn:"Công viên",cn:"公园",pinyin:"gōng yuán",exampleVN:"Công viên có cây xanh, Đi công viên chiều",exampleCN:"公园绿树，下午逛公园"},
{id:249,lesson:16,vn:"Trường học",cn:"学校",pinyin:"xué xiào",exampleVN:"Trường học gần nhà, Trường học rộng lớn",exampleCN:"学校离家近，校园广阔"},
{id:250,lesson:16,vn:"Bệnh viện",cn:"医院",pinyin:"yī yuàn",exampleVN:"Bệnh viện cấp cứu, Bệnh viện gần khu dân cư",exampleCN:"急诊医院，居民区医院"},
{id:251,lesson:16,vn:"Ngân hàng",cn:"银行",pinyin:"yín háng",exampleVN:"Đến ngân hàng rút tiền, Ngân hàng mở sáng 8h",exampleCN:"去银行取钱，银行早八点营业"},
{id:252,lesson:16,vn:"Bưu điện",cn:"邮局",pinyin:"yóu jú",exampleVN:"Gửi thư bưu điện, Mua tem tại bưu điện",exampleCN:"邮局寄信，邮局买邮票"},
{id:253,lesson:16,vn:"Nhà hàng",cn:"餐厅",pinyin:"cān tī",exampleVN:"Nhà hàng món Việt, Nhà hàng đồ nước ngoài",exampleCN:"越南菜餐厅，外国料理店"},
{id:254,lesson:16,vn:"Khách sạn",cn:"酒店",pinyin:"jiǔ diàn",exampleVN:"Khách sạn trung tâm, Khách sạn giá rẻ ven đường",exampleCN:"市中心酒店，路边平价旅店"},
{id:255,lesson:16,vn:"Siêu thị",cn:"超市",pinyin:"chāo shì",exampleVN:"Siêu thị hàng đủ loại, Siêu thị cuối tuần đông",exampleCN:"超市商品齐全，周末超市人多"},
{id:256,lesson:16,vn:"Hiệu thuốc",cn:"药店",pinyin:"yào diàn",exampleVN:"Mua thuốc hiệu thuốc, Hiệu thuốc mở cả tối",exampleCN:"药店买药，药店晚间营业"},
{id:257,lesson:16,vn:"Sân bay",cn:"机场",pinyin:"jī chǎng",exampleVN:"Sân bay lớn thành phố, Đến sân bay sớm bay",exampleCN:"城市大机场，赶飞机早到机场"},
{id:258,lesson:16,vn:"Cầu",cn:"桥",pinyin:"qiáo",exampleVN:"Cầu qua sông, Cầu lớn xe chạy",exampleCN:"跨河大桥，通车大桥"},
{id:259,lesson:16,vn:"Quảng trường",cn:"广场",pinyin:"guǎng chǎng",exampleVN:"Quảng trường trung tâm, Nhiều người quảng trường tối",exampleCN:"市中心广场
{id:259,lesson:16,vn:"Quảng trường",cn:"广场",pinyin:"guǎng chǎng",exampleVN:"Quảng trường trung tâm, Nhiều người quảng trường tối",exampleCN:"市中心广场，傍晚广场很多人"},
/*========================================
Bài 17 - Nhà hàng（餐厅）
========================================*/
{id:260,lesson:17,vn:"Nhà hàng",cn:"餐厅",pinyin:"cān tīng",exampleVN:"Chúng tôi ăn tối ở nhà, Nhà hàng món Việt rất ngon",exampleCN:"我们在餐厅吃晚饭，越南风味餐厅很好吃"},
{id:261,lesson:17,vn:"Bàn",cn:"桌子",pinyin:"zhuō zi",exampleVN:"Xin cho tôi bàn hai người, Bàn gần cửa sổ đẹp",exampleCN:"请给两人桌，靠窗桌子视野好"},
{id:262,lesson:17,vn:"Thực đơn",cn:"菜单",pinyin:"cài dān",exampleVN:"Xin xem thực đơn, Thực đơn có nhiều món ngon",exampleCN:"请给我菜单，菜单有很多好吃的菜"},
{id:263,lesson:17,vn:"Món ăn",cn:"菜品",pinyin:"cài",exampleVN:"Món phở nổi tiếng, Món rau thanh mát",exampleCN:"河粉是招牌菜，清爽素菜"},
{id:264,lesson:17,vn:"Đồ uống",cn:"饮料",pinyin:"yǐn liào",exampleVN:"Đồ uống trà đá, Đồ uống nước cam tươi",exampleCN:"冰茶饮品，鲜橙汁饮品"},
{id:265,lesson:17,vn:"Gọi món",cn:"点菜",pinyin:"diǎn cài",exampleVN:"Chúng tôi muốn gọi phở, Gọi thêm một đĩa rau",exampleCN:"我们想点河粉，再加一盘青菜"},
{id:266,lesson:17,vn:"Phục vụ",cn:"服务员",pinyin:"fú wù yuán",exampleVN:"Phục vụ nhiệt tình, Phục vụ mang đồ nhanh",exampleCN:"服务员很热情，上菜速度快"},
{id:267,lesson:17,vn:"Đũa",cn:"筷子",pinyin:"kuài zi",exampleVN:"Xin cho đôi đũa, Ăn cơm dùng đũa",exampleCN:"请给一双筷子，吃饭用筷子"},
{id:268,lesson:17,vn:"Thìa",cn:"勺子",pinyin:"sháo zi",exampleVN:"Thìa ăn canh, Thìa nhỏ cho trẻ",exampleCN:"喝汤勺子，儿童小勺"},
{id:269,lesson:17,vn:"Nĩa",cn:"叉子",pinyin:"chā zi",exampleVN:"Nĩa ăn thịt, Nĩa dùng đồ Tây",exampleCN:"吃肉叉子，西餐用叉"},
{id:270,lesson:17,vn:"Dao",cn:"刀",pinyin:"dāo",exampleVN:"Dao cắt thịt, Dao nhỏ an toàn",exampleCN:"切肉餐刀，小型安全餐刀"},
{id:271,lesson:17,vn:"Hóa đơn",cn:"账单",pinyin:"zhàng dān",exampleVN:"Xin tính tiền lấy hóa đơn, Hóa đơn ghi tổng tiền",exampleCN:"结账拿账单，账单记录总价"},
{id:272,lesson:17,vn:"Thanh toán",cn:"付款",pinyin:"fù kuǎn",exampleVN:"Tôi thanh toán thẻ, Thanh toán xong rời",exampleCN:"我刷卡付款，付完离开"},
{id:273,lesson:17,vn:"Ngon",cn:"好吃",pinyin:"hǎo chī",exampleVN:"Phở rất ngon, Món canh ngọt ngon",exampleCN:"河粉很好吃，汤清甜美味"},
{id:274,lesson:17,vn:"No",cn:"饱",pinyin:"bǎo",exampleVN:"Tôi ăn no rồi, Em cũng no bụng",exampleCN:"我吃饱了，小孩也吃饱了"},
/*========================================
Bài 18 - Bệnh viện（医院）
========================================*/
{id:275,lesson:18,vn:"Bệnh viện",cn:"医院",pinyin:"yī yuàn",exampleVN:"Tôi đến bệnh viện khám, Bệnh viện sạch sẽ yên tĩnh",exampleCN:"我去医院看病，医院干净安静"},
{id:276,lesson:18,vn:"Bác sĩ",cn:"医生",pinyin:"yī shēng",exampleVN:"Bác sĩ khám cẩn thận, Bác sĩ giải thích rõ",exampleCN:"医生仔细问诊，讲解清晰"},
{id:277,lesson:18,vn:"Y tá",cn:"护士",pinyin:"hù shi",exampleVN:"Y tá đo nhiệt độ, Y tá đưa thuốc",exampleCN:"护士量体温，护士发药"},
{id:278,lesson:18,vn:"Bệnh nhân",cn:"病人",pinyin:"bìng rén",exampleVN:"Bệnh nhân nghỉ giường, Bệnh nhân uống thuốc đúng giờ",exampleCN:"病人卧床休息，病人按时吃药"},
{id:279,lesson:vn:"Thuốc",cn:"药",pinyin:"yào",exampleVN:"Thuốc cảm, Thuốc đau đầu",exampleCN:"感冒药，头疼药"},
{id:280,lesson:18,vn:"Đau",cn:"疼",pinyin:"téng",exampleVN:"Tôi bị đau họng, Đau bụng khó chịu",exampleCN:"我喉咙痛，肚子难受"},
{id:281,lesson:18,vn:"Sốt",cn:"发烧",pinyin:"fā shāo",exampleVN:"Hôm nay tôi sốt nhẹ, Sốt phải nghỉ ngơi",exampleCN:"我轻微发烧，发烧要休息"},
{id:282,lesson:18,vn:"Ho",cn:"咳嗽",pinyin:"ké sou",exampleVN:"Anh ấy ho nhiều, Uống thuốc giảm ho",exampleCN:"他咳嗽厉害，喝止咳药"},
{id:283,lesson:18,vn:"Cảm",cn:"感冒",pinyin:"gǎn mào",exampleVN:"Tôi bị cảm lạnh, Cảm uống nhiều nước",exampleCN:"我着凉感冒，感冒多喝水"},
{id:284,lesson:18,vn:"Khỏe",cn:"健康",pinyin:"jiàn kāng",exampleVN:"Hôm nay tôi khỏe lại, Giữ gìn khỏe mỗi ngày",exampleCN:"今天我恢复健康，每日保重身体"},
{id:285,lesson:18,vn:"Khám bệnh",cn:"看病",pinyin:"kàn bìng",exampleVN:"Tôi đi khám sáng mai, Khám trước khi uống thuốc",exampleCN:"我明天早上去看病，先问诊再吃药"},
{id:286,lesson:18,vn:"Uống thuốc",cn:"吃药",pinyin:"chī yào",exampleVN:"Uống sau bữa ăn, Uống đủ liều",exampleCN:"饭后服用，吃足剂量"},
{id:287,lesson:18,vn:"Nhiệt kế",cn:"体温计",pinyin:"tǐ wēn jì",exampleVN:"Y tá dùng nhiệt kế, Nhiệt kế đo chính xác",exampleCN:"护士用体温计，测温精准"},
{id:288,lesson:18,vn:"Phòng khám",cn:"诊所",pinyin:"zhěn suǒ",exampleVN:"Phòng khám gần nhà, Phòng khám nhỏ tiện lợi",exampleCN:"诊所离家近，小型诊所方便"},
{id:289,lesson:18,vn:"Sức khỏe",cn:"健康",pinyin:"jiàn kāng",exampleVN:"Sức khỏe quan trọng nhất, Tập thể dục giữ sức khỏe",exampleCN:"健康最重要，运动保健康"},
/*========================================
Bài 19 - Khách sạn（酒店）
========================================*/
{id:290,lesson:19,vn:"Khách sạn",cn:"酒店",pinyin:"jiǔ diàn",exampleVN:"Tôi ở khách sạn du lịch, Khách sạn sạch đẹp",exampleCN:"旅游住酒店，酒店干净美观"},
{id:291,lesson:19,vn:"Lễ tân",cn:"前台",pinyin:"qián tái",exampleVN:"Hỏi lễ tân phòng, Lễ tân hỗ trợ khách",exampleCN:"向前台询问房间，前台协助客人"},
{id:292,lesson:19,vn:"Đặt phòng",cn:"订房",pinyin:"dìng fáng",exampleVN:"Tôi đặt trước online, Đặt phòng đôi cho hai người",exampleCN:"我线上提前预订，订双人房"},
{id:293,lesson:19,vn:"Phòng",cn:"房间",pinyin:"fáng jiān",exampleVN:"Phòng có điều hòa, Phòng yên tĩnh ngủ ngon",exampleCN:"房间带空调，安静好睡"},
{id:294,lesson:19,vn:"Phòng đơn",cn:"单人房",pinyin:"dān rén fáng",exampleVN:"Tôi muốn phòng đơn, Phòng đơn giá rẻ hơn",exampleCN:"我想要单人房，单人房更便宜"},
{id:295,lesson:19,vn:"Phòng đôi",cn:"双人房",pinyin:"shuāng rén fáng",exampleVN:"Chúng tôi đặt phòng đôi, Hai giường rộng rãi",exampleCN:"我们订双人房，两张大床宽敞"},
{id:296,lesson:19,vn:"Chìa khóa",cn:"钥匙",pinyin:"yào shi",exampleVN:"Đây chìa khóa phòng, Giữ chìa khóa cẩn thận",exampleCN:"这是房间钥匙，妥善保管"},
{id:297,lesson:19,vn:"Thẻ phòng",cn:"房卡",pinyin:"fáng kǎ",exampleVN:"Mở cửa bằng thẻ phòng, Không làm mất thẻ",exampleCN:"用房卡开门，别弄丢房卡"},
{id:298,lesson:19,vn:"Thang máy",cn:"电梯",pinyin:"diàn tī",exampleVN:"Thang máy bên phải, Thang máy nhanh",exampleCN:"电梯在右侧，运行快速"},
{id:299,lesson:19,vn:"Tầng",cn:"楼层",pinyin:"lóu céng",exampleVN:"Phòng tôi tầng ba, Tầng cao nhìn thành phố",exampleCN:"我的房间在三楼，高层看城市"},
{id:300,lesson:19,vn:"Ở một đêm",cn:"住一晚",pinyin:"zhù yí wǎn",exampleVN:"Tôi ở một đêm rồi đi, Ở đêm giá thấp",exampleCN:"我住一晚就走，单晚价格低"},
{id:301,lesson:19,vn:"Nhận phòng",cn:"入住",pinyin:"rù zhù",exampleVN:"Làm thủ tục nhận phòng, Nhận thẻ tại lễ tân",exampleCN:"办理入住手续，前台拿房卡"},
{id:302,lesson:19,vn:"Trả phòng",cn:"退房",pinyin:"tuì fáng",exampleVN:"Trả phòng lúc mười giờ, Trả thẻ lễ tân",exampleCN:"十点退房，把房卡交还前台"},
{id:303,lesson:19,vn:"Đặt trước",cn:"预订",pinyin:"yù dìng",exampleVN:"Tôi đặt trước ba ngày, Đặt trước không hết phòng",exampleCN:"我提前三天预订，预订不会无房"},
{id:304,lesson:19,vn:"Hành lý",cn:"行李",pinyin:"xíng li",exampleVN:"Đây hành lý của tôi, Nhân viên mang hành lý",exampleCN:"这是我的行李，工作人员帮忙拿行李"},
/*========================================
Bài 20 - Ngân hàng（银行）
========================================*/
{id:305,lesson:20,vn:"Ngân hàng",cn:"银行",pinyin:"yín háng",exampleVN:"Tôi đến ngân hàng rút tiền, Ngân hàng mở 8h sáng",exampleCN:"我去银行取钱，银行早八点营业"},
{id:306,lesson:20,vn:"Tài khoản",cn:"银行账户",pinyin:"yín háng zhàng hù",exampleVN:"Tôi có tài khoản cá nhân, Tài khoản tiết kiệm",exampleCN:"我有个人账户，储蓄账户"},
{id:307,lesson:20,vn:"Thẻ ngân hàng",cn:"银行卡",pinyin:"yín háng kǎ",exampleVN:"Đây thẻ của tôi, Dùng thẻ thanh toán",exampleCN:"这是我的卡，刷卡支付"},
{id:308,lesson:vn:"Tiền mặt",cn:"现金",pinyin:"xiàn jīn",exampleVN:"Tiền mặt trong ví, Rút tiền mặt ATM",exampleCN:"钱包里的现金，ATM取现金"},
{id:309,lesson:20,vn:"Rút tiền",cn:"取钱",pinyin:"qǔ qián",exampleVN:"Tôi rút một triệu, Rút tiền tại quầy",exampleCN:"我取一百万，柜台取款"},
{id:310,lesson:20,vn:"Gửi tiền",cn:"存钱",pinyin:"cún qián",exampleVN:"Gửi lương vào tài khoản, Gửi tiền tiết kiệm",exampleCN:"工资存账户，存储蓄"},
{id:311,lesson:20,vn:"Chuyển khoản",cn:"转账",pinyin:"zhuǎn zhàng",exampleVN:"Chuyển cho bạn, Chuyển qua điện thoại",exampleCN:"转给朋友，手机转账"},
{id:312,lesson:20,vn:"Số dư",cn:"余额",pinyin:"yú é",exampleVN:"Kiểm tra số dư, Số dư còn ít",exampleCN:"查询余额，余额不多"},
{id:313,lesson:20,vn:"Máy ATM",cn:"自动取款机",pinyin:"zì dòng qǔ kuǎn jī",exampleVN:"ATM trước ngân hàng, Dùng ATM tiện nhanh",exampleCN:"银行前ATM，取款便捷"},
{id:314,lesson:20,vn:"Mật khẩu",cn:"密码",pinyin:"mì mǎ",exampleVN:"Nhập mật khẩu đúng, Không lộ mật khẩu",exampleCN:"输入正确密码，不泄露密码"},
{id:315,lesson:20,vn:"Ký tên",cn:"签名",pinyin:"qiān míng",exampleVN:"Ký trên biên lai, Ký rõ họ tên",exampleCN:"收据签名，签全名"},
{id:316,lesson:20,vn:"Biên lai",cn:"收据",pinyin:"shōu jù",exampleVN:"Lưu biên lai giao dịch, Biên lai chứng minh",exampleCN:"留存交易收据，凭证单据"},
{id:317,lesson:20,vn:"Lãi suất",cn:"利率",pinyin:"lì lǜ",exampleVN:"Lãi suất tiết kiệm tốt, Lãi suất hàng tháng",exampleCN:"储蓄利率不错，按月计息"},
{id:318,lesson:vn:"Khoản vay",cn:"贷款",pinyin:"dài kuǎn",exampleVN:"Vay mua nhà, Vay ngắn hạn",exampleCN:"房贷，短期贷款"},
{id:319,lesson:20,vn:"Nhân viên ngân hàng",cn:"银行职员",pinyin:"yín háng zhí yuán",exampleVN:"Nhân viên hướng dẫn giao dịch, Nhân viên thân thiện",exampleCN:"职员指导业务，态度友好"},
/*========================================
Bài 21 - Bưu điện（邮局）
========================================*/
{id:320,lesson:21,vn:"Bưu điện",cn:"邮局",pinyin:"yóu jú",exampleVN:"Tôi đến gửi thư, Bưu điện trung tâm quận",exampleCN:"我去寄信，区中心邮局"},
{id:321,lesson:21,vn:"Thư",cn:"信",pinyin:"xìn",exampleVN:"Viết thư cho gia đình, Thư tay chân thành",exampleCN:"写给家人的信，手写书信"},
{id:322,lesson:21,vn:"Bưu thiếp",cn:"明信片",pinyin:"míng xìn piàn",exampleVN:"Gửi bưu thiếp du lịch, Bưu thiếp có ảnh phong cảnh",exampleCN:"旅游寄明信片，风景明信片"},
{id:323,lesson:21,vn:"Bưu kiện",cn:"包裹",pinyin:"bāo guǒ",exampleVN:"Gửi quà bưu kiện, Bưu kiện nhẹ",exampleCN:"包裹寄礼物，轻便包裹"},
{id:324,lesson:21,vn:"Tem",cn:"邮票",pinyin:"yóu piào",exampleVN:"Mua hai con tem, Dán tem trên thư",exampleCN:"买两张邮票，贴信封"},
{id:325,lesson:21,vn:"Gửi",cn:"寄",pinyin:"jì",exampleVN:"Gửi đến Hà Nội, Gửi chuyển phát nhanh",exampleCN:"寄往河内，快递寄送"},
{id:326,lesson:21,vn:"Nhận",cn:"收",pinyin:"shōu",exampleVN:"Nhận bưu kiện hôm nay, Nhận thư từ bạn",exampleCN:"今天收包裹，收到朋友来信"},
{id:327,lesson:21,vn:"Địa chỉ",cn:"地址",pinyin:"dì zhǐ",exampleVN:"Viết địa chỉ rõ ràng, Điền địa nhận",exampleCN:"写清晰地址，填写收件地址"},
{id:328,lesson:21,vn:"Người nhận",cn:"收件人",pinyin:"shōu jiàn rén",exampleVN:"Ghi tên người nhận, Điền số điện thoại người nhận",exampleCN:"写收件人姓名，填收件电话"},
{id:329,lesson:21,vn:"Người gửi",cn:"寄件人",pinyin:"jì jiàn rén",exampleVN:"Ghi thông tin người gửi, Viết địa nhà gửi",exampleCN:"填写寄件信息，写寄件住址"},
{id:330,lesson:21,vn:"Chuyển phát nhanh",cn:"快递",pinyin:"kuài dì",exampleVN:"Chuyển phát nhanh nhanh hơn, Gửi đồ lớn nhanh",exampleCN:"快递速度更快，大件快递"},
{id:331,lesson:21,vn:"Bưu phẩm",cn:"邮件",pinyin:"yóu jiàn",exampleVN:"Bưu phẩm đã đến bưu điện, Bưu phẩm nhỏ gọn",exampleCN:"邮件已到邮局，小件邮件"},
{id:332,lesson:21,vn:"Cân",cn:"称",pinyin:"chēng",exampleVN:"Cân bưu kiện tính phí, Cân chính xác gam",exampleCN:"称重计费，精确克数"},
{id:333,lesson:21,vn:"Phí gửi",cn:"邮费",pinyin:"yóu fèi",exampleVN:"Phí tùy trọng lượng, Trả phí gửi tiền mặt",exampleCN:"费用按重量，现金付邮费"},
{id:334,lesson:21,vn:"Mã bưu điện",cn:"邮政编码",pinyin:"yóu zhèng biān mǎ",exampleVN:"Điền mã bưu điện đúng, Mã phân khu",exampleCN:"填写正确邮编，分区编码"},
/*========================================
Bài 22 - Công việc（工作）
========================================*/
{id:335,lesson:22,vn:"Công việc",cn:"工作",pinyin:"gōng zuò",exampleVN:"Tôi yêu công việc, Công việc tạo thu nhập",exampleCN:"我热爱工作，工作带来收入"},
{id:336,lesson:22,vn:"Công ty",cn:"公司",pinyin:"gōng sī",exampleVN:"Công ty lớn trung tâm, Công ty nhiều nhân viên",exampleCN:"市中心大公司，员工众多"},
{id:337,lesson:22,vn:"Văn phòng",cn:"办公室",pinyin:"bàn gōng shì",exampleVN:"Làm việc văn phòng, Văn phòng có máy tính",exampleCN:"办公室办公，配有电脑"},
{id:338,lesson:22,vn:"Đồng nghiệp",cn:"同事",pinyin:"tóng shì",exampleVN:"Đồng nghiệp giúp đỡ nhau, Ăn trưa cùng đồng nghiệp",exampleCN:"同事互相帮忙，和同事吃午饭"},
{id:339,lesson:22,vn:"Giám đốc",cn:"经理",pinyin:"jīng lǐ",exampleVN:"Giám đốc họp mỗi sáng, Giám đốc chỉ dẫn công việc",exampleCN:"经理每日早会，安排工作"},
{id:340,lesson:22,vn:"Cuộc họp",cn:"会议",pinyin:"huì yì",exampleVN:"Cuộc họp thảo luận kế hoạch, Cuộc họp nửa tiếng",exampleCN:"会议讨论方案，半小时会议"},
{id:341,lesson:22,vn:"Làm thêm giờ",cn:"加班",pinyin:"jiā bān",exampleVN:"Hôm nay làm thêm giờ, Làm thêm cuối tuần",exampleCN:"今天加班，周末加班"},
{id:342,lesson:22,vn:"Nghỉ phép",cn:"请假",pinyin:"qǐng jià",exampleVN:"Xin nghỉ một ngày, Nghỉ phép bệnh",exampleCN:"请一天假，病假"},
{id:343,lesson:22,vn:"Tiền lương",cn:"工资",pinyin:"gōng zī",exampleVN:"Nhận lương cuối tháng, Lương đủ chi tiêu",exampleCN:"月底发工资，工资够开销"},
{id:344,lesson:22,vn:"Kinh nghiệm",cn:"经验",pinyin:"jīng yàn",exampleVN:"Tích lũy kinh nghiệm làm việc, Kinh nghiệm quý giá",exampleCN:"积累工作经验，宝贵经验"},
{id:345,lesson:22,vn:"Phỏng vấn",cn:"面试",pinyin:"miàn shì",exampleVN:"Đi phỏng vấn công ty mới, Chuẩn bị phỏng vấn kỹ lưỡng",exampleCN:"去新公司面试，充分准备面试"},
{id:346,lesson:vn:"Hợp đồng",cn:"合同",pinyin:"hé tong",exampleVN:"Ký hợp đồng lao động, Hợp đồng một năm",exampleCN:"签劳动合同，一年期合同"},
{id:347,lesson:22,vn:"Nhiệm vụ",cn:"任务",pinyin:"rèn wu",exampleVN:"Hoàn thành nhiệm vụ đúng giờ, Nhiệm vụ đơn giản hôm nay",exampleCN:"按时完成任务，今日任务简单"},
{id:348,lesson:22,vn:"Hoàn thành",cn:"完成",pinyin:"wán chéng",exampleVN:"Tôi hoàn thành xong báo, Hoàn thành trước giờ tan ca",exampleCN:"我写完报告，下班前做完"},
{id:349,lesson:22,vn:"Bận",cn:"忙",pinyin:"máng",exampleVN:"Hôm nay rất bận công việc, Giám đốc cũng bận",exampleCN:"今天工作很忙，经理也忙"},
/*========================================
Bài 23 - Máy tính và Internet（电脑和互联网）
========================================*/
{id:350,lesson:23,vn:"Máy tính",cn:"电脑",pinyin:"diàn nǎo",exampleVN:"Dùng máy tính học tiếng Việt, Máy tính cấu hình tốt",exampleCN:"用电脑学越南语，电脑配置好"},
{id:351,lesson:23,vn:"Máy tính xách tay",cn:"笔记本电脑",pinyin:"bǐ jì běn diàn nǎo",exampleVN:"Mang máy đi công ty, Máy nhẹ dễ mang",exampleCN:"带电脑去公司，轻便易携"},
{id:352,lesson:23,vn:"Màn hình",cn:"屏幕",pinyin:"píng mù",exampleVN:"Màn hình to rõ nét, Tắt màn hình khi nghỉ",exampleCN:"大屏清晰，休息关屏幕"},
{id:353,lesson:23,vn:"Bàn phím",cn:"键盘",pinyin:"jiàn pán",exampleVN:"Gõ bàn phím nhanh, Lau bàn phím thường xuyên",exampleCN:"打字快，常清洁键盘"},
{id:354,lesson:23,vn:"Chuột máy tính",cn:"鼠标",pinyin:"shǔ biāo",exampleVN:"Chuột di chuyển mượt, Thay chuột hỏng",exampleCN:"鼠标顺滑，更换坏鼠标"},
{id:355,lesson:23,vn:"Internet",cn:"互联网",pinyin:"hù lián wǎng",exampleVN:"Internet học online, Không có internet khó làm việc",exampleCN:"网络线上学习，无网难办公"},
{id:356,lesson:23,vn:"Wi-Fi",cn:"无线网络",pinyin:"wú xiàn wǎng luò",exampleVN:"Mật khẩu Wi-Fi ở đây, Kết nối Wi-Fi điện thoại",exampleCN:"这里Wi-Fi密码，手机连无线网"},
{id:357,lesson:23,vn:"Email",cn:"电子邮件",pinyin:"diàn zǐ yóu jiàn",exampleVN:"Gửi email công việc, Kiểm email mỗi sáng",exampleCN:"发送工作邮件，每日查邮箱"},
{id:358,lesson:23,vn:"Trang web",cn:"网站",pinyin:"wǎng zhàn",exampleVN:"Mở trang học từ vựng, Trang web load nhanh",exampleCN:"打开单词学习网站，加载快"},
{id:359,lesson:23,vn:"Tải xuống",cn:"下载",pinyin:"xià zǎi",exampleVN:"Tải tài liệu bài học, Tải video chậm một chút",exampleCN:"下载课文资料，视频下载稍慢"},
{id:360,lesson:23,vn:"Tải lên",cn:"上传",pinyin:"shàng chuán",exampleVN:"Tải ảnh bài tập, Tải lên server công ty",exampleCN:"上传作业图片，上传公司服务器"},
{id:361,lesson:23,vn:"Mật khẩu",cn:"密码",pinyin:"mì mǎ",exampleVN:"Nhập mật khẩu đăng nhập, Không chia sẻ mật khẩu",exampleCN:"输入登录密码，不分享密码"},
{id:362,lesson:23,vn:"Đăng nhập",cn:"登录",pinyin:"dēng lù",exampleVN:"Đăng nhập tài khoản học, Đăng nhập mỗi buổi học",exampleCN:"登录学习账号，每次上课登录"},
{id:363,lesson:23,vn:"Đăng xuất",cn:"退出登录",pinyin:"tuì chū dēng lù",exampleVN:"Đăng xuất khi xong, Đăng xuất bảo mật",exampleCN:"用完退出，安全退出"},
{id:364,lesson:23,vn:"Tệp tin",cn:"文件",pinyin:"wén jiàn",exampleVN:"Lưu tệp bài học, Mở tệp văn bản",exampleCN:"保存课文文件，打开文档"},
/*========================================
Bài 24 - Ngân hàng điện tử（网上银行）
========================================*/
{id:365,lesson:24,vn:"Ngân hàng điện tử",cn:"网上银行",pinyin:"wǎng shàng yín háng",exampleVN:"Dùng mỗi ngày thanh toán, Ngân hàng điện tử an toàn",exampleCN:"每日线上支付，网银安全"},
{id:366,lesson:24,vn:"Ứng dụng ngân hàng",cn:"银行应用",pinyin:"yín háng yìng yòng",exampleVN:"Mở app kiểm số dư, App giao dịch nhanh",exampleCN:"打开APP查余额，交易快捷"},
{id:367,lesson:24,vn:"Đăng nhập",cn:"登录",pinyin:"dēng lù",exampleVN:"Đăng nhập trước chuyển tiền, Đăng nhập mã OTP",exampleCN:"转账先登录，输验证码登录"},
{id:368,lesson:24,vn:"Mã OTP",cn:"验证码",pinyin:"yàn zhèng mǎ",exampleVN:"Điện thoại nhận mã OTP, Nhập mã đúng",exampleCN:"手机收验证码，输入正确"},
{id:369,lesson:24,vn:"Mã QR",cn:"二维码",pinyin:"èr wéi mǎ",exampleVN:"Quét mã QR thanh toán, Mã QR cửa hàng",exampleCN:"扫码付款，商铺二维码"},
{id:370,lesson:vn:"Quét mã",cn:"扫码",pinyin:"sǎo mǎ",exampleVN:"Quét bằng điện thoại, Quét nhanh một giây",exampleCN:"手机扫码，一秒完成"},
{id:371,lesson:24,vn:"Ví điện tử",cn:"电子钱包",pinyin:"diàn zǐ qián bāo",exampleVN:"Nạp tiền ví, Ví tiện mua sắm",exampleCN:"钱包充值，购物便捷"},
{id:372,lesson:24,vn:"Thanh toán trực tuyến",cn:"在线支付",pinyin:"zài xiàn zhī fù",exampleVN:"Thanh toán hóa đơn online, Thanh toán siêu thị",exampleCN:"线上缴费，超市线上付"},
{id:373,lesson:24,vn:"Chuyển tiền",cn:"转钱",pinyin:"zhuǎn qián",exampleVN:"Chuyển cho bạn học, Chuyển ngay lập tức",exampleCN:"转给同学，即时到账"},
{id:374,lesson:24,vn:"Xác nhận",cn:"确认",pinyin:"què rèn",exampleVN:"Xác nhận giao dịch, Kiểm lại số tiền",exampleCN:"确认交易，核对金额"},
{id:375,lesson:24,vn:"Giao dịch",cn:"交易",pinyin:"jiāo yì",exampleVN:"Giao dịch thành công, Xem lịch sử giao dịch",exampleCN:"交易成功，查看交易记录"},
{id:376,lesson:24,vn:"Lịch sử giao dịch",cn:"交易记录",pinyin:"jiāo yì jì lù",exampleVN:"Kiểm tra mỗi tuần, Lịch sử lưu lâu",exampleCN:"每周核对，长期保存记录"},
{id:377,lesson:24,vn:"Số dư tài khoản",cn:"账户余额",pinyin:"zhàng hù yú é",exampleVN:"Kiểm tra số dư mỗi sáng, Số dư tiết kiệm",exampleCN:"每日查余额，储蓄余额"},
{id:378,lesson:24,vn:"Thông báo",cn:"通知",pinyin:"tōng zhī",exampleVN:"Thông báo chuyển tiền đến, Điện thoại báo giao dịch",exampleCN:"转账到账通知，手机推送"},
{id:379,lesson:24,vn:"Bảo mật",cn:"安全",pinyin:"ān quán",exampleVN:"Giữ bảo mật tài khoản, Bảo mật thông tin cá nhân",exampleCN:"保护账户安全，隐私安全"},
/*========================================
Bài 25 - Thể thao（运动）
========================================*/
{id:380,lesson:25,vn:"Thể thao",cn:"运动",pinyin:"yùn dòng",exampleVN:"Chơi thể thao mỗi cuối tuần, Thể thao khỏe người",exampleCN:"每周末运动，运动强身"},
{id:381,lesson:25,vn:"Bóng đá",cn:"足球",pinyin:"zú qiú",exampleVN:"Chơi bóng đá sân, Xem trận bóng đá tối",exampleCN:"球场踢球，晚上看球赛"},
{id:382,lesson:25,vn:"Bóng rổ",cn:"篮球",pinyin:"lán qiú",exampleVN:"Bóng rổ ba người, Bóng rổ trường học",exampleCN:"三人篮球，校园篮球"},
{id:383,lesson:25,vn:"Cầu lông",cn:"羽毛球",pinyin:"yǔ máo qiú",exampleVN:"Chơi cầu lông công viên, Cầu lông nhẹ nhàng",exampleCN:"公园打羽毛球，轻松运动"},
{id:384,lesson:25,vn:"Bơi lội",cn:"游泳",pinyin:"yóu yǒng",exampleVN:"Bơi mùa hè, Bơi tăng sức khỏe",exampleCN:"夏天游泳，增强体质"},
{id:385,lesson:25,vn:"Chạy bộ",cn:"跑步",pinyin:"pǎo bù",exampleVN:"Chạy buổi sáng, Chạy nhẹ 30 phút",exampleCN:"晨跑，慢跑半小时"},
{id:386,lesson:25,vn:"Đi bộ",cn:"散步",pinyin:"sàn bù",exampleVN:"Đi bộ sau ăn tối, Đi bộ thư giãn",exampleCN:"晚饭后散步，放松身心"},
{id:387,lesson:25,vn:"Đạp xe",cn:"骑自行车",pinyin:"qí zì xíng chē",exampleVN:"Đạp xe quanh công viên, Đạp xe tiết kiệm",exampleCN:"绕公园骑行，环保省钱"},
{id:388,lesson:25,vn:"Tập thể dục",cn:"锻炼身体",pinyin:"duàn liàn shēn tǐ",exampleVN:"Tập mỗi sáng sớm, Tập đơn giản tại nhà",exampleCN:"清晨锻炼，居家简易运动"},
{id:389,lesson:25,vn:"Trận đấu",cn:"比赛",pinyin:"bǐ sài",exampleVN:"Trận bóng đá cuối tuần, Xem trận cùng bạn",exampleCN:"周末足球赛，和朋友观赛"},
{id:390,lesson:25,vn:"Đội bóng",cn:"球队",pinyin:"qiú duì",exampleVN:"Đội trường mạnh, Tham gia đội bóng",exampleCN:"校队很强，加入球队"},
{id:391,lesson:vn:"Huấn luyện viên",cn:"教练",pinyin:"jiào liàn",exampleVN:"HLV chỉ dẫn kỹ thuật, HLV nghiêm khắc tốt",exampleCN:"教练指导技巧，严格负责"},
{id:392,lesson:25,vn:"Chiến thắng",cn:"胜利",pinyin:"shèng lì",exampleVN:"Đội chúng tôi thắng, Mọi người vui chiến thắng",exampleCN:"我们队赢，全员开心"},
{id:393,lesson:25,vn:"Thua",cn:"失败",pinyin:"shī bài",exampleVN:"Đội kia thua đừng buồn, Thua rút kinh nghiệm",exampleCN:"输了别难过，吸取教训"},
{id:394,lesson:25,vn:"Huy chương",cn:"奖牌",pinyin:"jiǎng pái",exampleVN:"Nhận huy chương vàng, Huy chương tự hào",exampleCN:"获得金牌，引以为傲"},
/*========================================
Bài 26 - Sở thích（爱好）
========================================*/
{id:395,lesson:26,vn:"Sở thích",cn:"爱好",pinyin:"ài hào",exampleVN:"Mỗi người sở thích riêng, Sở thích giải trí",exampleCN:"每人爱好不同，爱好消遣"},
{id:396,lesson:26,vn:"Thích",cn:"喜欢",pinyin:"xǐ huān",exampleVN:"Tôi thích nghe nhạc, Em thích vẽ tranh",exampleCN:"我喜欢听歌，小孩爱画画"},
{id:397,lesson:26,vn:"Đọc sách",cn:"看书",pinyin:"kàn shū",exampleVN:"Đọc tối trước ngủ, Đọc sách học kiến thức",exampleCN:"睡前看书，读书长知识"},
{id:398,lesson:26,vn:"Nghe nhạc",cn:"听音乐",pinyin:"tīng yīn yuè",exampleVN:"Nghe nhạc khi rảnh, Nhạc thư giãn",exampleCN:"空闲听歌，舒缓音乐"},
{id:399,lesson:26,vn:"Xem phim",cn:"看电影",pinyin:"kàn diàn yǐng",exampleVN:"Xem phim cuối tuần, Phim ngắn hay",exampleCN:"周末看电影，短片好看"},
{id:400,lesson:26,vn:"Nấu ăn",cn:"做饭",pinyin:"zuò fàn",exampleVN:"Mẹ thích nấu ăn, Nấu món Việt ngon",exampleCN:"妈妈爱做饭，越南菜美味"},
{id:401,lesson:26,vn:"Chụp ảnh",cn:"拍照",pinyin:"pāi zhào",exampleVN:"Chụp phong cảnh du lịch, Chụp ảnh gia đình",exampleCN:"旅游拍风景，拍全家福"},
{id:402,lesson:26,vn:"Vẽ",cn:"画画",pinyin:"huà huà",exampleVN:"Vẽ hoa cây, Vẽ nhân vật đơn giản",exampleCN:"画花草，简笔人物"},
{id:403,lesson:26,vn:"Hát",cn:"唱歌",pinyin:"chàng gē",exampleVN:"Hát karaoke bạn bè, Hát nhạc trẻ",exampleCN:"和朋友K歌，流行歌"},
{id:404,lesson:26,vn:"Nhảy múa",cn:"跳舞",pinyin:"tiào wǔ",exampleVN:"Nhảy múa thể thao, Nhảy vui vẻ",exampleCN:"舞蹈运动，欢快舞蹈"},
{id:405,lesson:26,vn:"Chơi cờ",cn:"下棋",pinyin:"xià qí",exampleVN:"Chơi cờ với ông, Cờ tướng Việt",exampleCN:"和爷爷下棋，越南象棋"},
{id:406,lesson:26,vn:"Làm vườn",cn:"种花",pinyin:"zhòng huā",exampleVN:"Trồng hoa sân, Chăm cây mỗi ngày",exampleCN:"庭院种花，每日养护"},
{id:407,lesson:26,vn:"Câu cá",cn:"钓鱼",pinyin:"diào yú",exampleVN:"Câu hồ cuối tuần, Câu cá yên tĩnh",exampleCN:"周末湖边钓鱼，静心垂钓"},
{id:408,lesson:26,vn:"Sưu tầm",cn:"收藏",pinyin:"shōu cáng",exampleVN:"Sưu tem cũ, Sưu ảnh phong cảnh",exampleCN:"收藏旧邮票，收藏风景照"},
{id:409,lesson:26,vn:"Rảnh",cn:"有空",pinyin:"yǒu kòng",exampleVN:"Khi rảnh đi chơi, Thời gian rảnh đọc sách",exampleCN:"有空出去玩，空闲读书"},
/*========================================
Bài 27 - Giáo dục（教育）
========================================*/
{id:410,lesson:27,vn:"Giáo dục",cn:"教育",pinyin:"jiào yù",exampleVN:"Giáo dục nền tảng, Mọi người học tập",exampleCN:"教育是基础，人人学习"},
{id:411,lesson:27,vn:"Trường học",cn:"学校",pinyin:"xué xiào",exampleVN:"Trường học rộng, Học sinh chăm chỉ",exampleCN:"校园宽敞，学生勤奋"},
{id:412,lesson:27,vn:"Lớp học",cn:"教室",pinyin:"jiào shì",exampleVN:"Lớp sạch sẽ, Học sinh ngồi yên",exampleCN:"教室干净，学生安静就坐"},
{id:413,lesson:27,vn:"Giáo viên",cn:"老师",pinyin:"lǎo shī",exampleVN:"Giáo viên giảng bài, Giáo viên nhiệt tình",exampleCN:"老师讲课，热情教学"},
{id:414,lesson:27,vn:"Học sinh",cn:"学生",pinyin:"xué sheng",exampleVN:"Học sinh hỏi bài, Học tập chăm chỉ",exampleCN:"学生提问，努力学习"},
{id:415,lesson:27,vn:"Sinh viên",cn:"大学生",pinyin:"dà xué shēng",exampleVN:"Sinh viên thư viện, Sinh viên nghiên cứu",exampleCN:"大学生泡图书馆，做研究"},
{id:416,lesson:27,vn:"Sách giáo khoa",cn:"课本",pinyin:"kè běn",exampleVN:"Mở sách trang 10, Sách từ vựng A0",exampleCN:"翻课本第十页，A0词汇书"},
{id:417,lesson:27,vn:"Bài tập",cn:"作业",pinyin:"zuò yè",exampleVN:"Làm bài tối, Kiểm bài sau giờ học",exampleCN:"晚上写作业，课后批改"},
{id:418,lesson:vn:"Kiểm tra",cn:"考试",pinyin:"kǎo shì",exampleVN:"Ôn bài kiểm tra, Kiểm tra cuối tuần",exampleCN:"复习备考，周末测验"},
{id:419,lesson:27,vn:"Điểm",cn:"分数",pinyin:"fēn shù",exampleVN:"Điểm cao chăm chỉ, Điểm thấp ôn lại",exampleCN:"高分靠努力，低分复习"},
{id:420,lesson:27,vn:"Thư viện",cn:"图书馆",pinyin:"tú shū guǎn",exampleVN:"Thư viện nhiều sách, Học thư viện yên tĩnh",exampleCN:"图书馆藏书多，安静自习"},
{id:421,lesson:27,vn:"Viết",cn:"写",pinyin:"xiě",exampleVN:"Viết chữ Việt, Viết bài tập",exampleCN:"写越南字，写作业"},
{id:422,lesson:27,vn:"Đọc",cn:"读",pinyin:"dú",exampleVN:"Đọc to từ vựng, Đọc hội thoại",exampleCN:"大声读单词，朗读对话"},
{id:423,lesson:27,vn:"Học",cn:"学习",pinyin:"xué xí",exampleVN:"Học mỗi ngày, Học ngữ pháp cẩn thận",exampleCN:"每日学习，认真学语法"},
{id:424,lesson:27,vn:"Tốt nghiệp",cn:"毕业",pinyin:"bì yè",exampleVN:"Tốt nghiệp đại học, Tốt nghiệp vui vẻ",exampleCN:"大学毕业，毕业开心"},
/*========================================
Bài 28 - Du lịch（旅游）
========================================*/
{id:425,lesson:28,vn:"Du lịch",cn:"旅游",pinyin:"lǚ yóu",exampleVN:"Du lịch kỳ nghỉ, Du lịch xem phong cảnh",exampleCN:"假期出游，看风景旅行"},
{id:426,lesson:28,vn:"Điểm tham quan",cn:"景点",pinyin:"jǐng diǎn",exampleVN:"Điểm nổi tiếng Việt Nam, Tham quan nhiều điểm",exampleCN:"越南知名景点，多处游览地"},
{id:427,lesson:28,vn:"Hộ chiếu",cn:"护照",pinyin:"hù zhào",exampleVN:"Mang hộ chiếu ra nước ngoài, Kiểm tra hộ chiếu",exampleCN:"出国带护照，检查护照"},
{id:428,lesson:28,vn:"Vé máy bay",cn:"机票",pinyin:"jī piào",exampleVN:"Mua vé sớm, Vé máy bay giá tốt",exampleCN:"早买票，机票划算"},
{id:429,lesson:28,vn:"Sân bay",cn:"机场",pinyin:"jī chǎng",exampleVN:"Đến sân bay sớm, Sân bay rộng lớn",exampleCN:"早到机场，机场广阔"},
{id:430,lesson:28,vn:"Hành lý",cn:"行李",pinyin:"xíng li",exampleVN:"Hành lý nhẹ đi chơi, Kiểm tra hành lý sân bay",exampleCN:"轻装出行，机场托运行李"},
{id:431,lesson:28,vn:"Bản đồ",cn:"地图",pinyin:"dì tú",exampleVN:"Xem bản đường đi, Bản đồ điện thoại",exampleCN:"看路线
{id:431,lesson:28,vn:"Bản đồ",cn:"地图",pinyin:"dì tú",exampleVN:"Xem bản đường đi, Bản đồ điện thoại",exampleCN:"查看路线地图，手机电子地图"},
{id:432,lesson:28,vn:"Hướng dẫn viên",cn:"导游",pinyin:"dǎo yóu",exampleVN:"Hướng dẫn viên giới thiệu phong cảnh, Hướng dẫn viên biết nhiều lịch sử",exampleCN:"导游讲解风景，导游通晓历史"},
{id:433,lesson:28,vn:"Khởi hành",cn:"出发",pinyin:"chū fā",exampleVN:"Xe khởi hành lúc 7 giờ, Chúng tôi chuẩn bị khởi hành",exampleCN:"车辆七点出发，我们准备动身"},
{id:434,lesson:28,vn:"Đến nơi",cn:"到达",pinyin:"dào dá",exampleVN:"Chúng tôi đã đến điểm tham quan, Máy bay đến đúng giờ",exampleCN:"我们抵达景点，飞机准点到达"},
{id:435,lesson:28,vn:"Đặt vé",cn:"订票",pinyin:"dìng piào",exampleVN:"Đặt vé máy bay online, Đặt vé tàu trước một tuần",exampleCN:"线上订机票，提前一周订火车票"},
{id:436,lesson:28,vn:"Khách du lịch",cn:"游客",pinyin:"yóu kè",exampleVN:"Nhiều khách du lịch vào mùa hè, Khách du lịch chụp ảnh phong cảnh",exampleCN:"夏季游客很多，游客拍摄风景照"},
{id:437,lesson:28,vn:"Chụp ảnh",cn:"拍照",pinyin:"pāi zhào",exampleVN:"Chụp ảnh trước ngôi chùa, Chụp ảnh cả gia đình",exampleCN:"寺庙前拍照，拍全家福"},
{id:438,lesson:28,vn:"Quà lưu niệm",cn:"纪念品",pinyin:"jì niàn pǐn",exampleVN:"Mua quà lưu niệm tặng bạn, Quà lưu niệm đặc sản địa phương",exampleCN:"买纪念品送朋友，当地特产纪念品"},
{id:439,lesson:28,vn:"Kỳ nghỉ",cn:"假期",pinyin:"jià qī",exampleVN:"Kỳ nghỉ hè hai tháng, Kỳ nghỉ du lịch vui vẻ",exampleCN:"暑假两个月，愉快旅行假期"},
/*========================================
Bài 29 - Văn hóa Việt Nam 越南文化
========================================*/
{id:440,lesson:29,vn:"Văn hóa",cn:"文化",pinyin:"wén huà",exampleVN:"Văn hóa Việt Nam đa dạng, Tôi tìm hiểu văn hóa địa phương",exampleCN:"越南文化多元，我了解本土文化"},
{id:441,lesson:29,vn:"Phong tục",cn:"风俗",pinyin:"fēng sú",exampleVN:"Mỗi vùng có phong tục riêng, Phong tục Tết truyền thống",exampleCN:"每个地区风俗不同，春节传统习俗"},
{id:442,lesson:29,vn:"Lễ hội",cn:"节日",pinyin:"jié rì",exampleVN:"Nhiều lễ hội mỗi năm, Tham gia lễ hội xuân",exampleCN:"每年很多节庆，参加春节活动"},
{id:443,lesson:29,vn:"Tết",cn:"春节",pinyin:"chūn jié",exampleVN:"Tết là lễ lớn nhất, Gia đình đoàn tụ Tết",exampleCN:"春节是最大节日，春节全家团聚"},
{id:444,lesson:29,vn:"Áo dài",cn:"奥黛",pinyin:"ào dài",exampleVN:"Áo dài trang phục truyền thống, Học sinh mặc áo dài đến trường",exampleCN:"奥黛传统服饰，学生穿奥黛上学"},
{id:445,lesson:29,vn:"Bánh chưng",cn:"粽子",pinyin:"zòng zi",exampleVN:"Gói bánh chưng dịp Tết, Bánh chưng ngon thanh đạm",exampleCN:"春节包粽子，粽子清淡美味"},
{id:446,lesson:29,vn:"Chùa",cn:"寺庙",pinyin:"sì miào",exampleVN:"Chùa cổ nổi tiếng, Mọi người đến chùa cúng",exampleCN:"知名古寺，众人到寺庙祈福"},
{id:447,lesson:vn:"Thắp hương",cn:"烧香",pinyin:"shāo xiāng",exampleVN:"Thắp hương cầu bình an, Thắp hương ngày Tết",exampleCN:"烧香祈求平安，春节上香"},
{id:448,lesson:29,vn:"Lì xì",cn:"红包",pinyin:"hóng bāo",exampleVN:"Trẻ em nhận lì xì, Lì xì chúc may mắn",exampleCN:"小孩收红包，红包寓意好运"},
/*========================================
Bài 30 - Môi trường 环境
========================================*/
{id:449,lesson:30,vn:"Môi trường",cn:"环境",pinyin:"huán jìng",exampleVN:"Bảo vệ môi trường xanh, Môi trường sạch khỏe",exampleCN:"保护绿色环境，干净健康的环境"},
{id:450,lesson:30,vn:"Cây cối",cn:"树木",pinyin:"shù mù",exampleVN:"Trồng nhiều cây cối, Cây cối lọc không khí",exampleCN:"多种树，树木净化空气"},
{id:451,lesson:30,vn:"Nước sạch",cn:"干净水源",pinyin:"gān jìng shuǐ yuán",exampleVN:"Bảo vệ nước sạch, Không xả rác vào nước",exampleCN:"保护干净水源，不往水里丢垃圾"},
{id:452,lesson:30,vn:"Rác thải",cn:"垃圾",pinyin:"lā jī",exampleVN:"Phân loại rác thải, Không vứt rác lung tung",exampleCN:"垃圾分类，不乱扔垃圾"},
{id:453,lesson:vn:"Tái chế",cn:"回收利用",pinyin:"huí shōu lì yòng",exampleVN:"Tái chế nhựa giấy, Tái chế bảo vệ trái đất",exampleCN:"回收塑料纸张，回收保护地球"},
{id:454,lesson:30,vn:"Không khí",cn:"空气",pinyin:"kōng qì",exampleVN:"Không khí trong lành, Khói ô nhiễm không khí",exampleCN:"清新空气，废气污染空气"},
{id:455,lesson:30,vn:"Ô nhiễm",cn:"污染",pinyin:"wū rǎn",exampleVN:"Giảm ô nhiễm đường phố, Ô nhiễm ảnh hưởng sức khỏe",exampleCN:"减少街道污染，污染危害健康"},
{id:456,lesson:30,vn:"Trái đất",cn:"地球",pinyin:"dì qiú",exampleVN:"Trái đất nhà chung, Chúng ta bảo vệ trái đất",exampleCN:"地球是共同家园，我们守护地球"},
{id:457,lesson:30,vn:"Thiên nhiên",cn:"大自然",pinyin:"dà zì rán",exampleVN:"Thiên nhiên đẹp tuyệt vời, Yêu quý thiên nhiên",exampleCN:"大自然绝美，珍惜自然"},
{id:458,lesson:30,vn:"Tiết kiệm",cn:"节约",pinyin:"jié yuē",exampleVN:"Tiết kiệm nước điện, Tiết kiệm tài nguyên",exampleCN:"节约水电，节约资源"}
];

//==============================
// GRAMMAR 语法模块（完整结构，每课配套语法点）
//==============================
const GRAMMAR = [
/* Bài 1 越南字母发音规则 */
{
lesson:1,
titleVN:"Quy tắc đọc chữ cái",
titleCN:"字母发音规则",
grammar:[
{
pattern:"Chữ đơn + thanh",
explanationVN:"Mỗi chữ cái có âm cơ bản, các dấu thanh thay đổi giọng đọc",
explanationCN:"每个字母有基础音，声调符号改变读音",
examples:[
{vn:"Chữ A không thanh: a",cn:"无调字母A：a"},
{vn:"Chữ Á thanh sắc: á",cn:"锐声Á：á"}
]
}
]
},
/* Bài 2 日常问候句型 */
{
lesson:2,
titleVN:"Câu chào hỏi tự giới thiệu",
titleCN:"问候与自我介绍句型",
grammar:[
{
pattern:"Xin chào + [tên người]",
explanationVN:"Dùng chào mọi người, bất kể tuổi tác",
explanationCN:"通用问候，不分年龄",
examples:[{vn:"Xin chào Lan",cn:"你好兰"}]
},
{
pattern:"Tên tôi là ___",
explanationVN:"Câu nói tên bản thân",
explanationCN:"介绍自己名字",
examples:[{vn:"Tên tôi là Minh",cn:"我叫明"}]
}
]
},
/* Bài3 人称代词 & 家庭成员 */
{
lesson:3,
titleVN:"Danh từ chỉ người trong gia đình",
titleCN:"家庭人称名词",
grammar:[
{
pattern:"[Người nhà] của tôi",
explanationVN:"Diễn tả gia đình của bản thân",
explanationCN:"表示我的家人",
examples:[{vn:"Ba của tôi",cn:"我的爸爸"}]
}
]
},
/* Bài4 数字表达 */
{
lesson:4,
titleVN:"Cách đếm số từ 0 đến trăm",
titleCN:"0-100数字表达",
grammar:[
{
pattern:"Số + danh từ đếm được",
explanationVN:"Số đứng trước vật để chỉ số lượng",
explanationCN:"数字放在名词前表数量",
examples:[{vn:"Một quyển sách",cn:"一本书"}]
}
]
},
/* Bài5 时间副词 */
{lesson:5,titleVN:"Trạng từ thời gian",titleCN:"时间副词",grammar:[{pattern:"[Thời gian] + làm gì",explanationVN:"Trạng từ đứng đầu câu",explanationCN:"时间词放句首",examples:[{vn:"Hôm nay tôi đi học",cn:"今天我上学"}]}]},
/* Bài6 颜色形容词 */
{lesson:6,titleVN:"Tính từ màu sắc",titleCN:"颜色形容词",grammar:[{pattern:"Màu + [tên màu] + danh từ",explanationVN:"颜色修饰名词放在前面",explanationCN:"颜色前置修饰物品",examples:[{vn:"Áo màu đỏ",cn:"红色上衣"}]}},
/* Bài7 食物名词搭配 */
{lesson:7,titleVN:"Danh từ đồ ăn",titleCN:"食物名词用法",grammar:[{pattern:"Ăn + món ăn",explanationVN:"Động từ ăn đi kèm thức ăn",explanationCN:"ăn搭配各类食物",examples:[{vn:"Ăn phở",cn:"吃河粉"}]}},
/* Bài8 饮品句型 */
{lesson:8,titleVN:"Động từ uống",titleCN:"动词uống饮用",grammar:[{pattern:"Uống + đồ uống",explanationVN:"uống chỉ các loại nước giải khát",explanationCN:"uống搭配所有饮品",examples:[{vn:"Uống trà",cn:"喝茶"}]}},
/* Bài9 购物基础句型 */
{lesson:9,titleVN:"Câu hỏi giá tiền",titleCN:"询问价格句型",grammar:[{pattern:"[Vật] bao nhiêu tiền?",explanationVN:"Mẫu hỏi giá hàng hóa",explanationCN:"询问商品价格固定句式",examples:[{vn:"Áo này bao nhiêu tiền?",cn:"这件衣服多少钱？"}]}},
/* Bài10 交通出行 */
{lesson:10,titleVN:"Cách nói phương tiện giao thông",titleCN:"交通出行表达",grammar:[{pattern:"Đi bằng + xe",explanationVN:"Chỉ phương tiện di chuyển",explanationCN:"表示乘坐某种交通工具",examples:[{vn:"Đi bằng xe máy",cn:"骑摩托"}]}]},
/* Bài11 职业句型 */
{lesson:11,titleVN:"Câu nói nghề nghiệp",titleCN:"职业表达",grammar:[{pattern:"Tôi là + nghề",explanationVN:"Diễn tả công việc bản thân",explanationCN:"介绍自身职业",examples:[{vn:"Tôi là giáo viên",cn:"我是老师"}]}},
/* Bài12 身体部位 */
{lesson:12,titleVN:"Danh từ bộ phận cơ thể",titleCN:"身体名词",grammar:[{pattern:"[Bộ phận] của tôi",explanationVN:"Chỉ bộ phận cơ thể mình",explanationCN:"我的身体部位",examples:[{vn:"Đầu của tôi",cn:"我的头"}]}},
/* Bài13 穿戴动词 Mặc/Đội */
{lesson:13,titleVN:"Động từ mặc, đội",titleCN:"穿戴动词区分",grammar:[
{pattern:"Mặc + quần áo, váy, áo",explanationVN:"mặc dùng cho quần áo thân",explanationCN:"mặc用于衣裤裙子"},
{pattern:"Đội + mũ, nón",explanationVN:"đội chỉ đội trên đầu",explanationCN:"đòi用于帽子等头部配饰"}
]},
/* Bài14 天气描述 */
{lesson:14,titleVN:"Miêu tả thời tiết",titleCN:"天气描述句型",grammar:[{pattern:"Trời + tính từ thời tiết",explanationVN:"Trời đứng đầu miêu tả thời tiết",explanationCN:"Trời开头描述天气",examples:[{vn:"Trời nắng",cn:"天晴"}]}},
/* Bài15 家居名词 */
{lesson:15,titleVN:"Danh từ đồ đạc trong nhà",titleCN:"家居词汇用法",grammar:[{pattern:"[Đồ vật] trong + phòng",explanationVN:"Chỉ đồ đạc trong từng căn phòng",explanationCN:"各房间内物品",examples:[{vn:"Bàn trong phòng khách",cn:"客厅桌子"}]}},
/* Bài16 城市地点 */
{lesson:16,titleVN:"Địa điểm trong thành phố",titleCN:"城市地点名词",grammar:[{pattern:"Đến + địa điểm",explanationVN:"Đến chỉ đi tới nơi chốn",explanationCN:"đến表示去往某地",examples:[{vn:"Đến bệnh viện",cn:"去医院"}]}},
/* Bài17 餐厅点餐 */
{lesson:17,titleVN:"Câu gọi món ăn",titleCN:"点餐对话语法",grammar:[{pattern:"Tôi muốn gọi + món",explanationVN:"Mẫu yêu cầu gọi đồ ăn",explanationCN:"想要点餐句式",examples:[{vn:"Tôi muốn gọi phở",cn:"我想点河粉"}]}},
/* Bài18 看病句型 */
{lesson:18,titleVN:"Miêu tả triệu chứng bệnh",titleCN:"描述病症",grammar:[{pattern:"Tôi bị + triệu chứng",explanationVN:"bị dùng để nói đau bệnh",explanationCN:"bị表示患上不适",examples:[{vn:"Tôi bị sốt",cn:"我发烧了"}]}},
/* Bài19 酒店入住 */
{lesson:19,titleVN:"Câu đặt phòng khách sạn",titleCN:"酒店订房句式",grammar:[{pattern:"Tôi muốn đặt phòng + loại phòng",explanationVN:"Đặt trước phòng lưu trú",explanationCN:"预订客房",examples:[{vn:"Tôi muốn đặt phòng đơn",cn:"我想订单人房"}]}},
/* Bài20 银行业务 */
{lesson:20,titleVN:"Câu giao dịch ngân hàng",titleCN:"银行交易句型",grammar:[{pattern:"Tôi muốn + hành động ngân hàng",explanationVN:"Rút/gửi/chuyển tiền",explanationCN:"存取转账通用句式",examples:[{vn:"Tôi muốn rút tiền",cn:"我想取钱"}]}},
/* Bài21 邮政用语 */
{lesson:21,titleVN:"Câu gửi bưu phẩm",titleCN:"邮寄句式",grammar:[{pattern:"Gửi + đồ đến + địa chỉ",explanationVN:"Gửi thư, bưu kiện",explanationCN:"寄信、包裹",examples:[{vn:"Gửi thư đến Hà Nội",cn:"寄信到河内"}]}},
/* Bài22 工作办公 */
{lesson:22,titleVN:"Công việc và cuộc họp",titleCN:"工作会议表达",grammar:[{pattern:"Làm việc tại + nơi làm",explanationVN:"Nơi công ty, văn phòng",explanationCN:"在公司办公",examples:[{vn:"Tôi làm việc công ty",cn:"我在公司上班"}]}},
/* Bài23 电脑网络 */
{lesson:23,titleVN:"Từ vựng thiết bị điện tử",titleCN:"电子设备语法",grammar:[{pattern:"Dùng + máy/tài khoản",explanationVN:"Sử dụng máy tính, mạng",explanationCN:"使用电脑网络",examples:[{vn:"Dùng máy tính học",cn:"用电脑学习"}]}},
/* Bài24 线上支付 */
{lesson:24,titleVN:"Thanh toán điện tử",titleCN:"线上支付句型",grammar:[{pattern:"Thanh toán bằng + phương thức",explanationVN:"Thẻ, ví điện tử, mã QR",explanationCN:"各类支付方式",examples:[{vn:"Thanh toán mã QR",cn:"扫码支付"}]}},
/* Bài25 运动 */
{lesson:25,titleVN:"Động từ chơi thể thao",titleCN:"运动动词chơi",grammar:[{pattern:"Chơi + môn thể thao",explanationVN:"chơi đi kèm bóng, cầu lông",explanationCN:"球类运动用chơi",examples:[{vn:"Chơi bóng đá",cn:"踢足球"}]}},
/* Bài26 爱好 */
{lesson:26,titleVN:"Câu sở thích",titleCN:"爱好句型",grammar:[{pattern:"Tôi thích + V/N",explanationVN:"Thích đi kèm hoạt động",explanationCN:"喜欢搭配活动",examples:[{vn:"Tôi thích đọc sách",cn:"我喜欢看书"}]}},
/* Bài27 校园学习 */
{lesson:27,titleVN:"Câu học tập",titleCN:"学习句型",grammar:[{pattern:"Học + môn học",explanationVN:"Học tiếng Việt, toán",explanationCN:"学习科目",examples:[{vn:"Học tiếng Việt mỗi ngày",cn:"每天学越南语"}]}},
/* Bài28 旅游 */
{lesson:28,titleVN:"Câu du lịch",titleCN:"旅游表达",grammar:[{pattern:"Đi du lịch + địa điểm",explanationVN:"Đi tham quan nơi nổi tiếng",explanationCN:"去某地旅游",examples:[{vn:"Đi du lịch Đà Nẵng",cn:"去岘港旅游"}]}},
/* Bài29 越南文化习俗 */
{lesson:29,titleVN:"Câu lễ hội truyền thống",titleCN:"传统节日句式",grammar:[{pattern:"Dịp + lễ hội làm gì",explanationVN:"Hoạt động ngày Tết",explanationCN:"节日活动",examples:[{vn:"Dịp Tết gói bánh chưng",cn:"春节包粽子"}]}},
/* Bài30 环保主题 */
{lesson:30,titleVN:"Câu bảo vệ môi trường",titleCN:"环保句型",grammar:[{pattern:"Chúng ta nên + hành động bảo vệ môi trường",explanationVN:"Khuyên hành động xanh",explanationCN:"倡导环保行为",examples:[{vn:"Chúng ta nên trồng cây",cn:"我们应该种树"}]}]
];

//==============================
// DIALOGUES 对话数组（修复语法，删除内部const，纯对象数组）
//==============================
const DIALOGUES = [
/* Bài 2 Chào hỏi 问候对话 */
{
lesson:2,
titleVN:"Cuộc hội thoại chào hỏi tự giới thiệu",
titleCN:"问候自我介绍对话",
dialogues:[
{
titleVN:"Tình huống gặp bạn mới",
titleCN:"遇见新朋友场景",
conversation:[
{speaker:"Lan",vn:"Xin chào, bạn tên là gì?",cn:"你好，你叫什么名字？"},
{speaker:"Minh",vn:"Xin chào, tôi tên là Minh. Rất vui được gặp bạn.",cn:"你好，我叫明，很高兴认识你。"},
{speaker:"Lan",vn:"Tôi tên là Lan. Hôm nay tôi khỏe rất tốt.",cn:"我叫兰，我今天状态很好。"},
{speaker:"Minh",vn:"Vâng, tôi cũng khỏe. Tạm biệt hẹn gặp lại mai.",cn:"是的，我也很好，再见明天见。"}
]
}
]
},
/* Bài3 Gia đình */
{
lesson:3,
titleVN:"Nói về gia đình",
titleCN:"谈论家人对话",
dialogues:[
{titleVN:"Giới thiệu gia đình",titleCN:"介绍家人",conversation:[
{speaker:"Minh",vn:"Gia đình tôi có bốn người: ba mẹ anh và tôi.",cn:"我家四口人：爸妈哥哥和我。"},
{speaker:"Lan",vn:"Ba bạn làm nghề gì?",cn:"你爸爸做什么工作？"},
{speaker:"Minh",vn:"Ba tôi là bác sĩ, mẹ là giáo viên.",cn:"我爸爸是医生，妈妈是老师。"}
]}
]
},
/* Bài4 Số đếm */
{lesson:4,titleVN:"Đếm đồ vật",titleCN:"数物品",dialogues:[{conversation:[
{speaker:"Giáo viên",vn:"Có bao nhiêu quyển sách trên bàn?",cn:"桌上有多少本书？"},
{speaker:"Học sinh",vn:"Có mười quyển sách thưa cô.",cn:"老师，有十本书。"}
]}]},
/* Bài5 Thời gian */
{lesson:5,titleVN:"Hỏi ngày giờ",titleCN:"询问时间",dialogues:[{conversation:[
{speaker:"Lan",vn:"Hôm nay là thứ mấy?",cn:"今天星期几？"},
{speaker:"Minh",vn:"Hôm nay là thứ sáu, ngày mười lăm.",cn:"今天星期五，十五号。"}
]}]},
/* Bài6 Màu sắc */
{lesson:6,titleVN:"Nói màu đồ đạc",titleCN:"物品颜色对话",dialogues:[{conversation:[
{speaker:"Lan",vn:"Áo của bạn màu gì?",cn:"你的上衣什么颜色？"},
{speaker:"Minh",vn:"Áo tôi màu xanh dương rất đẹp.",cn:"我的上衣是漂亮的蓝色。"}
]}]},
/* Bài7 Thức ăn */
{lesson:7,titleVN:"Nói món ăn yêu thích",titleCN:"爱吃的食物",dialogues:[{conversation:[
{speaker:"Minh",vn:"Bạn thích ăn món gì nhất?",cn:"你最爱吃什么？"},
{speaker:"Lan",vn:"Tôi thích ăn phở mỗi buổi sáng.",cn:"我每天早上爱吃河粉。"}
]}]},
/* Bài8 Đồ uống */
{lesson:8,titleVN:"Chọn đồ uống",titleCN:"选择饮品",dialogues:[{conversation:[
{speaker:"Phục vụ",vn:"Bạn muốn uống gì ạ?",cn:"您想喝点什么？"},
{speaker:"Lan",vn:"Cho tôi một ly nước cam tươi nhé.",cn:"给我一杯鲜橙汁。"}
]}]},
/* Bài9 Mua sắm */
{lesson:9,titleVN:"Mua áo tại cửa hàng",titleCN:"商店买衣服",dialogues:[{conversation:[
{speaker:"Khách",vn:"Chiếc áo này bao nhiêu tiền?",cn:"这件衣服多少钱？"},
{speaker:"Người bán",vn:"Áo này hai trăm nghìn đồng, giá rất rẻ.",cn:"这件二十万盾，价格很便宜。"}
]}]},
/* Bài10 Giao thông */
{lesson:10,titleVN:"Hỏi phương tiện đi lại",titleCN:"出行交通",dialogues:[{conversation:[
{speaker:"Lan",vn:"Bạn đi học bằng gì?",cn:"你怎么上学？"},
{speaker:"Minh",vn:"Tôi đi xe đạp mỗi sáng.",cn:"我每天骑自行车上学。"}
]}]},
/* Bài11 Nghề nghiệp */
{lesson:11,titleVN:"Hỏi nghề nghiệp",titleCN:"询问职业",dialogues:[{conversation:[
{speaker:"Lan",vn:"Bạn làm nghề gì hiện nay?",cn:"你现在是什么工作？"},
{speaker:"Minh",vn:"Tôi là sinh viên đại học.",cn:"我是一名大学生。"}
]}]},
/* Bài12 Cơ thể */
{lesson:12,titleVN:"Miêu tả cơ thể",titleCN:"描述身体",dialogues:[{conversation:[
{speaker:"Minh",vn:"Hôm nay tôi bị đau đầu rất nhiều.",cn:"我今天头很疼。"},
{speaker:"Lan",vn:"Bạn nên nghỉ ngơi sớm nhé.",cn:"你应该早点休息。"}
]}]},
/* Bài13 Quần áo */
{lesson:13,titleVN:"Thử quần áo",titleCN:"试衣服对话",dialogues:[{conversation:[
{speaker:"Nhân viên",vn:"Bạn muốn thử chiếc váy hồng này không?",cn:"你想试这条粉色裙子吗？"},
{speaker:"Lan",vn:"Vâng, cho tôi thử một lần.",cn:"好的，给我试一下。"}
]}]},
/* Bài14 Thời tiết */
{lesson:14,titleVN:"Nói dự báo thời tiết",titleCN:"聊天气预报",dialogues:[{conversation:[
{speaker:"Minh",vn:"Ngày mai trời có mưa không?",cn:"明天会下雨吗？"},
{speaker:"Lan",vn:"Dự báo nói ngày mai trời nắng đẹp.",cn:"预报说明天晴好。"}
]}]},
/* Bài15 Nhà cửa */
{lesson:15,titleVN:"Giới thiệu căn nhà",titleCN:"介绍房屋",dialogues:[{conversation:[
{speaker:"Lan",vn:"Nhà bạn có phòng khách rộng không?",cn:"你家客厅宽敞吗？"},
{speaker:"Minh",vn:"Rất rộng, có tivi lớn ở đó.",cn:"很宽敞，那里有大屏电视。"}
]}]},
/* Bài16 Thành phố */
{lesson:16,titleVN:"Đi các địa điểm thành phố",titleCN:"城市场所对话",dialogues:[{conversation:[
{speaker:"Minh",vn:"Đường này có ngân hàng ở đâu?",cn:"这条路上银行在哪？"},
{speaker:"Lan",vn:"Ngân hàng ở bên phải quảng trường.",cn:"银行在广场右侧。"}
]}]},
/* Bài17 Nhà hàng */
{lesson:17,titleVN:"Gọi món tại nhà hàng",titleCN:"餐厅点餐",dialogues:[{conversation:[
{speaker:"Phục vụ",vn:"Xin xem thực đơn ạ?",cn:"需要菜单吗？"},
{speaker:"Lan",vn:"Cho tôi một tô phở bò và nước cam.",cn:"给我一碗牛肉河粉和橙汁。"}
]}]},
/* Bài18 Bệnh viện */
{lesson:18,titleVN:"Đi khám bệnh",titleCN:"看病对话",dialogues:[{conversation:[
{speaker:"Bác sĩ",vn:"Bạn bị triệu chứng gì?",cn:"你有什么症状？"},
{speaker:"Minh",vn:"Tôi bị sốt và ho liên tục.",cn:"我发烧还一直咳嗽。"}
]}]},
/* Bài19 Khách sạn */
{lesson:19,titleVN:"Đặt phòng lễ tân",titleCN:"前台订房",dialogues:[{conversation:[
{speaker:"Khách",vn:"Tôi muốn đặt phòng đôi một đêm.",cn:"我想订一间双人房住一晚。"},
{speaker:"Lễ tân",vn:"Được ạ, phòng tầng ba còn trống.",cn:"好的，三楼还有空房。"}
]}]},
/* Bài20 Ngân hàng */
{lesson:20,titleVN:"Giao dịch rút tiền",titleCN:"取钱对话",dialogues:[{conversation:[
{speaker:"Khách",vn:"Tôi muốn rút năm trăm nghìn đồng.",cn:"我想取五十万盾。"},
{speaker:"Nhân viên",vn:"Xin nhập mật khẩu tài khoản.",cn:"请输入账户密码。"}
]}]},
/* Bài21 Bưu điện */
{lesson:21,titleVN:"Gửi bưu kiện",titleCN:"寄包裹",dialogues:[{conversation:[
{speaker:"Khách",vn:"Tôi muốn gửi bưu kiện đến thành phố Hồ Chí Minh.",cn:"我想寄包裹到胡志明市。"},
{speaker:"Nhân viên",vn:"Xin ghi rõ địa chỉ người nhận.",cn:"请写清楚收件地址。"}
]}]},
/* Bài22 Công việc */
{lesson:22,titleVN:"Nói về công việc",titleCN:"聊工作",dialogues:[{conversation:[
{speaker:"Lan",vn:"Bạn làm việc mấy giờ mỗi ngày?",cn:"你每天工作几小时？"},
{speaker:"Minh",vn:"Tôi làm tám giờ từ thứ hai đến thứ sáu.",cn:"周一到周五工作八小时。"}
]}]},
/* Bài23 Máy tính & Internet */
{lesson:23,titleVN:"Sử dụng mạng điện thoại",titleCN:"手机上网对话",dialogues:[{conversation:[
{speaker:"Minh",vn:"Ở đây có Wi-Fi không?",cn:"这里有无线网吗？"},
{speaker:"Lan",vn:"Có, mật khẩu là viet1234.",cn:"有的，密码是viet1234。"}
]}]},
/* Bài24 Ngân hàng điện tử */
{lesson:24,titleVN:"Chuyển tiền online",titleCN:"线上转账",dialogues:[{conversation:[
{speaker:"Lan",vn:"Tôi muốn chuyển tiền cho bạn qua app.",cn:"我想通过APP转钱给你。"},
{speaker:"Minh",vn:"Được, tôi kiểm tra số dư sau.",cn:"可以，我稍后查余额。"}
]}]},
/* Bài25 Thể thao */
{lesson:25,titleVN:"Rủ chơi thể thao cuối tuần",titleCN:"周末约运动",dialogues:[{conversation:[
{speaker:"Minh",vn:"Cuối tuần đi chơi bóng đá với tôi nhé?",cn:"周末和我去踢足球吗？"},
{speaker:"Lan",vn:"Được rất vui đấy!",cn:"好呀太开心了！"}
]}]},
/* Bài26 Sở thích */
{lesson:26,titleVN:"Trao đổi sở thích",titleCN:"交流爱好",dialogues:[{conversation:[
{speaker:"Lan",vn:"Sở thích của bạn là gì?",cn:"你的爱好是什么？"},
{speaker:"Minh",vn:"Tôi thích đọc sách và nghe nhạc.",cn:"我喜欢看书听歌。"}
]}]},
/* Bài27 Giáo dục */
{lesson:27,titleVN:"Nói học tập tiếng Việt",titleCN:"聊越南语学习",dialogues:[{conversation:[
{speaker:"Giáo viên",vn:"Bạn ôn bài mỗi tối không?",cn:"你每晚复习吗？"},
{speaker:"Học sinh",vn:"Vâng, tôi học từ vựng mỗi tối.",cn:"是的，我每晚背单词。"}
]}]},
/* Bài28 Du lịch */
{lesson:28,titleVN:"Lên kế hoạch du lịch",titleCN:"规划旅行",dialogues:[{conversation:[
{speaker:"Minh",vn:"Kỳ nghỉ chúng ta đi du lịch Đà Nẵng được không?",cn:"假期我们去岘港好不好？"},
{speaker:"Lan",vn:"Tôi rất mong chuyến đi đó!",cn:"我很期待这次出行！"}
]}]},
/* Bài29 Văn hóa Việt Nam */
{lesson:29,titleVN:"Nói về Tết Nguyên Đán",titleCN:"聊春节习俗",dialogues:[{conversation:[
{speaker:"Lan",vn:"Dịp Tết gia đình bạn làm gì?",cn:"春节你家做什么？"},
{speaker:"Minh",vn:"Chúng tôi gói bánh chưng và nhận lì xì.",cn:"我们包粽子、收红包。"}
]}]},
/* Bài30 Môi trường */
{lesson:30,titleVN:"Bảo vệ môi trường cùng nhau",titleCN:"环保对话",dialogues:[{conversation:[
{speaker:"Minh",vn:"Chúng ta nên làm gì để bảo vệ môi trường?",cn:"我们该怎么做保护环境？"},
{speaker:"Lan",vn:"Phân loại rác và trồng nhiều cây xanh.",cn:"垃圾分类、多种绿树。"}
]}]}
];
