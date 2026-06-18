import React from 'react';

const values = [
  {
    icon: '❤️',
    title: 'Passion',
    description:
      'Every dish is crafted with love and dedication to culinary excellence, ensuring each bite is a delightful experience.',
  },
  {
    icon: '🍃',
    title: 'Sustainability',
    description:
      'We source ingredients responsibly from local farms and suppliers, supporting our community and environment.',
  },
  {
    icon: '🏡',
    title: 'Community',
    description:
      'Building connections through food, we create a welcoming space where everyone feels at home.',
  },
];

const MissionValues = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Mission & Values</h2>
        <p className="mt-2 text-gray-600">
          We believe great food brings people together and creates lasting memories
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 text-3xl">
                {/* A better way to handle icons is with SVG or a library, but this uses simple text */}
                {value.icon === '❤️' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-8 h-8 text-orange-500"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                )}
                {value.icon === '🍃' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-8 h-8 text-orange-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8.95c-.326 0-.585.199-.585.5s.259.5.585.5.585-.199.585-.5-.259-.5-.585-.5z" />
                    <path d="M10.975 11.233A5.748 5.748 0 0 0 13 8a5.748 5.748 0 0 0-2.025-3.233l-.041-.02a.25.25 0 0 1 .328-.382l.041.02A6.748 6.748 0 0 1 14 8a6.748 6.748 0 0 1-2.426 4.908.25.25 0 0 1-.328-.382z" />
                    <path d="M11.134 7.647a.25.25 0 0 1 .284.148c.552.955.77 2.062.617 3.204a.25.25 0 0 1-.397.108c-.146-.118-.324-.234-.516-.346a.25.25 0 0 1-.137-.488c.241.13.484.267.727.404.147.079.231.026.213-.153a.25.25 0 0 1 .148-.284z" />
                    <path d="M5.025 4.767A5.748 5.748 0 0 0 3 8a5.748 5.748 0 0 0 2.025 3.233l.041.02a.25.25 0 0 1-.328.382l-.041-.02A6.748 6.748 0 0 1 2 8a6.748 6.748 0 0 1 2.426-4.908.25.25 0 0 1 .328.382z" />
                    <path d="M4.866 8.353a.25.25 0 0 1-.284-.148c-.552-.955-.77-2.062-.617-3.204a.25.25 0 0 1 .397-.108c.146.118.324.234.516.346a.25.25 0 0 1 .137.488c-.241-.13-.484-.267-.727-.404-.147-.079-.231-.026-.213.153a.25.25 0 0 1-.148.284z" />
                    <path d="M8 12.05c.895 0 1.636-.263 2.152-.682a.25.25 0 0 1 .311.378c-.684.563-1.63 1.004-2.463 1.004-.833 0-1.779-.441-2.463-1.004a.25.25 0 0 1 .31-.378c.516.419 1.257.682 2.152.682z" />
                  </svg>
                )}
                {value.icon === '🏡' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-8 h-8 text-orange-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 12.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm-1-1a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13z" />
                    <path d="M2.5 12.5h11V10h-11v2.5z" fillRule="evenodd" />
                    <path d="M2 12.5h12V10h-12v2.5z" fillRule="evenodd" />
                    <path d="M.5 13.5a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1H.5zM15 9H1v-1h14v1z" />
                    <path d="M8 1.5a.5.5 0 0 1 .5.5v1.5H9v-1H8.5a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M11 5.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4z" />
                    <path d="M11.5 5h-5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z" fillRule="evenodd" />
                  </svg>
                )}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{value.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionValues;