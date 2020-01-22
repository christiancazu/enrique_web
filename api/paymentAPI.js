import { api } from "./config/api"
import { PAYMENT } from "./config/urls"

export default $axios => ({
  create: (payload = {}) => api($axios).post(PAYMENT, payload),
})
