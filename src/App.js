import MainNavigation from "./components/layout/MainNavigation";
import QuoteList from "./components/quotes/QuoteList";
import { Route, Switch } from "react-router-dom";
import QuoteForm from "./components/quotes/QuoteForm";

function App() {
  const Dummy_data = [
    {
      id: 99,
      author: "chetan",
      text: "My First Book",
    },
    {
      id: 98,
      author: "Vishu",
      text: "My First Book",
    },
    {
      id: 96,
      author: "Adarsh",
      text: "My First Book",
    },
  ];
  console.log(Dummy_data);

  const onAddQuoteHandler = ({ author, text, id }) => {
    const newQuote = {
      author,
      text,
      id,
    };
    Dummy_data.push(newQuote);
  };

  return (
    <>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/allQuote">
            <QuoteList />
          </Route>

          <Route path="/addQuote">
            <QuoteForm onAddQuote={onAddQuoteHandler} />
          </Route>
        </Switch>
      </main>
      <QuoteList quote={Dummy_data} />
    </>
  );
}
export default App;
