import { Feed } from "@/Components/Feed/Feed";
import { getPostFeeds } from "@/service/feed.service";
import { scrollToElement } from "@/utils/common";
import { useCallback, useEffect, useState } from "react";

export default function Home({ data }) {
  const [feedData, setFeedData] = useState(data?.posts || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const currentFeed = localStorage.getItem("feed") || null;

    if (currentFeed) {
      scrollToElement(currentFeed, 20); // Adjust the offset value as needed
    }

    fetchNextData(0); // Initial fetch
  }, []);

  const fetchNextData = useCallback(async (start = 0) => {
    localStorage.removeItem("feed");
    setLoading(true);
    setError(null);
    try {
      const res = await getPostFeeds(start);
      setLoading(false);
      if (res?.status === 200) {
        setFeedData((prev) => [...prev, ...res.data]);
      } else {
        setError(res.message);
      }
    } catch (error) {
      setLoading(false);
      setError("Failed to fetch data");
    }
  }, []);

  return (
    <>
      <div className="home-page max-w-full md:max-w-7xl md:pt-0 mx-auto relative">
        <div>
          <Feed
            feeds={feedData}
            fetchNextData={fetchNextData}
            setFeedData={setFeedData}
            key="feed"
          />
        </div>
      </div>
      {loading && (
        <div className="flex justify-center p-10">
          <div className="transform translate-x-1/2 translate-y-1/2 z-10">
            <div className="border-t border-solid animate-spin rounded-full border-black border-8 h-10 w-10"></div>
          </div>
        </div>
      )}
    </>
  );
}
