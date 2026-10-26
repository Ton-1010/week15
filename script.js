const foodList = [
    {
        name: "ข้าวมันไก่",
        desc: "ไก่ต้มเนื้อนุ่มฉ่ำ เสิร์ฟพร้อมข้าวมันหอมๆ และน้ำจิ้มเต้าเจี้ยวสูตรเด็ด",
        price: "50 - 65 บาท",
        img: "https://unsplash.com"
    },
    {
        name: "ผัดไทยกุ้งสด",
        desc: "เส้นจันทน์เหนียวนุ่ม ผัดซอสผัดไทยรสเข้มข้น เครื่องเคียงครบครันพร้อมกุ้งสดตัวโต",
        price: "70 - 90 บาท",
        img: "https://unsplash.com"
    },
    {
        name: "ส้มตำไทย",
        desc: "มะละกอสับสดกรอบ ตำคลุกเคล้าครบรส เปรี้ยว หวาน เค็ม เผ็ดกำลังดี โรยถั่วลิสงคั่วหอมๆ",
        price: "40 - 55 บาท",
        img: "https://unsplash.com"
    },
    {
        name: "ข้าวผัดกะเพราไข่ดาว",
        desc: "เมนูสิ้นคิดแต่ฟินสุดขีด ใบกะเพราผัดพริกแห้งหอมฉุน ราดข้าวสวยร้อนๆ คู่กับไข่ดาวขอบกรอบ",
        price: "50 - 60 บาท",
        img: "https://unsplash.com"
    },
    {
        name: "ต้มยำกุ้งน้ำข้น",
        desc: "ซุปต้มยำรสแซ่บถึงเครื่องสมุนไพร ทั้งข่า ตะไคร้ ใบมะกรูด ใส่กุ้งและเห็ดฟางรสชาติกลมกล่อม",
        price: "120 - 150 บาท",
        img: "https://unsplash.com"
    }
];

const randomBtn = document.getElementById("random-btn");
const foodName = document.getElementById("food-name");
const foodDesc = document.getElementById("food-desc");
const foodPrice = document.getElementById("food-price");
const foodImg = document.getElementById("food-img");

function randomFood() {

    const randomIndex = Math.floor(Math.random() * foodList.length);
    const selectedFood = foodList[randomIndex];

    foodName.innerText = selectedFood.name;
    foodDesc.innerText = selectedFood.desc;
    foodPrice.innerText = 'ราคา ${selectedFood.price}';
    foodImg.src = selectedFood.img;
}

randomBtn.addEventListener("click", randomFood);