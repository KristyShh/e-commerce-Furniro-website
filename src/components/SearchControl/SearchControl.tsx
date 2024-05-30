import { useState } from 'react';
import './SearchControl.scss';

interface SearchControlProps {
    onChange: (value: string) => void; 
}

export const SearchControl = ({ onChange }: SearchControlProps) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
            onChange(newValue);
            setValue(newValue);   
    };
    return (
        <div className='search-control'>
            <input
           
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Search"
            />
            {value && (
                <img 
                    src="../../../public/img/clear.svg" 
                    alt="clear" 
                    className="clear" 
                    onClick={() => { 
                        setValue(''); 
                        onChange(''); 
                    }} 
                />
            )}
        </div>
    );
};





