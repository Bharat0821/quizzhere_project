import { RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import HeroSection from './pages/student/HeroSection'
import { createBrowserRouter} from 'react-router-dom'
import Quizzes from './pages/student/Quizzes'
import MainLayout from './layout/MainLayout'
import MyProfile from './pages/student/MyProfile'
import Sidebar from './pages/admin/Sidebar'
import QuizzesTable from './pages/admin/Quiz/QuizzesTable'
import Dashboard from './pages/admin/Dashboard'
import AddQuiz from './pages/admin/Quiz/AddQuiz'
import Footer from './components/ui/Footer'
import QuizPortal from './pages/student/HtmlQuiz'
import HtmlQuiz from './pages/student/HtmlQuiz'
import JsQuiz from './pages/student/JsQuiz'
import CssQuiz from './pages/student/CssQuiz'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import LicensePage from './pages/LicensePage'
import HtmlCnt from './pages/readingDocs/HtmlCnt'
import CssCnt from './pages/readingDocs/CssCnt'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path:"/",
        element:
        <>
          <HeroSection/>
          <Quizzes/>
          <Footer/>
        </>
      },
      {
      path:"/login",
      element:<Login />
      },
      {
        path: "profile",
        element: 
        <>
          <MyProfile />
          <Footer />
        </>
      },
      {
        path: "/quiz",
        element: <QuizPortal />,
      },
      {
        path: "html",
        element: <HtmlQuiz />,
      },
      {
        path: "javascript",
            element: <JsQuiz />,
          },
          {
            path: "css",
            element: <CssQuiz />,
          },
          {
            path:"contact",
            element: <ContactPage />
          },
          {
            path: "privacy",
            element: <PrivacyPolicy />,
          },
           {
            path:"about",
            element: <AboutPage />
           },
           {
             path: "license",
             element: <LicensePage />
           },
           {
             path: "html-docs",
             element: <HtmlCnt />,
           },
           {
            path: "css-docs",
            element: <CssCnt />,
           },
    
      //admin routes starts from here
      {
        path: "admin",
        element: <Sidebar/>,
             children:[
              {
                path: "dashboard",
                element: <Dashboard />
              },
              {
                path: "quizzes",
                element: <QuizzesTable />
              },
              {
                path: "quizzes/create",
                element: <AddQuiz />
              }
             ]
      }
    ],
  },
]);

function App() {
  return(
    <main >
     <RouterProvider router={appRouter}/>
    </main>
    )
   
  
}

export default App;
