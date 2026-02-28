import './App.css'

function App() {
  return (
    <div className="landing">
      <header className="hero">
        <div className="hero-main">
          <img src="/AIAntSubject.png" alt="Clever Antony" className="hero-mascot" />
          <div className="hero-content">
            <p className="hero-eyebrow">BETTER CITIZENSHIP</p>
          <h1>Your path to citizenship starts here</h1>
          <p className="hero-subhead">
            The education needed to blur borders starts here.
          </p>
          <p className="hero-oneliner">
            A mobile study app that helps you prepare for citizenship tests in the US, Canada, UK, Australia, France, and Spain—in your preferred language with multiple study modes and an AI-powered search assistant.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-app-store" aria-label="Download on the App Store">
              Download on the App Store
            </a>
            <a href="#" className="btn btn-play-store" aria-label="Get it on Google Play">
              Get it on Google Play
            </a>
          </div>
          <p className="cta-note">Available now on iOS and Android</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="app-preview">
            <div className="app-preview-track">
              {[
                'Citizenship-2.png',
                'Citizenship-3.png',
                'Citizenship-4.png',
                'Citizenship-5.png',
                'Citizenship-6.png',
                'Citizenship-7.png',
                'Citizenship-9.png',
                'Citizenship-10.png',
              ].map((src) => (
                <div key={src} className="app-preview-slide">
                  <img src={`/${src}`} alt="App preview" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="highlights">
        <div className="container">
          <h2 className="section-label">HIGHLIGHTS</h2>
          <p className="highlights-lead">
            Start with the country you&apos;re preparing for, then explore study modes that fit your life.
          </p>
          <ul className="highlights-list">
            <li><strong>6 countries</strong> — US, Canada, UK, Australia, France, Spain</li>
            <li><strong>5 languages</strong> — English, Spanish, French, Hindi, Chinese</li>
            <li><strong>3 study modes</strong> — Random Quiz, Flash Cards, Sprint Quiz</li>
            <li><strong>Clever Antony</strong> — AI-powered search for exam questions</li>
            <li><strong>Track your progress</strong> — Stats, streaks, and quiz history</li>
            <li><strong>Share achievements</strong> — Celebrate and motivate others</li>
          </ul>
        </div>
      </section>

      <section className="problem-solution">
        <div className="container">
          <h2 className="section-label">WHY BETTER CITIZENSHIP</h2>
          <h3>Citizenship tests don&apos;t have to be overwhelming</h3>
          <p>
            Official study materials can feel intimidating. Limited options in your native language make preparation harder. Better Citizenship makes it manageable—study in your language, at your pace, with flexible modes that fit your life.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-label">EVERYTHING YOU NEED TO PREPARE</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <span className="feature-icon">🌍</span>
              <h3>6 Countries</h3>
              <p>US, Canada, UK, Australia, France, and Spain—official question banks for each.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🗣️</span>
              <h3>5 Languages</h3>
              <p>Study in English, Spanish, French, Hindi, or Chinese. Quick Language lets you swap during quizzes when you need help.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📚</span>
              <h3>3 Study Modes</h3>
              <p>Random Quiz, Flash Cards, and Sprint Quiz—choose what fits your schedule.</p>
            </div>
            <div className="feature-card feature-card-highlight">
              <span className="feature-icon">🤖</span>
              <h3>Clever Antony</h3>
              <p>AI-powered search. Type a topic like &quot;Supreme law of the land&quot; and get matching questions with official answers.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📊</span>
              <h3>Stats & Progress</h3>
              <p>Track quizzes completed, days active, average score, streaks, and quiz history.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎉</span>
              <h3>Share Achievements</h3>
              <p>Celebrate your progress and motivate others. Share your quiz results with friends and family.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-message">
        <div className="container">
          <h2 className="section-label">OUR MESSAGE TO YOU</h2>
          <blockquote>
            <p>
              During this time of difficulty and misunderstanding, we wanted to create this app to help people come together. It is our belief that borders are an unfortunate reality that we all must contend with.
            </p>
            <p>
              From the US, we desire to have your culture, language, talents, skills, and uniqueness in our neighborhoods—walking through our shops and leading our businesses—just as we hope to be welcome in yours. The earth&apos;s beaches, mountains, valleys, and plains exist for us all to enjoy.
            </p>
            <p>
              While borders can&apos;t be erased, the education needed to blur them starts here with Better Citizenship.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <h2 className="section-label">BLOG</h2>
          <h3 className="blog-title">Tips and insights for your citizenship journey</h3>
          <div className="blog-grid">
            <article className="blog-card">
              <a href="/blog/what-better-citizenship-does.html">
                <h4>What Better Citizenship Does</h4>
                <p className="blog-excerpt">A guide to the app—6 countries, 5 languages, 3 study modes, Clever Antony, and more.</p>
                <span className="blog-date">Read more</span>
              </a>
            </article>
            <article className="blog-card">
              <a href="#">
                <h4>Understanding the naturalization process</h4>
                <p className="blog-excerpt">A brief overview of what to expect when applying for citizenship.</p>
                <span className="blog-date">Coming soon</span>
              </a>
            </article>
            <article className="blog-card">
              <a href="#">
                <h4>Study in your language</h4>
                <p className="blog-excerpt">How Better Citizenship supports learners in 5 languages.</p>
                <span className="blog-date">Coming soon</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="feedback">
        <div className="container">
          <h2 className="section-label">WE WANT YOUR FEEDBACK</h2>
          <h3 className="feedback-title">Your input helps us improve</h3>
          <p className="feedback-intro">
            We really want to hear from you. Whether you have a suggestion, spotted a bug, or want to share your experience—your feedback helps make Better Citizenship better for everyone.
          </p>
          <a href="https://www.bettercitizenshipapp.com/support" className="btn btn-feedback">
            Share your feedback
          </a>
          <p className="feedback-email">
            Or email us at <a href="mailto:support@bettercitizenshipapp.com">support@bettercitizenshipapp.com</a>
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-cta">
            <a href="#" className="store-badge" aria-label="Download on the App Store">
              <span className="store-badge-text">Download on the App Store</span>
            </a>
            <a href="#" className="store-badge" aria-label="Get it on Google Play">
              <span className="store-badge-text">Get it on Google Play</span>
            </a>
          </div>
          <div className="footer-disclaimer">
            <p>
              <strong>Disclaimer:</strong> This app is a study tool. Study official documents from the country you wish to move to and immerse yourself in the local population. Translations are provided by a small team and may not be accurate; we plan to fund professional translation as usage grows.
            </p>
          </div>
          <div className="footer-links">
            <a href="https://www.bettercitizenshipapp.com/terms">Terms</a>
            <span className="footer-sep">·</span>
            <a href="https://www.bettercitizenshipapp.com/privacy">Privacy</a>
            <span className="footer-sep">·</span>
            <a href="https://www.bettercitizenshipapp.com/support">Support</a>
          </div>
          <p className="footer-email">
            <a href="mailto:support@bettercitizenshipapp.com">support@bettercitizenshipapp.com</a>
          </p>
          <p className="footer-copy">© Better Citizenship</p>
        </div>
      </footer>
    </div>
  )
}

export default App
