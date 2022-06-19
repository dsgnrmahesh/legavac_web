import axios from "axios";
import { resolve } from "./resolve.js";
export default () => axios.get("/");

//ForCountry
export async function CandidateRegistration(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/candidateregistration`, state)
    .then((res) => res.data);
}
export async function UpdateCandidate(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/updatecandidate`, state)
    .then((res) => res.data);
}
export async function UpdateCandidateLooking(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/updatecandidatelooking`, state)
    .then((res) => res.data);
}
export async function CandidateEmployment(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iucandidateemployment`, state)
    .then((res) => res.data);
}

export async function CandidateEducation(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iucandidateeducation`, state)
    .then((res) => res.data);
}

export async function DeleteCandidateAccount(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCandidateDelete/${id}`)
    .then((res) => res.data);
}

// export async function getAffilationDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/api/legavac/getAffilationDetail`)
//       .then((res) => res.data)
//   );
// }
export async function getCandidateEducation(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getCandidateeducationDetail/${id}`
    )
    .then((res) => res.data);
}
export async function getCandidateDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCandidateDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCityDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCityDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCandidateEducationbyid(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getCandidateeducationDetailbyid/${id}`
    )
    .then((res) => res.data);
}

export async function getCandidateeducationDelete(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getCandidateeducationDelete/${id}`
    )
    .then((res) => res.data);
}
export async function getCandidateEmploymentDetailByID(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getCandidateEmploymentDetailByID/${id}`
    )
    .then((res) => res.data);
}

export async function getLoginDetail(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/getLoginDetail`, state)
    .then((res) => res.data);
}

//For Freejobalert
export async function IU_Freejobalert(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iufreejobalert`, state)
    .then((res) => res.data);
}
export async function getFreejobalertDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getFreejobalertDetailByID/${id}`)
    .then((res) => res.data);
}

export async function getPostjobDetail() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getPostjobDetail`)
    .then((res) => res.data);
}
export async function getPostjobDetailByWhereCondition(state) {
  return await axios
    .post(
      `https://api.legavac.com/api/legavac/getPostjobDetailByWhereCondition`,
      state
    )
    .then((res) => res.data);
}
export async function getPostJobForHome() {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getPostJobForHome`
    )
    .then((res) => res.data);
}
export async function getMembershipPlanForWeb() {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getMembershipPlanForWeb`
    )
    .then((res) => res.data);
}
export async function getddlforfreejob() {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getddlforfreejob`
    )
    .then((res) => res.data);
}



//upload
export async function UploadResume(state, config) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadresume`, state, config)
    .then((res) => res.data);
}

export async function getTestimonialDetailForHome() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getTestimonialDetailForHome`)
    .then((res) => res.data);
}

export async function getAffilationDetail() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getAffilationDetail`)
    .then((res) => res.data);
}
export async function getCareeradviceDetail() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCareeradviceDetail`)
    .then((res) => res.data);
}
export async function getArticleDetail() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getArticleDetail`)
    .then((res) => res.data);
}
export async function getArticleDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getArticleDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getPostedJobFilterList(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/getPostjobFilterList`, state)
    .then((res) => res.data);
}

export async function getCityForDDL() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCityforddl`)
    .then((res) => res.data);
}

export async function IU_appliedjob(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iuappliedjob`, state)
    .then((res) => res.data);
}
export async function getAppliedjobByCandidate(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getAppliedjobByCandidate/${id}`)
    .then((res) => res.data);
}
