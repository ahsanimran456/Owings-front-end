import { toast } from 'react-hot-toast';

const validateField = (field, value) => {
    console.log(field, "fleid");
    console.log(value, "value");

    const verifyname = (value) => {
        if (value.length <= 3) {
            toast.error("Value must be longer than 3 characters.");
            return false;
        }
        return true;
    };

    switch (field.name) {
        case "business_name":
            const result = verifyname(value);
            break;
        case "email":
            const result2 = verifyname();
            break;

        default:
            // Optional default case
            break;
    }
    // if (!value) {
    //     toast.error(`${field.label} is required.`);
    //     return false;
    // }
    // return true;
};

export default validateField;