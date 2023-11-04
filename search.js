const allProduct =[
    {name : 'walton mobile', price : 12000},
    {name : 'samung mobile', price : 18000},
    {name : 'Iphone mobile', price :120000},
    {name : 'hp laptop', price : 50000},
    {name : 'Asus laptop', price : 45000},
    {name : 'makbook laptop', price : 130000},
    {name : 'apple watch', price : 25000},
    {name : 'smart watch', price : 7000},
];

function searchProduct(products, searchTxt){
     for(product of products){
        if(product.name.includes(searchTxt)) console.log(product); // when a especial product find write----> .include()
     }
}

searchProduct(allProduct,'mobile');

//------------retunr result products array---------------------------------------------

function searchProductArr(products, searchTxt){
    const result =[];
    for(product of products){
       if(product.name.includes(searchTxt)) result.push(product);
    }
    return result;
}

const finalProduct =searchProductArr(allProduct, 'laptop');
console.log(finalProduct);
