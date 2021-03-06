import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
        similique culpa aspernatur recusandae dignissimos voluptatem ipsam
        fugiat explicabo quos architecto, iste beatae reiciendis doloremque illo
        distinctio accusantium nesciunt? Placeat, fugiat.
      </p>
    </div>
  );
};

const MoreInfo = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul className="subNav">
        <li>
          <Link to={`${url}/aboutUs`}>About US</Link>
        </li>
        <li>
          <Link to={`${url}/locations`}>Locations</Link>
        </li>
        <Switch>
          <Route exact path={path}>
            <h4>Elige un tema de Contacto</h4>
          </Route>
          <Route path={`${path}/aboutUs`}>
            <h3>About us</h3>
          </Route>
          <Route path={`${path}/locations`}>
            <h3>Locations</h3>
          </Route>
        </Switch>
      </ul>
    </div>
  );
};

const ReactTopics = () => {
  //let match = useRouteMatch();
  //console.log(match);
  //'path' nos permite construir rutas relativas <Route>, mientras que 'url' nos permite construir enlaces relativos <Link> o <NavLink>.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/moreInfo`}>More Info</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium alias excepturi eos assumenda doloribus aperiam aliquid
            minima maiores, aut labore. Enim, nulla. Amet incidunt fugiat,
            blanditiis fugit maxime ullam officia!
          </p>
        </Route>
        <Route path={`${path}/moreInfo`} component={MoreInfo} />
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
