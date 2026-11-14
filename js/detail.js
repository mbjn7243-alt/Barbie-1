const items = {};

/* รายการ Barbie the Three Musketeers */
items.spirited = {
  id: "spirited",
  name: "Barbie the Three Musketeers",
  group: "films",
  category: "การ์ตูน",
  maker: "วิลเลียม เลา",
  makerLabel: "ผู้กำกับ",
  caption: "ฉاกรถไฟที่ยังอยากกลับไปดู",
  description:
    "บาร์บี้กับสามทหารเสือ ",
  story:
    "เนื้อเรื่องสนุก บู๊แบบสาวๆ ปนฮาหน่อยๆ ไปดูแล้วจะติดใจ",
  image: "assets/images/collection/Baebie04.jpg",
  related: ["ram", "converse"],
};

/* รายการ Barbie A Fairy Secret */
items.ram = {
  id: "ram",
  name: "Barbie A Fairy Secret",
  group: "music",
  category: "การ์ตูน",
  maker: "William Lau และ Terry Klassen",
  makerLabel: "ผู้กำกับ",
  caption: "ฟังตั้งแต่เพลงแรกจนจบ",
  description:
    "บาร์บี้ ความลับแห่งนางฟ้า",
  story:
    "เรื่องนี้บาร์บี้กับเคนรักกันดี แต่อยู่ๆ เคนถูกนางฟ้าจับตัวไป บาร์บี้ก็ต้องไปช่วยอ่ะเนอะตามสเต็ป แอบงงหน่อยๆ ว่านางฟ้ามาจากไหน",
  image: "assets/images/collection/Barbie 07.jpg",
  related: ["prince", "budapest"],
};

/* รายการ Barbie The Princess&The Popstar*/
items.prince = {
  id: "prince",
  name: "Barbie The Princess&The Popstar",
  group: "books",
  category: "การ์ตูน",
  maker: "Antoine de Saint-Exupéry",
  makerLabel: "ผู้กำกับ",
  caption: "ซีค นอร์ตัน",
  description:
    "บาร์บี้ เจ้าหญิงและป๊อปสตาร์ " +
    "แต่มีหลายตอนที่อยากกลับมาอ่านอีก",
  story:
    "บางครั้งเปิดมาดูรูป บางครั้งก็กลับไปอ่านประโยคที่จำได้ " +
    "เรื่องนี้ก็สนุก มีซีดีซื้อเก็บไว้ด้วยไม่ได้จะอวดนะ อิอิ ไม่มีอุปสรรคไรมากมาย เพลงดี ลงตัว",
  image: "assets/images/collection/Barbie 08.jpg",
  related: ["am", "x100"],
};

/* รายการ Baebie The Pearl Princess*/
items.x100 = {
  id: "x100",
  name: "Baebie The Pearl Princess",
  group: "cameras",
  category: "การ์ตูน",
  maker: "Ezekiel Norton",
  makerLabel: "ผู้กำกับ",
  caption: "ชอบปุ่มหมุนกับหน้าตาของมัน",
  description:
    "บาร์บี้ เจ้าหญิงเงือกน้อยกับไข่มุกวิเศษ ",
  story:
    "ตอนนี้นางเงือกอีกแล้วจ้า ไม่ได้ต่อกับ Mermaid Tale นะ แถมตอนนี้โลกนางเงือกใหม่ดี สวยเฟร่อร์",
  image: "assets/images/collection/Barbie 10.jpg",
  related: ["spirited", "hobbit"],
};

/* รายการ Barbie Fairytopia: Mermaidia */
items.budapest = {
  id: "budapest",
  name: "Barbie Fairytopia: Mermaidia",
  group: "films",
  category: "การ์ตูน",
  maker: "Wes Anderson",
  makerLabel: "ผู้กำกับ",
  caption: "William Lau และ Walter P. Martishius",
  description:
 "บาร์บี้ นางฟ้าในดินแดนใต้สมุทร",
  story:
    "Mermadia ภาคสองของ Fairytopia นางเอกต้องไปช่วยเหลือดินแดนเงือกใต้ทะเล แลกเปลี่ยนปีกเป็นหาง",
  image: "assets/images/collection/Barbie 16.jpg",
  related: ["converse", "ram"],
};

