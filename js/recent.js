const allcategory = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => categoriesItem(data.data.news_category))
    .catch((error) => console.log(error))
}

const categoriesItem = (items) =>{
    
    const allcategory = document.getElementById('category');
    items.forEach(item =>{
        const {category_name,category_id} = item;
        const creatLi = document.createElement('li');
        creatLi.innerHTML = `
        <li class="bg-info rounded me-3 py-2 px-3 ">
        <a class="active text-white" aria-current="page" onclick="cardDetails('${category_id}')" href="#" style="text-decoration:none">${category_name}</a>
        </li>
        `
        allcategory.appendChild(creatLi);
    }
    )
}

