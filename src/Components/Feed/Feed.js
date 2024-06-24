import { FeedItem } from "./FeedItem";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { IntersectionComponent } from "./IntersectionComponent";

export const Feed = ({
  feeds = [],
  bannerPosts = [],
  fetchNextData,
  setFeedData,
}) => {
  const { lastProductIndex: lastFeedIndex, onVisible } = useInfiniteScroll({
    data: feeds,
    fetchNextData,
  });

  return (
    <div className="w-full">
      <div className="text-center mt-8">
        <div className="text-3xl font-bold ">
          Infinite scroll
        </div>
      </div>

      {feeds.map((feed, index) => (
        <div
          className="flex justify-center"
          key={`${feed.id}-${index}`}
        >
          {lastFeedIndex === index ? (
            <IntersectionComponent
              onVisible={onVisible}
              lastProductIndex={lastFeedIndex}
            >
              <FeedItem
                feed={feed}
                setFeedData={setFeedData}
                idxPost={index}
                bannerPosts={bannerPosts}
              />
            </IntersectionComponent>
          ) : (
            <FeedItem
              feed={feed}
              setFeedData={setFeedData}
              idxPost={index}
            />
          )}
        </div>
      ))}
    </div>
  );
};
