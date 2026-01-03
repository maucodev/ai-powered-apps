import { FaRegStar, FaStar } from 'react-icons/fa';

type Props = {
    value: number; // rating from 0 to 5
};

const placeholders = [1, 2, 3, 4, 5];

const StarRating = ({ value }: Props) => {
    return (
        <div className="flex gap-1 text-yellow-500">
            {placeholders.map((p) =>
                p <= value ? <FaStar key={p} /> : <FaRegStar key={p} />
            )}
        </div>
    );
};

export default StarRating;
