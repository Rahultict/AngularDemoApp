export interface UsersInterface {
    "id": number
    "name": string
    "username": string
    "email": string
    "address":UserAddressInterface,
    "phone": string
    "website": string,
    "company" : UserCompanyInterface


}
interface UserAddressInterface{
    "street": string
    "suite": string
    "city": string
    "zipcode": string
    "geo": {
        "lat": number
        "lng": number
    }
}
interface UserCompanyInterface{
    "name": string
    "catchPhrase": string
    "bs": string
}