/* รายการ Barbie Fairytopia: Magic of the Rainbow  */
items.am = {
  id: "am",
  name: "Barbie Fairytopia: Magic of the Rainbow ",
  group: "music",
  category: "การ์ตูน",
  maker: "Arctic Monkeys",
  makerLabel: "ผู้กำกับ",
  caption: "วิลเลียม เลา",
  description:
    "บาร์บี้ แฟรี่โทเปีย หเวทมนตร์แห่งสายรุ้ง",
  story:
    "เรื่องนี้นางเอกต้องตามไปช่วยเหลือนางฟ้ารุ่นน้องทุกคน เพราะนางร้ายนางคัมแบ็คกลับมา",
  image: "assets/images/collection/Barbie 15.jpg",
  related: ["hobbit", "x100"],
};

/* รายการ Barbie and the magic of Pegasus */
items.hobbit = {
  id: "hobbit",
  name: "Barbie and the magic of Pegasus",
  group: "books",
  category: "การ์ตูน",
  maker: "กร็ก ริชาร์ดสัน",
  makerLabel: "ผู้กำกับ",
  caption: "อยากออกเดินทางตั้งแต่เห็นปก",
  description:
    "บาร์บี้กับเวทมนตร์แห่งเพกาซัส ",
  story:
    "เรื่องนี้พ่อแม่นางโดนสาปให้เป็นหินต้องหาทางช่วย เพราะนางไม่ยอมแต่งงานกับพ่อมด ฉากสวยเวอร์ ไปดูเอง",
  image: "assets/images/collection/barbie14.jpg",
  related: ["budapest", "converse"],
};

/* รายการ Barbie in the 12 Dancing Princesses */
items.converse = {
  id: "converse",
  name: "Barbie in the 12 Dancing Princesses",
  group: "objects",
  category: "การ์ตูน",
  maker: "เกร็ก ริชาร์ดสัน",
  makerLabel: "แบรนด์",
  caption: "คู่เรียบ ๆ ที่ใส่กับอะไรก็ได้",
  description:
    "บาร์บี้กับเจ้าหญิงทั้ง 12",
  story:
    "เรื่องนี้ชอบมากๆ เจ้าหญิงเริงระบำเข้าไปดินแดนลึกลับแล้วแอบเต้นรำ แต่การเต้นรำมีข้อจำกัด อยากรู้ไปดูเอง",
  image: "assets/images/collection/Barbie-02-640x960.jpg",
  related: ["prince", "am"],
};

/* อ่าน id จาก URL */
const itemId =
  new URLSearchParams(window.location.search).get("id") || "spirited";
const item = Object.hasOwn(items, itemId) ? items[itemId] : null;

/* ฟังก์ชันแสดงข้อมูล */
function showDetail(item) {
  document.title = "Detail | Baebie";
  document.querySelectorAll("[data-field]").forEach(function (element) {
    element.textContent = item[element.dataset.field];
  });
  const image = document.querySelector("#detail-image");
  image.src = item.image;
  image.alt = item.name;
}

/* ฟังก์ชันรายการที่เกี่ยวข้อง */
function showRelated(item) {
  item.related.forEach(function (id, index) {
    const related = items[id];
    const suffix = index === 0 ? "" : "-2";
    document.querySelector("#related-link" + suffix).href =
      "detail.html?id=" + id;
    document.querySelector("#related-image" + suffix).src = related.image;
    document.querySelector("#related-name" + suffix).textContent = related.name;
    document.querySelector("#related-caption" + suffix).textContent =
      related.caption;
  });
}

/* เลือกการแสดงผล */
if (item) {
  showDetail(item);
  showRelated(item);
} else {
  document.querySelector("#detail-content").hidden = true;
  document.querySelector("#not-found").hidden = false;
  document.title = "Detail | Barbie";
}