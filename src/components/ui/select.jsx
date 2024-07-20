import * as React from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import ReactSelect from 'react-select'; // Renamed to avoid naming conflict

const CustomSelect = React.forwardRef(({ className, placeholder, options, icon, ...props }, ref) => {
    const radius = 100; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: "none", // Remove default border
            boxShadow: "none", // Remove default box shadow
            padding: 0, // Remove default padding
            // minHeight: "auto", // Adjust height as needed
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "var(--neutral-400)", // Customize placeholder color
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            display: "none", // Hide the dropdown indicator
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: "none", // Hide the line separator
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "var(--blue-500)" : "white", // Example of option background color change
            color: state.isSelected ? "white" : "black", // Example of option text color change
        }),
        // Add more styles as needed for other elements
    };

    return (
        <motion.div
            style={{
                background: useMotionTemplate`
                radial-gradient(
                    ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                    var(--blue-500),
                    transparent 80%
                )
                `,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="p-[2px] rounded-lg transition duration-300 group/input"
        >

            <div className="relative flex items-center">
                <ReactSelect
                    className={cn(
                        `flex-1 h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md text-sm file:border-0 file:bg-transparent 
                        file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                        focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                        disabled:cursor-not-allowed disabled:opacity-50
                        dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                        group-hover/input:shadow-none transition duration-400 `, // Added padding to the right
                        className
                    )}
                    ref={ref}
                    // value={selectedOption}
                    // onChange={handleChange}
                    options={options}
                    placeholder={placeholder}
                    styles={customStyles} // Apply custom styles
                />
                {icon && (
                    <span className="absolute right-3">
                        {icon}
                    </span>
                )}
            </div>

        </motion.div>
    );
});
CustomSelect.displayName = "CustomSelect";

export { CustomSelect };
