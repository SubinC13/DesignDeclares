import './App.css'
import { Grid, Snackbar } from '@mui/material'
import Header from './containers/Header/Header'
import MenuPanel from './containers/MenuPanel/MenuPanel'
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'
import BreakDown from './containers/BreakDown/BreakDown'
import DonateD from './containers/DonateD/DonateD'
import ActsEmergeny from './containers/ActsEmergeny/ActsEmergeny'
import LatestContainer from './containers/LatestContainer/LatestContainer'
import Newsletter from './containers/Newsletter/Newsletter'
import Signatories from './containers/Signatories/Signatories'
import Footer from './containers/Footer/Footer'

function App() {

  return (
    <>
      <ScrollIndicator />
      <Grid sx={{ width: "100%" }}>
        <Grid sx={{ height: "100vh" }}>
          <Header />
        </Grid>
        <BreakDown />
        <DonateD />
        <ActsEmergeny sectionTwo={false} />
        <ActsEmergeny sectionTwo={true} />
        <LatestContainer />
        <Newsletter />
        <Signatories secondOne={false} />
        <Signatories secondOne={true} id="last-section" />
        <Snackbar
          open={true}
          onClose={() => { }}
          message={<MenuPanel />}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // 📍 Key line!
        />
        <Footer />
      </Grid>
    </>
  )
}

export default App
