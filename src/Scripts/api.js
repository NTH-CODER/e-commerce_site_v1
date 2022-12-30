const row = document.getElementById('shopRow');

// getting third party api with the js fetch method
getShopItems();

function getShopItems() {
    fetch('https://fakestoreapi.com/products?limit=8')
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            showShopItems(data);
        })
}

// get shop items according to search


function showShopItems(data) {
    row.innerHTML = '';

    data.forEach(items => {
        const { category, image, price, description, titel } = items;
        const itemEl = document.createElement('div');
        itemEl .classList.add('col-md-3');

        itemEl.innerHTML = `
            <div class="border mt-3 bg-light p-2 rounded rounded-3">
                <div class="img_box position-relative">
                    <img src="${image}" class="rounded rounded-3" width="245" height="200" alt="${description}">

                    <div class="categori_badge position-absolute bg-danger text-white shadow-sm p-2 rounded rounded-2 top-0 end-0 mt-2 me-2">
                        ${category}
                    </div>
                </div>

                <div class="mt-3 ps-2 pe-2">
                    <h5 class="text-truncate">${description}</h5>

                    <p class="mt-2 small text-muted text-truncate">
                        ${description}
                    </p>

                    <div class="mt-2">
                        <div class="d-flex">
                            <div class="me-auto">
                                <h5>$ ${price}</h5>
                            </div>

                            <div>
                                <div class="d-flex">
                                    <a href="#" class="text-decoratin-none text-muted">
                                        <i class="far fs-5 fa-heart"></i>
                                    </a>

                                    <a href="#" class="text-decoratin-none text-muted ms-3">
                                        <i class="fas fs-5 fa-shopping-bag"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `

        row.appendChild(itemEl);
    });
}