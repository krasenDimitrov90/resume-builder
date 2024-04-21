import { AdditionalDetails, MainDetails, Header, Profile } from './components';

function App() {
  return (
    <article class="cv-container">
      <section class="cv-container-left">
        <Header />
        <Profile />
        <MainDetails />
      </section>
      <section class="cv-container-right">
        <AdditionalDetails />
      </section>
    </article>
  );
}

export default App;