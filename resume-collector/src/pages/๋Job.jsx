import { useParams } from "react-router-dom"
import AddResume from "../components/AddResume"
import ResumeCard from "../components/ResumeCard"
import SortingFilter from "../components/SortingFilter"


// this need to be fix after progress

function Job() {

  const { Jobtitle } = useParams()
  return (
    <div>
      <div className="header">
        <div className="headername text-3xl md:text-5xl my-3 text-center font-semibold grid-rows-3 md:flex md:justify-around items-center ">
          {Jobtitle}
          <ul>
          <SortingFilter/>
          <AddResume/>
          </ul>
        </div>

      </div>
      <div className="cardcategory place-items-center grid md:grid-cols-2 lg:grid-cols-3">
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </div>
    </div>
  )
}

export default Job
