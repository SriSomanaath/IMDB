import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto p-4">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold">Community Page</h1>
    </header>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src={`https://source.unsplash.com/random/800x600?sig=${index}`}
              alt={`Post ${index}`}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Post Title {index + 1}</h3>
              <p className="text-gray-600"> Meet the diverse members of our community. Discover and connect with people who share your interests and passions..</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-4">Community Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src={`https://source.unsplash.com/random/800x600?sig=${index + 100}`}
              alt={`User ${index + 1}`}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Tech Developers {index + 1}</h3>
              <p className="text-gray-600">Joined: Dec 7, 2023</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  )
}

export default page