import { api } from "./config/api";
import { CONTACT } from "./config/urls";
import { SUMMARY } from "./config/urls";

export default $axios => ({
    sendEmail: (payload = {}) => api($axios).post(CONTACT, payload),
    sendSummary: (payload = {}) => api($axios).post(SUMMARY, payload),
})
