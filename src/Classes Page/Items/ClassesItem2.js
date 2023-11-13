export default function ClassesItem2(props) {
  return (
    <div className="classes-grid">
      <div className="classes-img-div">
        <img
          className="classes-img"
          src={props.img}
          alt="Kids playing tennis"
        />
      </div>
      <div className="classes-text-div">
        <h3 className="heading-terciary">
          {props.title}{" "}
          <span>{props.age ? `(${props.age} years old)` : ""}</span>
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
