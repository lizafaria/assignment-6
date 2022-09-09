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

const bannerDetails =(category_id)=>{
    spinnerLoding(true)
      const url=`https://openapi.programming-hero.com/api/news/category/${category_id}`
          fetch(url)
          .then(res => res.json())
          .then((data)=>{
            spinnerLoding(false)
            let localdata=data.data
            localdata.sort((a,b) => b.total_view -a.total_view)
            showPostDetails(localdata);
          } )
          .catch((error) =>{
            spinnerLoding(false)
            console.log(error)
          })
           
  }

  const showPostDetails =(allData)=>{
    const cardDetails = document.getElementById('banner-details');
    // exploring Items
    const searchingItem = document.getElementById('exploring-item');
    
    const exploringResult = allData.length ;
    if(exploringResult <= 0){
      exploringItem.innerText = 'No Content Available'
    } else{
      exploringItem.innerText= exploringResult + ''+ 'Result Found'
    }
    // banner Details
  
    bannerDetails.textContent='';
    allData.forEach( data =>{
        const {title , image_url, details, author,total_view, _id } = data;
        const {img , name, published_date} = author;
        const createDiv = document.createElement('div');
    createDiv.classList.add('col');

    createDiv.innerHTML=`
    <div class="card mb-3" style="width: 100%; height: 200px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${image_url}" class="rounded-start" alt="..." style="width: 100%; height: 200px;">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${title.length > 40 ? title.slice(0,40)+'...' : title}</h5>
          <p class="card-text">${details.length > 100 ? details.slice(0,100) + '...' : details }</p>
          <small class=" d-flex">
        <div class="container">
            <div class="row">
                <div class="col">
                <div class="d-flex">
                    <img src="${img}" class="rounded-start" alt="..." style="width: 30px; height: 30px; ">
                    <p>${name.length > 6 ? name.slice(0,6)+'...' : name}</p>
                    </div>
                 </div>
                <div class="col d-flex">
                <i class="fa fa-sharp fa-solid fa-eye me-1 mt-1"></i>
                    <p>${total_view}</p>
                 </div>
                <div class="col">
                    <button class="active bg-dark text-white p-1 rounded" onclick="authorDetails('${_id}')" href="#" style="text-decoration: none"  data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
                </div>
            </div>
        </div>
         </small>
        </div>
      </div>
    </div>
  </div>
    `
    bannerDetails.appendChild(createDiv);
    spinnerLoding(false);

    })
    

  }
  