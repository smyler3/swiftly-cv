import { useState } from "react";
import '../styles/FormWrapper.css';

const FormField = ({ label, type, name, placeholder, pattern=null }) => {
    const [value, setValue] = useState('');

    return (
        <div className="form-container">
            <label htmlFor={`${name}`}>{label}</label>
            <input 
                type={`${type}`} 
                id={`${name}`} 
                name={`${name}`} 
                placeholder={`${placeholder}`} 
                value={value}
                pattern={pattern ? pattern : null}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

const FormWrapper = ({ title, fields }) => {
    return (
        <div className="form-wrapper">
            <h2 className="form-title">{title}</h2>
            <form action="" className="form">
                {fields.map((field) => (
                    <FormField
                        key={field.name}
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        pattern={field.pattern}
                    />
                ))}
            </form>
        </div>
    )
}

export default FormWrapper;