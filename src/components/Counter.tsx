import {useAppStore} from "../store";

export function Counter() {
    const {count, increment, decrement} = useAppStore();

    console.log('Counter render', count);
    return (
        <div className='flex gap-2 items-center'>
            <button className='py-2 px-4 bg-slate-800 text-white' onClick={decrement}>-</button>
            <div className='p-4'>{count}</div>
            <button className='py-2 px-4 bg-slate-800 text-white' onClick={increment}>+</button>
        </div>
    );
}
