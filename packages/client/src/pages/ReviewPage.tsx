import ReviewList from '../components/reviews/ReviewList';

const ReviewPage = () => {
    return (
        <div className="p-4 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h1 className="text-2xl font-bold mb-4">
                        Review Summarizer
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Analyze and summarize customer reviews.
                    </p>
                    <ReviewList productId={1} />
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;
