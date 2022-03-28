
import { connect } from 'react-redux'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Router from './router/Router'

function App(props) {

  const { auth } = props


  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.authState
  }
}

export default connect(mapStateToProps, {  })(App)
