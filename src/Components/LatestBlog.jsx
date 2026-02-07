import { CalendarDays } from "lucide-react";

const LatestBlog = () => {
  return (
    <section className="w-full py-16 bg-red-400 text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Text Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="uppercase tracking-wide mb-2">
            Latest Blog
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Some Relationship Tips
          </h2>

          <p className="text-white/90">
            We all know that finding the perfect match might be difficult, but
            with these tips, you’ll have a better chance of success on your next
            online matrimonial site visit.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1*/}
          <div className="text-white rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac"
              alt="couple"
              className="w-full h-72 rounded-xl object-cover"
            />

            <div className="py-3">
              <h3 className="font-semibold text-2xl  mb-3">
                Don’t be stingy to say ‘Thank You’, ‘Love You’ to your partner
              </h3>

              <div className="flex items-center gap-2 text-lg">
                <CalendarDays size={16} />
                <span>Jun 28, 2021</span>
              </div>
            </div>
          </div>

          {/* Card 2*/}
          <div className=" text-white rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="couple"
              className="w-full rounded-xl h-72 object-cover"
            />

            <div className="py-3">
              <h3 className="font-semibold text-2xl  mb-3">
                Communication is the key to a healthy relationship
              </h3>

              <div className="flex items-center gap-2 text-lg">
                <CalendarDays size={16} />
                <span>Jun 28, 2021</span>
              </div>
            </div>
          </div>

          {/* Card 3*/}
          <div className=" text-white rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="couple"
              className="w-full rounded-xl h-72 object-cover"
            />

            <div className="py-3">
              <h3 className="font-semibold text-2xl  mb-3">
                Trust and honesty build stronger bonds
              </h3>

              <div className="flex items-center gap-2 text-lg">
                <CalendarDays size={16} />
                <span>Jun 28, 2021</span>
              </div>
            </div>
          </div>

        </div>

        {/* View All Blogs Button */}
        <div className="text-center">
          <button className="border border-white text-xl text-white px-10 py-3 rounded-md hover:bg-white hover:text-red-500 transition">
            View All Blogs
          </button>
        </div>

      </div>
    </section>
  );
};

export default LatestBlog;
