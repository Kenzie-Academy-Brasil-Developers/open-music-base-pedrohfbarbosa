function filterAlbum(categoryId) {
    if (categoryId == 0){
        return products
    }
    return products.filter((element) => (element.category == categoryId))
}

const allStyles = [...document.querySelectorAll(".music-style-li")]

allStyles.forEach((element) => {

    element.addEventListener("click", function(){
        let categoryIdElement = Number(element.id.substring(6))

        categoriesIndex = categoryIdElement

        let newArr = filterAlbum(categoriesIndex)

        if (newArr.length > 0){   
            inputRange.max = maxPrice(newArr)
            inputRange.value = maxPrice(newArr)       
            maxRange.innerHTML = `Até R$ ${inputRange.value}`
            
            listAlbums(newArr)            
        }else{
            albumsList.innerHTML = `<p>Nenhum álbum da categoria ${categories[categoriesIndex]} encontrado</p>`

            inputRange.max = maxPrice(newArr)
            inputRange.value = maxPrice(newArr)

            maxRange.innerHTML = `Até R$ ${inputRange.value}`
        }            
    })
})

