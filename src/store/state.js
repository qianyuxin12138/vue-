const state = {
  userName: localStorage.getItem("userName") ? JSON.parse(localStorage.getItem("userName")) : "",//用户名
  carts:localStorage["carts"]?JSON.parse(localStorage["carts"]): [], //购物车
}

export default state