import { useState } from "react";
import '../styles/FormWrapper.css';
import Button from "./Button";
import closeIcon from "../assets/icons/closeIcon.svg"

// Default delete form button paramaters
const defaultDelFormBtn = {
    'icon': closeIcon,
    'text': null,
    'onClick': null,
    'classNames': 'del-form-btn',
}

const FormField = ({ label, type, name, placeholder, pattern=null }) => {
    const [value, setValue] = useState('');

    return (
        <div className="form-field-container">
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

const FormWrapper = ({ fields, canDelete=true }) => {
    return (
        <div className={`form-wrapper ${canDelete ? 'deleteable-form-wrapper' : ''}`}>
            {canDelete && (
                <span className="del-form-btn-wrapper">
                    <Button icon={defaultDelFormBtn.icon} text={defaultDelFormBtn.text} onClick={defaultDelFormBtn.onClick} classNames={defaultDelFormBtn.classNames} />
                </span>
            )}
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