import { Banner } from "./components/Banner"
import { Explanation } from "./components/Explanation"
import { Presentation } from "./components/Presentation"
import { StickyFooter } from "./components/StickyFooter"
import { Layout } from "./components/Layout"
import { ThemeProvider} from "@material-ui/core"
import { createTheme } from '@material-ui/core/styles'

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 320,
        xs: 480,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1220,
        xxl: 1366,
        xxxl: 1620,
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Banner />
        <Explanation />
        <Presentation />
        <StickyFooter />
      </Layout>
    </ThemeProvider>
  )
}

export default App
