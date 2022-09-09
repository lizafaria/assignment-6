const allcategory = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => categoriesItem(data.data.news_category))
    .catch((error) => console.log(error))
}