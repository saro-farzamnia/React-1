
const CoursesList = () => {
    const courses=[{id:1,title:"Javascript"},{id:2,title:"React"},{id:3,title:"Next"}];
  return (
    <div>
      <ul>
        {
            courses.map((i)=><li keu={i.id}>{i.title}</li>)
        }
      </ul>
      <ol>
        {
            courses.map((i)=><li keu={i.id}>{i.title}</li>)
        }
      </ol>
      {/* or */}
      <ul>
        {
            courses.map((i)=><>
            <div keu={i.id}>
            <li>{i.title}</li>
            </div>
            </>)
        }
      </ul>
    </div>
  )
}

export default CoursesList
