const BASE_URL = 'https://thatcopy.pw/catapi/rest/';


const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    return jason.webpurl;
  }  catch (e) {
    console.log(e.messege);
  }
};

const loadImg = async () => {
  const catImg = document.getElementById('cat');
  catImg.src = await getCats();
};

loadImg();

const catBtn = document.getElementById('change-cat');
catBtn.addEventListener('click', loadImg);

