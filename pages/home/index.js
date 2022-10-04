const musicStyles = document.querySelector(".music-styles")

const albumsList = document.querySelector(".list-albums")

let categoriesIndex = 0

function createMusicStyle(style){
    let li = document.createElement("li")
    li.classList.add("music-style-li")

    let btnStyle = document.createElement("button")
    btnStyle.classList.add("font-1", "btn-music-style")
    
    btnStyle.innerText = style
    
    li.appendChild(btnStyle)

    return li
}

function listStyles() {
    musicStyles.innerHTML = ""

    categories.forEach((element, i) => {
        let itemToList = createMusicStyle(element)

        itemToList.id = `style_${i}`

        musicStyles.appendChild(itemToList)
    })
}

listStyles()

function maxPrice(arr) {
    if (arr.length > 0){
        let max = arr[0].price            
        arr.forEach((element)=>{
            if(element.price > max){
            max = element.price
        }})    
        return max    
    }else{
        return 0
    }
}

let maxRange = document.getElementById("max-range")
maxRange.innerHTML = `Até R$ ${maxPrice(products)}`

let inputRange = document.getElementById("price-range")
inputRange.max = maxPrice(products)
inputRange.value = maxPrice(products)

inputRange.addEventListener("mousemove", function() {   
    maxRange.innerHTML = `Até R$ ${inputRange.value}`

    let filteredArr = filterAlbum(categoriesIndex)  

    let maxValueFilter = inputRange.value
    
    if (filteredArr.length > 0) {
        let newArrFilteredValue = filteredArr.filter((element) => element.price <= maxValueFilter)
    
        if (newArrFilteredValue.length > 0){
            listAlbums(newArrFilteredValue)
        }else{
            albumsList.innerHTML = `<p>Nenhum álbum encontrado com valor menor que R$ ${maxValueFilter} na categoria ${categories[categoriesIndex]}</p>`
        }
    }
})

function createCard(item){
    let li = document.createElement("li")
    li.classList.add("card")

    li.innerHTML = `
        <div class="card-img-wrapper">
            <img src="${item.img}" alt="${item.title}">
        </div>
        <div class="card-body">
            <div class="card-body-header">
                <span>${item.band}</span>
                <span>${item.year}</span>
            </div>
            <h3 class="title-2">${item.title}</h3>
            <div class="card-body-footer">
                <span class="font-4">R$ ${(item.price).toFixed(2)}</span>
                <button class="font-1 btn-buy">Comprar</button>
            </div>
        </div>
    `
    
    return li
}

function listAlbums(arr){
    albumsList.innerHTML = ""

    arr.forEach((element) => albumsList.appendChild(createCard(element)))
}

listAlbums(products)