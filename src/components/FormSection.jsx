import "../styles/FormSection.css";
import FormField from "./FormField";
import DeleteButton from "./DeleteButton";
import { memo } from "react";

const FormSection = memo(({ sectionData, fields, handleChange, isDeleteable, handleDeleteSection }) => (
    <div className={`form-section ${isDeleteable ? 'deleteable-form-section' : ''}`}>
        {isDeleteable && <DeleteButton onClick={() => handleDeleteSection(sectionData.sectionID)} />}
        {fields.map(field => (
            <FormField
                key={field.name + sectionData.sectionID}
                label={field.label}
                id={field.name + sectionData.sectionID}
                name={field.name}
                type={field.type}
                value={sectionData[field.name]}
                onChange={(e) => handleChange(e, sectionData.sectionID)}
            />
        ))}
    </div>
));

export default FormSection;