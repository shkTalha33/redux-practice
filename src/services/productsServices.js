import ApiUtlis from "../utils/ApiUtlis"

export const getAllProductsService = async() => {
    const res = await ApiUtlis({
        url:"products/",
        method:"GET"
    })
    return res
}