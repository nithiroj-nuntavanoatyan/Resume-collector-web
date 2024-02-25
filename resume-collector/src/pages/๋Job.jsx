import { useLoaderData, useParams } from "react-router-dom"
import AddResume from "../components/AddResume"
import ResumeCard from "../components/ResumeCard"
import { Link } from "react-router-dom"
import SortingFilter from "../components/SortingFilter"


// this need to be fix after progress

function Job() {

  const { Jobtitle } = useParams()
  // const job = useLoaderData()

  return (
    <div>
      <div className="header">
        <div className="headername text-3xl md:text-5xl m-4 text-center font-semibold grid-rows-3 md:flex md:justify-evenly items-center ">
          {Jobtitle}
          <SortingFilter/>
          <AddResume/>
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

// loader function
// export const jobLoader = async ({ params }) => {
//   const { Jobtitle } = params

//   const res = await fetch ('/Resume/' + Jobtitle)

//   return res.json()
// } 