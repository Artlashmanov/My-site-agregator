import { Link } from "react-router-dom";
import Header from "../components/header/headermain"
import 'bootstrap/dist/css/bootstrap.min.css';

function MainPage (){
  return (

<div className="page page--gray page--main">
  <Header />
     <main className="page__main page__main--index">
        <h1 className="visually-hidden">Main</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="repair">
                  <button
                    >Ремонт Авто</button>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="paint">
                  <button>Окрас Авто</button>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="detailing">
                  <button>Детейлинг</button>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item tabs" to='tuning'>
                  <button>Тюнинг Авто</button>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="parts">
                  <button>Запчасти</button>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="events">
                  <button>События города</button>
                </Link>
              </li>
            </ul>
          </section>
        </div>

      </main>
      </div>
  );
}

export default MainPage;
