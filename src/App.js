import { AdditionalDetails, Experience, Header, Profile } from './components';
import { INFO } from './info';

function App() {
  return (
    <article class="cv-container">
      <section class="cv-container-left">
        <Header />
        <Profile info={INFO.profile}/>
        <Experience experience={INFO.experience} />
      </section>
      <section class="cv-container-right">
        <AdditionalDetails />
      </section>
    </article>
  );
}

export default App;