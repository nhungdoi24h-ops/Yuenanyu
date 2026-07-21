/*=========================================
 VietMiniApp
 service-worker.js
=========================================*/
// Đổi version để xóa cache cũ
const CACHE_NAME = "vietminiapp-v2";
const FILES_TO_CACHE = [
"./",
"index.html",
"course.html",
"lesson.html",
"progress.html",
"favorites.html",
"settings.html",
"quiz.html",
"style.css",
"lesson.css",
"app.js",
"lesson.js",
"quiz.js",
"data.js",
"manifest.json",
"icons/icon-192.png",
"icons/icon-512.png"
];
// Cài đặt
self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache=>cache.addAll(FILES_TO_CACHE))
);
});
// Kích hoạt xóa cache cũ
self.addEventListener("activate", event => {
event.waitUntil(
caches.keys()
.then(keys=>{
return Promise.all(
keys.map(key=>{
if(key!==CACHE_NAME){
return caches.delete(key);
}
})
);
})
);
});
// Đọc dữ liệu
self.addEventListener("fetch", event=>{
event.respondWith(
caches.match(event.request)
.then(response=>{
return response || fetch(event.request);
})
);
});
