import * as actionTypes from "./actionTypes"

export function changeCategory(category){
    return {
        type:actionTypes.GET_PRODUCTS_SUCCESS, 
        payload:category
    };
}

export function getProductsSuccess(categories){
    return {
        type:actionTypes.GET_PRODUCTS_SUCCESS, 
        payload:categories
    };
}

export function getProducts(categoryId){
    return function(dispatch){
        //debugger;
        let url = "http://localhost:3000/products";
        if(categoryId){
            url = url + "?categoryId="+categoryId
        }
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)));


    }
}