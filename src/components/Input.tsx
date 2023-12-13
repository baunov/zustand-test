import {useAppStore} from "../store";

export function Input() {
    const {value, setValue} = useAppStore();
    console.log('Input render', value);
    return (
        <input value={value}
               onChange={(e) => setValue(e.target.value)}
               className='py-2 px-4 bg-slate-200 border border-slate-800'/>
    );
}
