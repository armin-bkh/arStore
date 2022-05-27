import { http } from "./httpServces";

export function getProducts() {
  return http.get("/product");
}
