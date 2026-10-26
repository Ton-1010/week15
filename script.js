const foodList = [
    {
        name: "ข้าวมันไก่",
        desc: "ไก่ต้มเนื้อนุ่มฉ่ำ เสิร์ฟพร้อมข้าวมันหอมๆ และน้ำจิ้มเต้าเจี้ยวสูตรเด็ด",
        price: "50 - 65 บาท",
        img: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rpOetuLxWtDW4pGVxTIT2bhWuo8KUmcxGVIisEysxd9YsSVQ0b.jpg"
    },
    {
        name: "ผัดไทยกุ้งสด",
        desc: "เส้นจันทน์เหนียวนุ่ม ผัดซอสผัดไทยรสเข้มข้น เครื่องเคียงครบครันพร้อมกุ้งสดตัวโต",
        price: "70 - 90 บาท",
        img: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa7HSof3IKxOXbUEyRuvvbNbmFc2xKRJMFiPVZ5I8hrmgIYDLCrAD.jpg"
    },
    {
        name: "ส้มตำไทย",
        desc: "มะละกอสับสดกรอบ ตำคลุกเคล้าครบรส เปรี้ยว หวาน เค็ม เผ็ดกำลังดี โรยถั่วลิสงคั่วหอมๆ",
        price: "40 - 55 บาท",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7RtvfsVSrg42CynoMnZVXlIulpgSW1QQOGdnhpqlDhYAm1NUa7JV36FP&s=10"
    },
    {
        name: "ข้าวผัดกะเพราไข่ดาว",
        desc: "เมนูสิ้นคิดแต่ฟินสุดขีด ใบกะเพราผัดพริกแห้งหอมฉุน ราดข้าวสวยร้อนๆ คู่กับไข่ดาวขอบกรอบ",
        price: "50 - 60 บาท",
        img: "https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/minced-pork-and-basil-fried-rice-with-lava-fried-egg/3be1b76f-ddbe-4f1c-a73c-0f894d66ba1c_header.jpg"
    },
    {
        name: "ต้มยำกุ้งน้ำข้น",
        desc: "ซุปต้มยำรสแซ่บถึงเครื่องสมุนไพร ทั้งข่า ตะไคร้ ใบมะกรูด ใส่กุ้งและเห็ดฟางรสชาติกลมกล่อม",
        price: "120 - 150 บาท",
        img: "https://s359.kapook.com/pagebuilder/bfc6a9f5-2465-4c9b-84dc-d090e6b78d85.jpg"
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
    foodPrice.innerText = selectedFood.price;
    foodImg.src = selectedFood.img;
}

randomBtn.addEventListener("click", randomFood);