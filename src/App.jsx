import './App.css'

function App() {

  return (
    <>
      <img src="/image/gradient.png" alt="#" className='img-gradient' />
      <div className="layer-blur"></div>

      <div className="container">
        <header>
          <h1 className="logo">Your Title</h1>

          <nav>
            <a href="#">Trading</a>
            <a href="#">Markets</a>
            <a href="#">Platforms</a>
            <a href="#">Resources</a>
            <a href="#">Company</a>
          </nav>

          <button className='btn-sign'>SIGN IN</button>
        </header>

        <main>
          <div className="content">
            <div className="tag-box">
              <div className="tag">INTRODUCING</div>
            </div>

            <h1>Upgrade the way<br />you trade</h1>

            <p className='description'>
              Trade with the world’s largest retail broker and benefit from better-than-market conditions.
            </p>

            <div className="buttons">
              <a href="#" className='btn-get-started'>Register &gt;</a>
              <a href="#" className="btn-sign-main">Try free demo &gt;</a>
            </div>
          </div>
        </main>

        <spline-viewer className="robot" url="https://prod.spline.design/0mnUTtPG8WvJjnNh/scene.splinecode"></spline-viewer>
      </div>

    </>
  )
}

export default App
