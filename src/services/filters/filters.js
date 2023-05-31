export function filterfood(data) {
    var foodlist = []
    console.log(data)
    for (var i in data) {
      console.log(i)
      if (data[i].tag === 'food') {
        console.log(data[i].tag)
        foodlist.push(data[i])
      }
    }
    return foodlist
  }
export function filtershopping(data) {
    var foodlist = []
    for (var i in data) {
      if (data[i].tag === 'shopping') {
        foodlist.push(data[i])
      }
    }
    return foodlist
  }
export function filtersport(data) {
    var foodlist = []
    for (var i in data) {
      if (data[i].tag === 'sport') {
        foodlist.push(data[i])
      }
    console.log('filetered')
    }
    return foodlist
  }