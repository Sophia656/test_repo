import { PagesContext } from "./components/context/context"
import React, { useState } from "react";
import LangBtn from "./components/UI/language-btn/LangBtn";
import Burger from "./components/burger/Burger";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const HomePage = React.lazy(() => import('./pages/home/HomePage'));

const PersonalPage = React.lazy(() => import('./pages/personal/PersonalPage'));
const ThreeMirrors = React.lazy(() => import('./pages/personal/series/three-mirrors/ThreeMirrors'));
const Cities = React.lazy(() => import('./pages/personal/series/cities/Cities'));

const PortraitsPage = React.lazy(() => import('./pages/portraits/PortraitsPage'));
const Anton = React.lazy(() => import('./pages/portraits/series/anton/Anton'));
const Rina = React.lazy(() => import('./pages/portraits/series/rina/Rina'));
const Kaya = React.lazy(() => import('./pages/portraits/series/kaya/Kaya'));
const RinaAnna = React.lazy(() => import('./pages/portraits/series/rina_anna/RinaAnna'));
const Nadya = React.lazy(() => import('./pages/portraits/series/nadya/Nadya'));
const Maya = React.lazy(() => import('./pages/portraits/series/maya/Maya'));

const PrivatePage = React.lazy(() => import('./pages/private/PrivatePage'));
const WeddDay = React.lazy(() => import('./pages/private/series/wedd-day/WeddDay'));
const Ballet = React.lazy(() => import('./pages/private/series/ballet/Ballet'));
const CentrifugalForce = React.lazy(() => import('./pages/private/series/centrifugal_force/CentrifugalForce'));

const ContactsPage = React.lazy(() => import('./pages/contacts/ContactsPage'));

function App() {
  const [height, setHeight] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  const [baseHeight, setBaseHeight] = useState('fit-content')
  const [modalCrYear, setModalCrYear] = useState('')
  const [testAgeModal, setTestAgeModal] = useState(true)
  const [rus, setRus] = useState(false)
  const [showBurger, setShowBurger] = useState(false)

  const handleClick = () => {
    document.scrollIntoView(0, {behavior: 'smooth'});
  }

  return (
    <PagesContext.Provider value={{
      height, setHeight, 
      baseHeight, setBaseHeight, 
      navigate, location,
      modalCrYear, setModalCrYear,
      testAgeModal, setTestAgeModal,
      rus, setRus,
      showBurger, setShowBurger,
      handleClick
    }}>
      <Burger />
      <LangBtn />
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<div>loading</div>}>
              <HomePage />
          </React.Suspense>
        }/>
        <Route path='/personal' element={
          <React.Suspense fallback={<div>loading</div>}>
              <PersonalPage />
          </React.Suspense>
        }/>
        <Route path='/personal/three_mirrors_without_amalgam' element={
          <React.Suspense fallback={<div>loading</div>}>
              <ThreeMirrors />
          </React.Suspense>
        }/>
        <Route path='/personal/between_the_city_yes_and_the_city_no' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Cities />
          </React.Suspense>
        }/>
        <Route path='/portraits' element={
          <React.Suspense fallback={<div>loading</div>}>
              <PortraitsPage />
          </React.Suspense>
        }/>
        <Route path='/portraits/anton' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Anton />
          </React.Suspense>
        }/>
        <Route path='/portraits/rina' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Rina />
          </React.Suspense>
        }/>
        <Route path='/portraits/rina_anna' element={
          <React.Suspense fallback={<div>loading</div>}>
              <RinaAnna />
          </React.Suspense>
        }/>
        <Route path='/portraits/kaya_kan' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Kaya />
          </React.Suspense>
        }/>
        <Route path='/portraits/nadya' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Nadya />
          </React.Suspense>
        }/>
        <Route path='/portraits/maya' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Maya />
          </React.Suspense>
        }/>
        <Route path='/private_stories' element={
          <React.Suspense fallback={<div>loading</div>}>
              <PrivatePage />
          </React.Suspense>
        }/>
        <Route path='/private_stories/wedd_day' element={
          <React.Suspense fallback={<div>loading</div>}>
              <WeddDay />
          </React.Suspense>
        }/>
        <Route path='/private_stories/ballet_class' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Ballet />
          </React.Suspense>
        }/>
        <Route path='/private_stories/centrifugal_force' element={
          <React.Suspense fallback={<div>loading</div>}>
              <CentrifugalForce />
          </React.Suspense>
        }/>
        <Route path='/contacts' element={
          <React.Suspense fallback={<div>loading</div>}>
              <ContactsPage />
          </React.Suspense>
        }/>
        <Route path='*' element={
          <React.Suspense fallback={<div>loading</div>}>
              <HomePage/>
          </React.Suspense>
        }/>
      </Routes>
    </PagesContext.Provider>
  );
}

export default App;
