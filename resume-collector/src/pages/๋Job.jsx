import ResumeCard from "../components/ResumeCard"


// this need to be fix after progress

function Job() {
  return (
    <div>
      <h1 className="headername text-5xl text-center m-2 font ">อาชีพ</h1>
        <div className="cardcategory place-items-center grid md:grid-cols-2 lg:grid-cols-3">
          <ResumeCard/>
          <ResumeCard/>
          <ResumeCard/>
          <ResumeCard/>
        </div>
    </div>
  )
}

export default Job