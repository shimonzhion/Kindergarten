



export default function TeachersCard({ teacher }) {
  const {fname,lname,phone,img,id} = teacher;
  return (
    <div id={id}>
      <div>
        <img className="img-techers" src={img} alt="teacher-img" />
      </div>
      <div className="card_body">
        <h3>
          {fname} {lname}
        </h3>
        <h5>phone:{phone}</h5>
    
      </div>
    </div>
  );
}
