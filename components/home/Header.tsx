const Header = () => {
  return (
    <section className="bg-black text-white relative h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-70 p-12 rounded-lg text-center">
        <h1>INDIGENOUS CONFERENCE SERVICES</h1>
        <h1>(ICS-MEES PTY LTD)</h1>
        <h2>THE IMPOSSIBLE IS JUST THE NEXT STEP FOR US IN OUR JOURNEY</h2>
        <div className="flex justify-between mt-10">
          <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3" href="" target="_blank" rel="noreferrer">Register</a>
          <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3" href="" target="_blank" rel="noreferrer">Submit a paper</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
