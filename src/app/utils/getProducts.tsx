
export default async function getProducts(
    time: number = 0,
    shouldError: boolean = false
) {
    
    const res = await fetch(
        `https://calm-pink-shark-sari.cyclic.app/products`
    )
    if(!res.ok || shouldError) {
        throw new Error (`An error has occured: ${res.status}`)
    }

    return res.json()
}