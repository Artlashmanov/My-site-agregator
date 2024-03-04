import HeaderOnly from "../components/header/header-only";
import FormOffer from "../components/form/form-offer";


function FavoritesPage () {


  return(


    <main className="page__main page__main--favorites">
      <HeaderOnly />
        <div className="favoritechange">
          <section className="favorites">
            <h1 className="favorites__title">Заполните форму заявки на ремонт</h1>
             <FormOffer />


    </section>

    </div>

    </main>



  );
}

export default FavoritesPage;


//<div className="page__favorites-container container">
