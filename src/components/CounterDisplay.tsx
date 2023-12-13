import {useAppStore} from "../store";

export function CounterDisplay() {
    const count = useAppStore((state) => state.count);
    console.log('CounterDisplay render', count);
    return <div className='text-2xl'>
        Count is {count}
    </div>;
}
