const HomeApi = () => {
  return (
    <div className="my-20">
      <div className="text-center text-5xl my-20">
        GET OUR FREE API
      </div>
      <div className="text-2xl">
        <p>Our Book API is totally <span className="text-2xl font-semibold">FREE</span> and trusted by <span className="text-2xl font-semibold">MILLIONS!</span></p>

        <div>
          <div className="mt-10 mb-5">
            Install our local <span className="font-semibold">API</span> fetcher:- 
          </div>
          <div className="mockup-code">
            <pre data-prefix="$"><code>npm i OGLibrary</code></pre>
            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApi;