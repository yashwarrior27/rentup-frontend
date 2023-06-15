import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import SingleBlog from "../blog/SingleBlog"
import  Counselling  from "../Counselling/Counselling"
import Accommodations from "../accommodations/accommodations"
import scholarships from "../scholarships/scholarships"
import coaching from "../coaching/coaching"
import community from "../community/community"
import gym from "../gym/gym"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/single-blog/:id' component={SingleBlog} ></Route>
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/counselling' component={Counselling} />
          <Route path='/accommodations' component={Accommodations} />
          <Route path='/scholarships' component={scholarships} />
          <Route path='/coaching' component={coaching} />
          <Route path='/community' component={community} />
          <Route path='/gym' component={gym} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
