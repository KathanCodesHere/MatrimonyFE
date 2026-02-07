import { CheckCircle } from "lucide-react";

const Welcome = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-22 items-center">
          
          {/* Left Section - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac"
              alt="couple"
              className="rounded-lg object-cover w-full h-68"
            />
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="couple"
              className="rounded-lg object-cover w-full h-48"
            />
            <img
              src="https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9"
              alt="couple"
              className="rounded-lg object-cover w-full h-48"
            />
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="couple"
              className="rounded-lg object-cover w-full h-68"
            />
          </div>

          {/* Right Section - Content */}
          <div>
            {/* Heading */}
            <h2 className="text-red-600 mb-4">
              Welcome To <br /><span className=" text-3xl text-black md:text-4xl font-bold">WP Matrimony</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 max-w-lg">
              WP Matrimony is a one-stop spot for all your matrimonial needs.
              With millions of happy couples already found their perfect match
              on our site, we’re confident that you’ll be able to find yours as well!
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-8 max-w-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <span className="text-gray-700">
                  You can trust us to find your dream partner. We are one of the
                  best and most trusted matrimonial services providers.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <span className="text-gray-700">
                  Every user on our platform has been verified by an expert team
                  to make sure they are real and active.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <span className="text-gray-700">
                  The design of this app is sleek and user-friendly. It will make
                  it easy for anyone to find what they need in just a few clicks.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <span className="text-gray-700">
                  With the help of this new search tool, you can find your perfect
                  match in no time! It has been designed to be quick and efficient.
                </span>
              </li>
            </ul>

            {/* Buttons */}
            <div className=" flex flex-col sm:flex-row gap-8">
              <button className="bg-red-600 text-white px-18 py-5 rounded-md hover:bg-red-700 transition">
                Let’s Start
              </button>
              <button className="border border-red-600 text-red-600 px-18 py-3 rounded-md hover:bg-red-50 transition">
                Explore More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Welcome;
