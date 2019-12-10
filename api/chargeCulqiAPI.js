import { api } from "./config/api";
import { CHARGE } from "./config/urls";

export default $axios => ({
    create: (payload = {}) => api($axios).post(CHARGE, payload),
})
