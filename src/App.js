import { Route, Switch, Redirect } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import Layout from "./components/Layout";

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/notes" />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
