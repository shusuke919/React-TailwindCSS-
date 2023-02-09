import "./App.css";

function App() {
  return (
    <>
    <header className="text-gray-700 border-b-2 border-gray-200 p-5">
      <div className="container flex mx-auto flex-col md:flex-row items-center">
        <a href="aaa" className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="text-xl ml-3">shusukeCode</span>
        </a>

        <nav className="md:ml-auto text-base">
          <a href="#fome" className="mr-5 hover:text-blue-400 duration-300">
            Home
          </a>
          <a href="#fome" className="mr-5 hover:text-blue-400 duration-300">
            About
          </a>
          <a href="#fome" className="mr-5 hover:text-blue-400 duration-300">
            Skills
          </a>
          <a href="#fome" className=" hover:text-blue-400 duration-300">
            Blog
          </a>
        </nav>
      </div>
    </header>
    
    <section className="text-gray-700" id='home'>
      <div className="flex flex-col md:flex-row container mx-auto py-20 px-5 items-center">
      <div className="md:w-1/2 mb-16 flex-grow lg:pr-24 md:pr-16 pr-10 text-center md:text-left">
        <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">Hi!
          <br />
          I'm shusukeCode
          <br />
          Web Developer
        </h1>
        <p className="mb-8 leading-relaxed">
          来てくれてありがとう<br />
          今日もいい天気<br />
          これはTailWindCssの勉強です
        </p>
        <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">Contact Me</button>

      </div>
      
      <div className="md:w-1/2">
        <img src="./icon2.jpg" alt="" />
      </div>
      </div>
      
  
    </section>
    </>
  );
}

export default App;
