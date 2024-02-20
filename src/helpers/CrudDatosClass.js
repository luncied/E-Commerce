export default class Datos {
  constructor (
    productName = '',
    description = '',
    price = 0,
    category = '',
    brand = ''
  ) {
    this.productName = productName
    this.description = description
    this.price = price
    this.category = category
    this.brand = brand
  }

  getData () {
    return {
      productName: this.productName,
      description: this.description,
      price: this.price,
      category: this.category,
      brand: this.brand
    }
  }

  clearData () {
    this.productName = ''
    this.description = ''
    this.price = 0
    this.category = ''
    this.brand = ''
  }
}
