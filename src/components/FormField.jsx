import "../styles/FormField.css";

const FormField = ({ label, id, name, type, value, onChange }) => (
    <div className={`form-field-container ${type === 'date' ? date-field-container : ''}`} >
        <label htmlFor={id}>{label}</label>
        {type === 'textarea' ? (
            <textarea 
                id={id} 
                name={name} 
                value={value} 
                onChange={onChange}
            />
        ) : (
            <input 
                type={type} 
                id={id} 
                name={name} 
                value={value} 
                onChange={onChange}
            />
        )}
    </div>
);

export default FormField;