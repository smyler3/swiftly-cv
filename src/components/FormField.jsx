import { memo } from "react";
import "../styles/FormField.css";

const FormField = memo(({ label, id, name, type, value, onChange }) => {
    return (
        <>
        {type === 'textarea' ? (
            <div className='form-field-container'>
                <label htmlFor={id}>{label}</label>
                <textarea 
                    id={id} 
                    name={name} 
                    value={value} 
                    onChange={onChange}
                />
            </div>
        ) : type === 'date' ? (
            <span className='date-field-container'>
                <label htmlFor={id}>{label}</label>
                <input 
                    type={type} 
                    id={id} 
                    name={name} 
                    value={value} 
                    onChange={onChange}
                />
            </span>
        ) : (
            <div className='form-field-container'>
                <label htmlFor={id}>{label}</label>
                <input 
                    type={type} 
                    id={id} 
                    name={name} 
                    value={value} 
                    onChange={onChange}
                /> 
            </div>
        )}
        </>
    );
});

export default FormField;