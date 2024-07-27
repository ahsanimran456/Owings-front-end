import { toast } from 'react-hot-toast';

const validateField = (field, value) => {
    console.log(field, "fleid");
    console.log(value, "value");

    const verifyName = (value, name) => {
        if (!value || value.length < 3) {
            toast.error(`${name} must be longer than 3 characters.`, {
                position: "top-right"
            });
            return true;
        }
        return false;
    };


    const verifyEmail = (value, name) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            toast.error(`${name} is invalid.`, {
                position: "top-right"
            });
            return true;
        }
        return false;
    };

    const verifyPhoneNumber = (value, name) => {
        const phoneNumberRegex = /^(\+?[0-9]{1,3})?[\s.-]?[0-9]{6,14}$/;
        if (!phoneNumberRegex.test(value)) {
            toast.error(`${name} is invalid.`, {
                position: "top-right"
            });
            return true;
        }
        return false;
    };

    const verifyPoc = (value, name) => {
        if (!value || value.length < 3) {
            toast.error(`${name} must be longer than 3 characters.`, {
                position: "top-right"
            });
            return true;
        }
        return false;
    };

    const verifyCountry = (value, name) => {
        if (!value) {
            toast.error(`Please select your ${name} `, {
                position: "top-right"
            });
            return true;
        }
        return false;
    };

    const verifyPassword = (value, name) => {
        const passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-])(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(value)) {
            toast.error(`Please ensure your ${name} is at least 8 characters long and contains at least one special character.`, {
                position: "top-right"
            });
            return true;
        }
        return false;
    };

    switch (field.name) {
        case "business_name":
            return verifyName(value, field.label);
        case "name":
            return verifyName(value, field.label);
        case "email":
            return verifyEmail(value, field.label);
        case "phone_number":
            return verifyPhoneNumber(value, field.label);
        case "poc":
            return verifyPoc(value, field.label);
        case "poc_cell":
            return verifyPhoneNumber(value, field.label);
        case "country":
            return verifyCountry(value, field.label);
        case "city":
            return verifyCountry(value, field.label);
        case "password":
            return verifyPassword(value, field.label);
        case "password_confirmation":
            return verifyPassword(value, field.label);
        default:
            return false;
    }

};

export default validateField;