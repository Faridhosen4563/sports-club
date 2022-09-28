
import './Playing.css'

const Exercise = ({ cart, time }) => {
    let total = 0;
    for (const sport of cart) {
        total = total + sport.time;
    }
    return (
        <div className='my-12'>
            <p className='text-xl font-medium'>Playing Details</p>
            <div className='my-4 bg-slate-300 py-2 px-4 rounded-md css-custom'>
                <h2 className='text-base font-medium'>Playing Time</h2>
                <p>{total}min</p>
            </div>
            <div className='my-4 bg-slate-300 py-2 px-4 rounded-md css-custom'>
                <h2 className='text-base font-medium'>Break Time</h2>
                <p>{time}min</p>
            </div>
        </div>
    );
};

export default Exercise;