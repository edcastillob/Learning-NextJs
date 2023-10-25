import Head from 'next/head';

export default function Contact() {
  return ( 
      

      <div className="min-h-screen bg-dark-100 flex flex-col items-center justify-center">       

        <div className="bg-dark rounded-md p-6 shadow-md w-96">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 text-sm">Name:</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm">Email:</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2" />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 text-sm">message:</label>
              <textarea id="message" name="message" className="w-full border border-gray-300 rounded-md p-2 h-32"></textarea>
            </div>

            <button type="submit" className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600">
              send
            </button>
          </form>
        </div>      
    </div>
  );
}
