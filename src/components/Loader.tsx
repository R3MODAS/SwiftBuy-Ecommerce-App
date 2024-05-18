import SkeletonCard from './SkeletonCard'

const Loader = () => {
    return (
        <div className="my-24 container">
            <div className="w-full min-h-screen flex items-center flex-wrap justify-center gap-10">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </div>
    )
}

export default Loader