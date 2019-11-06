import { api } from "./config/api";
import { CONTACT } from "./config/urls";

export default $axios => ({
    get: (payload = {}) => api($axios).get(CONTACT, payload),
    create: (payload = {}) => api($axios).post(CONTACT, payload),
    delete: (payload = {}) => api($axios).delete(CONTACT, payload.id)
})
