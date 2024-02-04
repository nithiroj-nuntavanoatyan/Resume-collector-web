import ResumeCard from "../components/ResumeCard"


// this need to be fix after progress

function Programmer() {
  return (
    <div>
        <h1 className="cardcategory place-items-center grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ResumeCard/>
          <ResumeCard/>
          <ResumeCard/>
          <ResumeCard/>
        </h1>
    </div>
  )
}

export default Programmer