import React from 'react';

const Home = () => {
    return (
        <div className="bg-gradient-to-br from-fuchsia-500 to-rose-500 rounded-3xl mt-2 h-[500px] flex flex-col items-center justify-center text-white text-center p-6">
    <h1 className="text-4xl font-bold mb-4">Welcome to Your Learning Journey</h1>
    <p className="text-lg mb-6">Discover our wide range of courses designed to boost your career and personal growth. Start learning today and unlock new opportunities!</p>
    
    {/* Button Section */}
    <div className="flex space-x-4">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">Browse Courses</button>
        <button className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">Get Started</button>
    </div>
</div>

    );
};

export default Home;