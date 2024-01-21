export const TOKEN = "token";

export const defaultMrOption = {
  DEFAULT_CATEGORY_ID: 1,
  defaultServiceTypeId: 1,
  defaultServiceId: 1,
  defaultDoctorId: 2,
}

//Routing
const HOME_PAGE = "/"

const LOGIN_PAGE = "/login"

const UNAUTHORIZED_PAGE = "/401"

const ERROR_PAGE = "*"

const ADMIN_HOME_PAGE = "/admin/patients";

const DOCTOR_HOME_PAGE = "/doctor/patients";

const NURSE_HOME_PAGE = "/nurse/patients";

const CASHIER_HOME_PAGE = "/cashier/patients";

const MEDICAL_RECORDS_PAGE = ":id/medical-records";

const LIST_MEDICAL_RECORDS_PAGE = "/medical-records";

const LIST_MEDICAL_RECORDS_UN_CHECK_PAGE = "/medical-records/un-check";

const LIST_MEDICAL_RECORDS_UN_PAID_PAGE = "/medical-records/un-paid";

const ADMIN_CATEGORY_PAGE = "/admin/categories";
const ADMIN_SERVICE_PAGE = "/admin/services";
const ADMIN_SUPPLY_PAGE = "/admin/supplies";

const ADMIN_ACCOUNTS_PAGE = "/admin/accounts";

const DOCTOR = "/doctor";
const NURSE = "/nurse";
const CASHIER = "/cashier";
const ADMIN = "/admin";

export const ROUTE_URLS = {
  ADMIN_HOME_PAGE: ADMIN_HOME_PAGE,
  DOCTOR_HOME_PAGE: DOCTOR_HOME_PAGE,
  NURSE_HOME_PAGE: NURSE_HOME_PAGE,
  CASHIER_HOME_PAGE: CASHIER_HOME_PAGE,
  MEDICAL_RECORDS_PAGE: MEDICAL_RECORDS_PAGE,
  LIST_MEDICAL_RECORDS_PAGE: LIST_MEDICAL_RECORDS_PAGE,
  LIST_MEDICAL_RECORDS_UN_CHECK_PAGE: LIST_MEDICAL_RECORDS_UN_CHECK_PAGE,
  LIST_MEDICAL_RECORDS_UN_PAID_PAGE: LIST_MEDICAL_RECORDS_UN_PAID_PAGE,
  ADMIN_CATEGORY_PAGE: ADMIN_CATEGORY_PAGE,
  ADMIN_SERVICE_PAGE: ADMIN_SERVICE_PAGE,
  ADMIN_SUPPLY_PAGE: ADMIN_SUPPLY_PAGE,
  ADMIN_ACCOUNTS_PAGE: ADMIN_ACCOUNTS_PAGE,
  DOCTOR: DOCTOR,
  NURSE: NURSE,
  CASHIER: CASHIER,
  ADMIN: ADMIN,

  HOME_PAGE: HOME_PAGE,
  LOGIN_PAGE: LOGIN_PAGE,
  ERROR_PAGE: ERROR_PAGE,
  UNAUTHORIZED_PAGE: UNAUTHORIZED_PAGE
};