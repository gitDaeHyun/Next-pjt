import { useState, useCallback } from 'react';


export function useInput(initialValue : any, submitAction : any) {
    const [inputValue, setInputValue] = useState(initialValue);

    const handleChange = (e : any) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = useCallback(() => {
        submitAction(inputValue);
        setInputValue('');
        alert("아이디가 저장되었슴니다")
      }, [inputValue, submitAction]);

    return [inputValue, handleChange, handleSubmit];
    }

export default useInput;