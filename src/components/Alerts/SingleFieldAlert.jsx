import { toast } from 'react-hot-toast';

const validateField = (field, value) => {
    console.log(field,"fleid");
    console.log(value,"value");
    // if (!value) {
    //     toast.error(`${field.label} is required.`);
    //     return false;
    // }
    // return true;
};

export default validateField;