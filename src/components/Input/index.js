import { useCallback } from "react";
import { Container } from "./styles";
import { cep, currency, cpf, phone, cnpj } from "./masks";

function Input({
    id,
    value,
    handler,
    label,
    height,
    width,
    type,
    colorLabel,
    className,
    pattern,
    name,
    maxlength,
    mask,
    ...rest }) {

    const handleKeyUp = useCallback((e) => {

        if (mask === 'cep') {
            cep(e);
        }
        if (mask === 'currency') {
            currency(e);
        } 
        if (mask === 'cpf') {
            cpf(e);
        } 
        if (mask === 'phone') {
            phone(e)
        }

        if (mask === 'cnpj') {
            cnpj(e)
        }
        
    }, [mask]);

    return (
        <Container>
            <label>
                <input style={{
                    width: width,
                    height: height,
                }}
                    id={id}
                    value={value}
                    placeholder=" "
                    onChange={handler}
                    type={type}
                    pattern={pattern}
                    name={name}
                    maxlength={maxlength}
                    {...rest}
                    onKeyUp={handleKeyUp}
                    mask={mask}
                    autocomplete="off"
                />
                <span className={className} style={{
                    backgroundColor: colorLabel,
                }
                } >{label}</span>
            </label>
        </Container>
    );
}

export default Input;