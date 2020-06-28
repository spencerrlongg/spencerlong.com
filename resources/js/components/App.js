import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
<div className="px-20 max-w-sm w-full lg:max-w-full lg:flex-between">
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">

      <div className="text-gray-900 font-bold text-xl mb-2">spencerlong.com</div>
      <p className="text-gray-700 text-base">Website built using Laravel, React, and TailwindCSS - my current stack of choice. Will use this for
        a blog and resume, as well as a testing ground for ideas and things I'm working on learning.</p>
    </div>
    <div className="flex items-center">
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Spencer Long</p>
      </div>
    </div>
  </div>
</div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
