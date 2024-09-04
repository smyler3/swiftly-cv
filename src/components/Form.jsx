import { useState } from "react";
import '../styles/Form.css';
import Button from "./Button";
import closeIcon from "../assets/icons/closeIcon.svg"

// Default delete form button paramaters
const defaultDelFormBtn = {
    'icon': closeIcon,
    'text': null,
    'onClick': null,
    'classNames': 'del-form-btn',
}

const FormField = ({ containerClassName, label, type, name }) => {
    const [value, setValue] = useState('');

    return (
        <div className={`form-field-container ${containerClassName ? containerClassName : ''}`}>
            <label htmlFor={`${name}`}>{label}</label>
            {type === 'textarea' ? (
                <textarea 
                    id={name} 
                    name={name} 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                />
            ) : (
                <input 
                    type={`${type}`} 
                    id={`${name}`} 
                    name={`${name}`} 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            )}
        </div>
    );
}

const Form = ({ fields, canDelete=true }) => {
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
                        containerClassName={field.containerClassName ? field.containerClassName : null}
                        label={field.label}
                        type={field.type}
                        name={field.name}
                    />
                ))}
            </form>
        </div>
    )
}

export default Form;