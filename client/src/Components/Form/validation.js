import * as yup from "yup"

export const validationSchema = yup.object({
    name: yup
        .string()
        .required("Enter your name")
        .min(2, "Name is too short"),
    lastName: yup
        .string()
        .required("Enter your last name")
        .min(2, "Last name is too short"),
    age: yup
        .number()
        .required("Enter your age")
        .integer("enter integer number")
        .positive("enter the correct age"),
    address: yup
        .string()
        .required("Enter your address")
        .min(5, "too short")
        .min(2, "address is too short"),
    phone: yup
        .number("Enter you phone number")
        .required("Enter your phone")


}) 