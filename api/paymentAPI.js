import { api } from "./config/api";
import { ELEVATION } from "./config/urls";

export default $axios => ({
    get: (payload = {}) => api($axios).get(ELEVATION, payload),
    create: (payload = {}) => api($axios).post(ELEVATION, payload),
    delete: (payload = {}) => api($axios).delete(ELEVATION, payload.id)
})
