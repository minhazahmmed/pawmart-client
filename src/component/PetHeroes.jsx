import React from "react";
import { FaPaw, FaDog, FaUserFriends, FaHeart } from "react-icons/fa";

const PetHeroes = () => {
  return (
    <section className="text-center my-16 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-black">
        Meet Our Pet Heroes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <FaPaw className="text-5xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-black">Sarah J.</h3>
          <p className="text-black">
            Adopted 2 rescue dogs and actively volunteers at local shelters.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <FaDog className="text-5xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-black">Mark T.</h3>
          <p className="text-black">
            Runs a foster program for abandoned puppies and kittens.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <FaUserFriends className="text-5xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-black">Anna K.</h3>
          <p className="text-black">
            Volunteers weekly at animal shelters and runs awareness campaigns.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <FaHeart className="text-5xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-black">James L.</h3>
          <p className="text-black">
            Adopted a senior dog and shares inspiring stories on social media.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PetHeroes;
